import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import 'survey-core/defaultV2.min.css';
import { testVocacionalJson } from "../util/TestVocacionalJson";
import { testVocacionalTheme } from "../util/TestVocacionalTheme";
import {
  Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Highlight, Image, Stack, Text, Spinner, Skeleton, useToast, Container, Box
} from '@chakra-ui/react'
import RegisterNowAlert from "../components/RegisterNowAlert";
import { createVocationalTestPrediction } from "../services/VocationalTestService";
import { updateStudentVocationalTest } from "../services/StudentService";

function VocationalTest() {
  const survey = new Model(testVocacionalJson); // Carga el Json de la encuesta
  survey.applyTheme(testVocacionalTheme); // Aplica el estilo personalizado

  const [showResults, setShowResults] = useState(false); // Estado para mostrar los resultados
  const [recommendation, setRecommendation] = useState(""); // Estado para almacenar la recomendación
  const [isLoading, setIsLoading] = useState(true);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false)
  const navigate = useNavigate();
  const toast = useToast();

  const fetchData = async () => {
    const currentUser = JSON.parse(localStorage.getItem("current_user"));
    if (!currentUser) {
      setTimeout(() => {
        setShowRegisterModal(true);
      }, 2000);
    }
    setIsLoading(false);
  };

  // VERIFICA SI EXISTE USUARIO LOGEADO
  useEffect(() => {
    fetchData();
  }, []);

  const preventComplete = (sender, options) => {
    options.allowComplete = false;
    surveyOnComplete(sender);
  }

  const surveyOnComplete = async (sender) => {
    survey.onCompleting.remove(preventComplete);

    const answers = sender.data
    const answersForBackend = { ...answers };
    delete answersForBackend.question1;

    const currentUser = JSON.parse(localStorage.getItem("current_user"));
    const userId = currentUser.userId;
    try {
      const response = await createVocationalTestPrediction(userId, answersForBackend);
      sender.doComplete();

      setRecommendation(response);
      await updateStudentVocationalTest(userId);

      currentUser.recommendedArea = response;
      currentUser.vocationalTestCompleted = true;
      const updatedCurrentUserString = JSON.stringify(currentUser);
      localStorage.setItem("current_user", updatedCurrentUserString);

      setShowResults(true);
      setIsLoaded(true);
      window.scrollTo(0, 0);
    } catch (error) {
      survey.onCompleting.add(preventComplete)
      toast({
        title: 'Error sending survey.',
        description: "An error occurred by an external service error.",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      })
      console.error("External service error:", error);
    }
  };

  survey.onCompleting.add(preventComplete);

  const handleAcceptButtonClick = () => {
    if (recommendation === "NO") {
      navigate(`/content?area=Ciencia`);
    } else {
      navigate(`/content?area=${encodeURIComponent(recommendation)}`);
    }
  };

  const handleRegisterNowAlertConfirm = () => {
    setShowRegisterModal(false) // Cerrar el modal de alerta
  };

  const SurveyContainer = ({ children }) => ( // Con el propósito de alinear el contenido a la izquierda
    <div style={{ textAlign: "left" }}>{children}</div>
  );

  const STEMResults = () => {
    return (
      <>
        <Heading fontSize={"4xl"} color={"purple.700"}>
          Resultado
        </Heading>
        <Box display="flex" justifyContent="center">
          <Card w={{ md: '50%' }}>
            <CardHeader>
              <Heading fontSize={["2xl"]} color={'purple.700'}>
                ¡Felicitaciones!
              </Heading>
            </CardHeader>
            <CardBody>
              <Image src='WomenCelebrating.jpg' mb={5} mx="auto" h='300px' />
              <Text fontSize={["md", "lg"]} color={'purple.700'} mb={5} fontWeight='semibold'>
                De acuerdo a sus intereses y preferencias evaluadas en el Test Vocacional, te recomendamos la siguiente área STEM:
              </Text>
              <Skeleton isLoaded={isLoaded}>
                <Heading fontSize={"2xl"} color={'purple.700'}>{recommendation}</Heading>
              </Skeleton>
            </CardBody>
            <CardFooter justifyContent={"center"}>
              <Button onClick={handleAcceptButtonClick} colorScheme="purple">Continuar</Button>
            </CardFooter>
          </Card>
        </Box>
      </>
    );
  }

  const notSTEMResults = () => {
    return (
      <>
        <Heading fontSize={"4xl"} color={"purple.700"}>
          Resultado
        </Heading>
        <Box display="flex" justifyContent="center">
          <Card w={{ md: '50%' }}>
            <CardHeader>
              <Heading fontSize={["2xl"]} color={'purple.700'}>
                ¡Oh sorpresa, pero no te desanimes! 💜
              </Heading>
            </CardHeader>
            <CardBody>
              <Image src='WomenCharming.jpg' mb={5} mx="auto" h='300px' />
              <Text fontSize={["md", "lg"]} color={'purple.700'} mb={5} fontWeight='semibold'>
                Parece que por ahora tu pasión no está en el área STEM en base a tus respuestas
                ¡Pero no te preocupes!, sigue disfrutando del contenido con entusiasmo y sigue explorando nuevas cosas!"
              </Text>
            </CardBody>
            <CardFooter justifyContent={"center"}>
              <Button onClick={handleAcceptButtonClick} colorScheme="purple">Continuar</Button>
            </CardFooter>
          </Card>
        </Box>
      </>
    );
  }

  const renderResults = () => {
    if (!showResults) {
      return (
        <>
          <Heading fontSize={"4xl"} textAlign={"center"} color={"purple.700"}>
            Test Vocacional
          </Heading>
          <Text fontSize={["md", "xl"]} textAlign={"center"} color={'purple.700'}>
            Este test tiene como propósito conocer las habilidades de cada estudiante con el único fin de poder recomendar carreras de acuerdo a sus intereses.
          </Text>
          <Stack>
            <Heading fontSize={"2xl"} textAlign={"center"} color={'purple.700'}>
              ¡Importante!
            </Heading>
            <Text fontSize={["md", "xl"]} textAlign={"center"} color={'purple.700'}>
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
      if (recommendation !== 'NO') {
        return STEMResults();
      } else {
        return notSTEMResults();
      }
    }
  };

  return (
    <>
      <Flex minH={"100vh"} justify={"center"} bg={"purple.100"}>
        <Container as={Stack} maxW={{ md: '6xl' }}>
          <Stack spacing={4} mx={"auto"} my={isLoading ? "auto" : undefined} maxW={{ base: "lg", lg: "100%" }} py={12} px={2}>
            {!isLoading ? (
              renderResults()
            ) : (
              <Spinner size="xl" color="purple.700" speed="0.65s" />
            )}
          </Stack>
        </Container>
      </Flex>
      {showRegisterModal && (
        <RegisterNowAlert isOpen={showRegisterModal} onConfirm={handleRegisterNowAlertConfirm} />
      )}
    </>
  );
}

export default VocationalTest;