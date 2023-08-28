import { useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import 'survey-core/defaultV2.min.css';
import { surveyJson } from "../components/SurveyJson";
import { surveyTheme } from "../components/SurveyTheme";
import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Highlight, Image, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

function VocationalTest() {
  const survey = new Model(surveyJson); // Carga el Json de la encuesta
  survey.applyTheme(surveyTheme); // Aplica el estilo personalizado

  const [showResults, setShowResults] = useState(false); // Estado para mostrar los resultados
  const [recommendation, setRecommendation] = useState(""); // Estado para almacenar la recomendación
  const navigate = useNavigate();

  survey.onComplete.add((sender) => {
    const answers = sender.data;
    surveyOnComplete(answers);
    setShowResults(true);
  });

  const surveyOnComplete = (answers) => {
    console.log(answers);
    // Envia data al backend
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
          <Text fontSize={["md", "lg"]} textAlign={"center"} color={'purple.700'} display={{ md: 'none' }}>
            <Highlight query={['1 al 5', 'Muy en desacuerdo', 'Muy de acuerdo']} styles={{ px: '1.5', py: '0.4', rounded: 'full', bg: 'purple.300', color: 'white' }}>
              Los valores de la encuesta van del 1 al 5 donde 1 significa Muy en desacuerdo y 5 significa Muy de acuerdo.
            </Highlight>
          </Text>
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
          {renderResults()}
        </Stack>
      </Flex>
    </>
  );
}

export default VocationalTest;