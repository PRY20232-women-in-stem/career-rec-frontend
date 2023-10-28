import { useEffect, useState } from 'react';
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { preTestJson } from "../util/PreTestJson";
import { preTestTheme } from "../util/PreTestTheme";
import 'survey-core/defaultV2.min.css';
import { Heading, Highlight, Stack, Text, Spinner, Flex } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { createPreTest } from "../services/PreTestService";
import { updateStudentPreTest } from "../services/StudentService";
import { io } from 'socket.io-client';

function PreTest({ onPreTestComplete }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingDots, setLoadingDots] = useState("");

  const survey = new Model(preTestJson); // Carga el Json de la encuesta
  survey.applyTheme(preTestTheme); // Aplica el estilo personalizado

  survey.onComplete.add((sender) => {
    const answers = sender.data;
    setIsLoading(true);
    surveyOnComplete(answers);
  });

  const surveyOnComplete = async (answers) => {
    const currentUser = JSON.parse(localStorage.getItem("current_user"));
    if (currentUser) {
      const userId = currentUser.userId;
      const answersWithUserId = { ...answers, studentId: userId };
      try {
        await createPreTest(userId, answersWithUserId);
        await updateStudentPreTest(userId);
      } catch (error) {
        console.error("Error enviar el pre-test:", error);
        navigate("/vocational-test") // Si salió mal, redirige a darlo denuevo. Poner un modal de error en el futuro.
      }
    }
  };

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("current_user"));
    if (currentUser) {
      const userId = currentUser.userId;
      const socket = io(process.env.REACT_APP_URL_SOCKET);

      // ESTILOS PARA LA PAGINA
      if (isLoading) {
        setInterval(() => {
          setLoadingDots((prevDots) => (prevDots === "..." ? "" : prevDots + "."));
        }, 500);
        document.body.style.overflow = 'hidden';
      }
      // ESTILOS PARA LA PAGINA

      socket.emit('captureStudentInfo', userId);

      socket.on('recieveMessage', (group) => {
        localStorage.setItem("group", group);
        setIsLoading(false);
        onPreTestComplete();
        window.scrollTo(0, 0);
      });

      return () => {
        socket.disconnect();
        document.body.style.overflow = 'visible';
      };
    }
  }, [onPreTestComplete, isLoading]);

  const SurveyContainer = ({ children }) => ( // Con el propósito de alinear el contenido a la izquierda
    <div style={{ textAlign: "left" }}>{children}</div>
  );

  if (isLoading) {
    return (
      <Flex
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        align="center"
        justify="center"
        backgroundColor="white"
        opacity="0.8"
        zIndex={9999999}
      >
        <Flex direction="column" align="center">
          <Heading color="purple.700" mx={6} mb={20}>No te preocupes, ¡Estamos esperando 5 minutos a que todas tus compañeras respondan!</Heading>
          <Spinner size="xl" color="purple.700" />
          <Text mt={4} fontSize="2xl" color="purple.700">Cargando{loadingDots}</Text>
        </Flex>
      </Flex>
    );
  }

  return (
    <>
      <Heading fontSize={"4xl"} textAlign={"center"} color={"purple.700"}>
        Pre Test
      </Heading>
      <Text fontSize={["md", "lg"]} textAlign={"center"} color={'purple.700'}>
        Este test tiene como propósito medir el interés que tiene la estudiante hacia las carreras STEM sin antes haber recibido contenido especializado.
      </Text>
      <Stack>
        <Heading fontSize={"xl"} textAlign={"center"} color={'purple.700'}>
          ¡Importante!
        </Heading>
        <Text fontSize={["md", "lg"]} textAlign={"center"} color={'purple.700'}>
          <Highlight query={['1 al 5', 'Muy en desacuerdo', 'Muy de acuerdo']} styles={{ px: '1.5', py: '0.4', rounded: 'full', bg: 'purple.300', color: 'white' }}>
            Algunas preguntas contienen valores que van del 1 al 5 donde 1 significa Muy en desacuerdo y 5 significa Muy de acuerdo.
          </Highlight>
        </Text>
      </Stack>
      <SurveyContainer>
        <Survey model={survey} />
      </SurveyContainer>
    </>
  );
}

export default PreTest;