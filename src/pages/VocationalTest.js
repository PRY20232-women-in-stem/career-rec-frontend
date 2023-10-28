import { useState, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import 'survey-core/defaultV2.min.css';
import { testVocacionalJson } from "../util/TestVocacionalJson";
import { testVocacionalTheme } from "../util/TestVocacionalTheme";
import {
  Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Highlight, Image, Stack, Text, Spinner, Skeleton,
} from "@chakra-ui/react";
import PreTest from "../components/PreTest";
import PostTest from "../components/PostTest";
import RegisterNowAlert from "../components/RegisterNowAlert";
import DoPostTestAlert from "../components/DoPostTestAlert";
import { useNavigate } from 'react-router-dom';
import { getStudentById } from "../services/StudentService";
import { createVocationalTestPrediction } from "../services/VocationalTestService";
import { updateStudentVocationalTest } from "../services/StudentService";

function VocationalTest() {
  const survey = new Model(testVocacionalJson); // Carga el Json de la encuesta
  survey.applyTheme(testVocacionalTheme); // Aplica el estilo personalizado

  const [hasCompletedPreTest, setHasCompletedPreTest] = useState(null); // Validación del pre-test
  const [showResults, setShowResults] = useState(false); // Estado para mostrar los resultados
  const [recommendation, setRecommendation] = useState(""); // Estado para almacenar la recomendación
  const [isLoading, setIsLoading] = useState(true);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false)
  const [showPostTestAlert, setShowPostTestAlert] = useState(false);
  const [showPostTest, setShowPostTest] = useState(false);
  const navigate = useNavigate();

  survey.onComplete.add((sender) => {
    const answers = sender.data;
    surveyOnComplete(answers);
    setShowResults(true);
    window.scrollTo(0, 0);
  });

  const fetchData = async () => {
    const currentUser = JSON.parse(localStorage.getItem("current_user"));
    if (!currentUser) {
      setTimeout(() => {
        setShowRegisterModal(true);
      }, 2000);
    } else {
      const userId = currentUser.userId;
      const cachedPreTestCompl = localStorage.getItem('pre_test_compl');
      if (cachedPreTestCompl === 'true') {
        setHasCompletedPreTest(true);
      } else {
        try {
          const response = await getStudentById(userId);
          if (response.preTestCompl) {
            setHasCompletedPreTest(true);
            localStorage.setItem('pre_test_compl', 'true');
            localStorage.setItem('group', response.group);
          } else {
            setHasCompletedPreTest(false);
            localStorage.setItem('pre_test_compl', 'false');
          }
        } catch (error) {
          console.error("Error al obtener datos del estudiante:", error);
        }
      }
    }
    setIsLoading(false);
  };

  // Realizar la solicitud al backend para verificar si el usuario ha completado el pre-test
  useEffect(() => {
    fetchData();
  }, []);

  const surveyOnComplete = async (answers) => {
    const answersForBackend = { ...answers };
    delete answersForBackend.question1;

    const currentUser = JSON.parse(localStorage.getItem("current_user"));
    const userId = currentUser.userId;

    const response = await createVocationalTestPrediction(userId, answersForBackend);
    setRecommendation(response);
    localStorage.setItem('rec_career', response);
    setIsLoaded(true);
    await updateStudentVocationalTest(userId);
  };

  const handlePreTestComplete = async () => {
    fetchData();
  };

  const handleModalPostTest = async () => {
    setShowPostTestAlert(true);
  };

  const handlePostTestlertConfirm = () => {
    setShowPostTestAlert(false);
  };

  const handlePostTestAlertCancel = () => {
    setShowPostTestAlert(false);
  };

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

  const renderResults = () => {
    if (!showResults) {
      return (
        <>
          <Heading fontSize={"4xl"} textAlign={"center"} color={"purple.700"}>
            Test Vocacional
          </Heading>
          <Text fontSize={"lg"} textAlign={"center"} color={'purple.700'}>
            Este test tiene como propósito conocer las habilidades de cada estudiante con el único fin de poder recomendar carreras de acuerdo a sus intereses.
          </Text>
          <Stack>
            <Heading fontSize={"xl"} textAlign={"center"} color={'purple.700'}>
              ¡Importante!
            </Heading>
            <Text fontSize={"lg"} textAlign={"center"} color={'purple.700'}>
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
    } else if (showPostTest) {
      return (
        <PostTest onClose={() => {
          setShowPostTest(false)
          handleAcceptButtonClick();
        }} />
      );
    } else {
      if (recommendation === 'NO') {
        return (
          <>
            <Heading fontSize={"4xl"} color={"purple.700"}>
              Resultado
            </Heading>
            <Card>
              <CardHeader>
                <Heading fontSize={["2xl"]} color={'purple.700'}>
                  ¡Lo sentimos!
                </Heading>
              </CardHeader>
              <CardBody>
                <Image borderRadius='full' src='WomenInStem1.png' mb={8} />
                <Text fontSize={"lg"} color={'purple.700'}>
                  No formas parte de carreras las en STEM, pero puedes seguir viendo el contenido en general.
                </Text>
              </CardBody>
              <CardFooter justifyContent={"center"}>
                <Button onClick={handleAcceptButtonClick} colorScheme="purple">Continuar</Button>
              </CardFooter>
            </Card>
          </>
        );
      } else if (localStorage.getItem('group') === 'G2') {
        return (
          <>
            <Heading fontSize={"4xl"} color={"purple.700"}>
              Resultado
            </Heading>
            <Card>
              <CardHeader>
                <Heading fontSize={["2xl"]} color={'purple.700'}>
                  Grupo experimental
                </Heading>
              </CardHeader>
              <CardBody>
                <Image borderRadius='full' src='WomenInStem1.png' mb={5} />
                <Text fontSize={"lg"} color={'purple.700'} mb={5}>
                  Has sido seleccionada para el grupo experimental, investiga de tu área STEM en internet y luego dale a continuar para realizar el Post test.
                </Text>
                <Skeleton isLoaded={isLoaded}>
                  <Heading fontSize={"2xl"} color={'purple.700'}>{recommendation}</Heading>
                </Skeleton>
              </CardBody>
              <CardFooter justifyContent={"center"}>
                <Button
                  onClick={() => {
                    handleModalPostTest();
                    setShowPostTest(true); // Mostrar el PostTest
                    setShowPostTestAlert(false); // Cerrar el modal DoPostTestAlert
                  }}
                  colorScheme="purple"
                >
                  Continuar
                </Button>
              </CardFooter>
            </Card>
            <DoPostTestAlert isOpen={showPostTestAlert} onConfirm={handlePostTestlertConfirm} onCancel={handlePostTestAlertCancel} />
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
                <Text fontSize={"lg"} color={'purple.700'} mb={5}>
                  De acuerdo a sus intereses y preferencias evaluados en el Test Vocacional, podemos recomendarle la siguiente área STEM:
                </Text>
                <Skeleton isLoaded={isLoaded}>
                  <Heading fontSize={"2xl"} color={'purple.700'}>{recommendation}</Heading>
                </Skeleton>
              </CardBody>
              <CardFooter justifyContent={"center"}>
                <Button onClick={handleAcceptButtonClick} colorScheme="purple">Continuar</Button>
              </CardFooter>
            </Card>
          </>
        );
      }
    }
  };
  return (
    <>
      <Flex minH={"100vh"} justify={"center"} bg={"purple.100"}>
        <Stack spacing={4} mx={"auto"} my={isLoading ? "auto" : undefined} maxW={{ base: "lg", lg: "100%" }} py={12} px={6}>
          {!isLoading ? (
            hasCompletedPreTest ? (
              renderResults()
            ) : (
              <PreTest onPreTestComplete={handlePreTestComplete} />
            )
          ) : (
            <Spinner size="xl" color="purple.700" speed="0.65s" />
          )}
        </Stack>
      </Flex>
      {showRegisterModal && (
        <RegisterNowAlert isOpen={showRegisterModal} onConfirm={handleRegisterNowAlertConfirm} />
      )}
    </>
  );
}

export default VocationalTest;