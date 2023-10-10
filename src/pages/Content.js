import { useState, useEffect } from 'react';
import {
  Stack, Flex, Tabs, Tab, TabList, TabPanel, TabPanels
} from '@chakra-ui/react';
//import { useLocation } from 'react-router-dom';
import PopUpButton from '../components/PopUpButton';
import PostTest from '../components/PostTest';
import { getStudentById } from "../services/StudentService";
import PredictedContent from '../components/PredictedContent';
import PredictedContentProfiles from '../components/PredictedContentProfiles';

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

      <Tabs variant='soft-rounded' colorScheme='green' size='lg' isFitted>
        <TabList>
          <Tab color={'purple.500'} _selected={{ color: 'white', bg: 'purple.500' }}>Ingeniería</Tab>
          <Tab color={'purple.500'} _selected={{ color: 'white', bg: 'purple.500' }}>Destacado</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <PredictedContent predictedArea={""} /> {/* Contenido de la predicción */}
          </TabPanel>
          <TabPanel>
            <PredictedContentProfiles predictedArea={""} /> {/* Contenido de mujeres en stem de la predicción */}
          </TabPanel>
        </TabPanels>
      </Tabs>

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