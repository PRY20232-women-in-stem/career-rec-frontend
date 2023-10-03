import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { preTestJson } from "../util/PreTestJson";
import { preTestTheme } from "../util/PreTestTheme";
import 'survey-core/defaultV2.min.css';
import { Heading, Highlight, Stack, Text } from "@chakra-ui/react";
import { createPreTest } from "../services/PreTestService";
import { updateStudentPreTest } from "../services/StudentService";

function PreTest() {
  const survey = new Model(preTestJson); // Carga el Json de la encuesta
  survey.applyTheme(preTestTheme); // Aplica el estilo personalizado

  survey.onComplete.add((sender) => {
    const answers = sender.data;
    surveyOnComplete(answers);
  });

  const surveyOnComplete = async (answers) => {
    const currentUser = JSON.parse(localStorage.getItem("current_user"));
    if (currentUser) {
      const userId = currentUser.userId;
      const answersWithUserId = { ...answers, studentId: userId };
      await createPreTest(answersWithUserId);
      await updateStudentPreTest(userId);
    }
  };

  const SurveyContainer = ({ children }) => ( // Con el propósito de alinear el contenido a la izquierda
    <div style={{ textAlign: "left" }}>{children}</div>
  );

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