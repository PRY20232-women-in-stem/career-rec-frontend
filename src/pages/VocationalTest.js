import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import 'survey-core/defaultV2.min.css';
import { surveyJson } from "../components/SurveyJson";
import { surveyTheme } from "../components/SurveyTheme";
import { Flex, Heading, Highlight, Stack, Text } from "@chakra-ui/react";

function VocationalTest() {
  const survey = new Model(surveyJson); // Carga el Json de la encuesta
  survey.applyTheme(surveyTheme); // Aplica el estilo personalizado

  survey.onComplete.add((sender) => {
    handleSurveyOnComplete(sender.data)
  });

  const handleSurveyOnComplete = (answers) => {
    console.log(answers);
    // Envia data al backend
  };

  const SurveyContainer = ({ children }) => ( // Con el propósito de alinear el contenido a la izquierda
    <div style={{ textAlign: "left" }}>{children}</div>
  );

  return (
    <>
      <Flex minH={"100vh"} justify={"center"} bg={"purple.100"}>
        <Stack spacing={4} mx={"auto"} maxW={{ base: "lg", lg: "100%" }} py={12} px={6}>
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
        </Stack>
      </Flex >
    </>
  );
}

export default VocationalTest;