import { useState, useEffect } from 'react';
import {
  Stack, Flex
} from '@chakra-ui/react';
//import { useLocation } from 'react-router-dom';
import PopUpButton from '../components/PopUpButton';
import PostTest from '../components/PostTest';
import { getStudentById } from "../services/StudentService";
import EngineeringContent from '../components/EngineeringContent';
import ScienceContent from '../components/ScienceContent';
import TechnologyContent from '../components/TechnologyContent';
import MathematicsContent from '../components/MathematicsContent';

function ContentWrapper({ children }) {
  return (
    <Flex minH={"100vh"} justify={"center"} bg={"purple.100"}>
      <Stack spacing={4} mx={"auto"} maxW={{ base: "lg", lg: "100%" }} py={6} px={6} >
        {children}
      </Stack>
    </Flex>
  );
}

function ContentView({ onConfirm, showFinishedPopUp }) {
  //const location = useLocation(); // PARA LA MUESTRA DE CONTENIDO, USARSE LUEGO PARA MOSTRAR CONTENIDO
  //const searchParams = new URLSearchParams(location.search); // PARA LA MUESTRA DE CONTENIDO, USARSE LUEGO PARA MOSTRAR CONTENIDO
  //const area = searchParams.get("area"); // PARA LA MUESTRA DE CONTENIDO, USARSE LUEGO PARA MOSTRAR CONTENIDO
  return (
    <ContentWrapper>
      <PopUpButton onConfirm={onConfirm} showFinishedPopUp={showFinishedPopUp} />
      <EngineeringContent />
      {/*{area === "Engineering" ? <EngineeringContent /> : null}
      {area === "Science" ? <ScienceContent /> : null}
      {area === "Technology" ? <TechnologyContent /> : null}
      {area === "Mathematics" ? <MathematicsContent /> : null}*/}
    </ContentWrapper >
  );
}

function Content() {
  const [showPostTest, setShowPostTest] = useState(false);
  const [showFinishedPopUp, setShowFinishedPopUp] = useState(false);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("current_user"));
    const cachedPostTestStatus = localStorage.getItem('post_test_compl');

    if (cachedPostTestStatus === 'true') {
      setShowFinishedPopUp(true);
    } else {
      const fetchStudentData = async () => {
        if (currentUser) {
          const userId = currentUser.userId;
          try {
            const response = await getStudentById(userId);
            if (response.postTestCompl) {
              setShowFinishedPopUp(true);
              localStorage.setItem('post_test_compl', 'true');
            } else {
              localStorage.setItem('post_test_compl', 'false');
            }
          } catch (error) {
            console.error("Error al obtener datos del estudiante:", error);
          }
        }
      };
      fetchStudentData();
    }
  }, []);

  const handlePopUpButtonConfirm = () => {
    setShowPostTest(true);
  };

  return (
    <>
      {showPostTest ? (
        <ContentWrapper>
          <PostTest onClose={() => setShowPostTest(false)} />
        </ContentWrapper>
      ) : (
        <ContentView onConfirm={handlePopUpButtonConfirm} showFinishedPopUp={showFinishedPopUp} />
      )}
    </>
  );
}

export default Content;