import { useState, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import 'survey-core/defaultV2.min.css';
import { testVocacionalJson } from "../util/TestVocacionalJson";
import { testVocacionalTheme } from "../util/TestVocacionalTheme";
import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Highlight, Image, Stack, Text, Spinner } from "@chakra-ui/react";
import PreTest from "../components/PreTest";
import { useNavigate } from 'react-router-dom';
import { getStudentById } from "../services/StudentService";
import { createVocationalTestPrediction } from "../services/VocationalTestService";

function VocationalTest() {
  const survey = new Model(testVocacionalJson); // Carga el Json de la encuesta
  survey.applyTheme(testVocacionalTheme); // Aplica el estilo personalizado

  const [hasCompletedPreTest, setHasCompletedPreTest] = useState(null); // Validación del pre-test
  const [showResults, setShowResults] = useState(false); // Estado para mostrar los resultados
  const [recommendation, setRecommendation] = useState(""); // Estado para almacenar la recomendación
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  survey.onComplete.add((sender) => {
    const answers = sender.data;
    surveyOnComplete(answers);
    setShowResults(true);
  });

  // Realizar la solicitud al backend para verificar si el usuario ha completado el pre-test
  useEffect(() => {
    const fetchData = async () => {
      const currentUser = JSON.parse(localStorage.getItem("current_user"));
      if (currentUser) {
        const userId = currentUser.userId;
        const response = await getStudentById(userId);
        if (response.preTestCompl) {
          setHasCompletedPreTest(true);
        } else {
          setHasCompletedPreTest(false);
        }
      }
      setTimeout(() => {
        setIsLoading(false); // Finaliza la carga después de un retraso (opcional)
      }, 500);
    };
    fetchData();
  }, []);

  const surveyOnComplete = async (answers) => {
    console.log(answers);
    const response = await createVocationalTestPrediction(answers);
    console.log("response vocational test", response);
    setRecommendation("Ingenieria de sistemas");
  };

  const handleAcceptButtonClick = () => {
    navigate("/content");
    // Logica para enviar la recomendación a la pagina "content"
  };

  const SurveyContainer = ({ children }) => ( // Con el propósito de alinear el contenido a la izquierda
    <div style={{ textAlign: "left" }}>{children}</div>
  );

  const renderResults = () => {
    if (!showResults) {
      return (
        <>
          <Heading fontSize={"4xl"} textAlign={"center"} color={"purple.700"}>
            Test Vocacional
          </Heading>
          <Text fontSize={["md", "lg"]} textAlign={"center"} color={'purple.700'}>
            Este test tiene como propósito conocer las habilidades de cada estudiante con el único fin de poder recomendar carreras de acuerdo a sus intereses.
          </Text>
          <Stack>
            <Heading fontSize={"xl"} textAlign={"center"} color={'purple.700'}>
              ¡Importante!
            </Heading>
            <Text fontSize={["md", "lg"]} textAlign={"center"} color={'purple.700'}>
              <Highlight query={['1 al 5', 'Muy en desacuerdo', 'Muy de acuerdo']} styles={{ px: '1.5', py: '0.4', rounded: 'full', bg: 'purple.300', color: 'white' }}>
                Los valores de la encuesta van del 1 al 5 donde 1 significa Muy en desacuerdo y 5 significa Muy de acuerdo.
              </Highlight>
            </Text>
          </Stack>
          <SurveyContainer>
            <Survey model={survey} />
          </SurveyContainer>
        </>
      );
    } else {
      return (
        <>
          <Heading fontSize={"4xl"} color={"purple.700"}>
            Resultado
          </Heading>
          <Card>
            <CardHeader>
              <Heading fontSize={["2xl"]} color={'purple.700'}>
                ¡Felicitaciones!
              </Heading>
            </CardHeader>
            <CardBody>
              <Image borderRadius='full' src='WomenInStem1.png' mb={5} />
              <Text fontSize={["md", "lg"]} color={'purple.700'} mb={5}>
                De acuerdo a sus intereses y preferencias evaluados en el Test Vocacional, podemos recomendarle la siguiente carrera:
              </Text>
              <Heading fontSize={"lg"} color={'purple.700'}>1. {recommendation}</Heading> {/* RESPUESTAS DEL BACKEND */}
            </CardBody>
            <CardFooter justifyContent={"center"}>
              <Button onClick={handleAcceptButtonClick} colorScheme="purple">Continuar</Button>
            </CardFooter>
          </Card>
        </>
      );
    }
  };

  return (
    <>
      <Flex minH={"100vh"} justify={"center"} bg={"purple.100"}>
        <Stack spacing={4} mx={"auto"} maxW={{ base: "lg", lg: "100%" }} py={12} px={6}>
          {isLoading ? (
            <Spinner size="xl" color="purple.700" speed='0.65s' />
          ) : (
            hasCompletedPreTest ? (
              renderResults()
            ) : (
              <PreTest />
            )
          )}
        </Stack>
      </Flex>
    </>
  );
}

export default VocationalTest;