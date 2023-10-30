import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { postTestJson } from "../util/PostTestJson";
import { postTestTheme } from "../util/PostTestTheme";
import 'survey-core/defaultV2.min.css';
import { Heading, Highlight, Text } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { createPostTest } from "../services/PostTestService";
import { updateStudentPostTest } from "../services/StudentService";

function PostTest({ onClose }) {
  const navigate = useNavigate();

  const survey = new Model(postTestJson); // Carga el Json de la encuesta
  survey.applyTheme(postTestTheme); // Aplica el estilo personalizado

  survey.onComplete.add((sender) => {
    const answers = sender.data;
    surveyOnComplete(answers);
  });

  const surveyOnComplete = async (answers) => {
    const currentUser = JSON.parse(localStorage.getItem("current_user"));
    if (currentUser) {
      const userId = currentUser.userId;
      const answersWithUserId = { ...answers, studentId: userId };
      try {
        await createPostTest(userId, answersWithUserId);
        await updateStudentPostTest(userId); // COMENTAR ESTO PARA ENVIAR MUCHAS VECES EL POST TEST
        localStorage.setItem('post_test_compl', 'true');
      } catch (error) {
        console.error("Error enviar el post-test:", error);
        // Poner un modal de error en el futuro.
      }
    }
    onClose();
  };

  const SurveyContainer = ({ children }) => ( // Con el propósito de alinear el contenido a la izquierda
    <div style={{ textAlign: "left" }}>{children}</div>
  );

  return (
    <>
      <Heading fontSize={"4xl"} textAlign={"center"} color={"purple.700"}>
        Post Test
      </Heading>
      <Text fontSize={["md", "lg"]} textAlign={"center"} color={'purple.700'}>
        Este test tiene como propósito medir el interés que tiene la estudiante hacia las carreras STEM después de haber recibido contenido especializado.
      </Text>
      <Text fontSize={["md", "lg"]} textAlign={"center"} color={'purple.700'} display={{ md: 'none' }}>
        <Highlight query={['1 al 5', 'Muy en desacuerdo', 'Muy de acuerdo']} styles={{ px: '1.5', py: '0.4', rounded: 'full', bg: 'purple.300', color: 'white' }}>
          Algunas preguntas contienen valores que van del 1 al 5 donde 1 significa Muy en desacuerdo y 5 significa Muy de acuerdo.
        </Highlight>
      </Text>
      <SurveyContainer>
        <Survey model={survey} />
      </SurveyContainer>
    </>
  );
}

export default PostTest;