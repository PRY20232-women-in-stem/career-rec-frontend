import { useState, useEffect } from 'react';
import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import PopUpAlert from '../components/PopUpAlert';
import PostTest from '../components/PostTest';
import { useLocation } from 'react-router-dom';
import { getStudentById } from "../services/StudentService";

function ContentWrapper({ children }) {
  return (
    <Flex minH={"100vh"} justify={"center"} bg={"purple.100"}>
      <Stack spacing={4} mx={"auto"} maxW={{ base: "lg", lg: "100%" }} py={12} px={6}>
        {children}
      </Stack>
    </Flex>
  );
}

function ContentView() {
  return (
    <ContentWrapper>
      {/* Contenido de la vista */}
      <Heading fontSize={"4xl"} textAlign={"center"} color={"purple.700"}>
        Contenido
      </Heading>
      <Image objectFit='cover' src='WomenInStem2.png' />
      <Heading textAlign={"center"} color={"purple.700"}>
        ¿Qué son las carreras STEM?
      </Heading>
      <Text fontSize={["md", "lg"]} textAlign={"center"} color={'purple.700'}>
        Las carreras STEM están relacionadas con la innovación, el desarrollo de tecnologías y el crecimiento de las empresas, lo que contribuye a la mejora de la economía. Los profesionales que se dedican a estas áreas ayudan a mejorar la competitividad de las empresas y a impulsar la creación de empleos de alta calidad.
      </Text>
      <Heading textAlign={"center"} color={"purple.700"}>
        ¿Cuáles son las áreas de STEM?
      </Heading>
      {/* Resto del contenido... */}
    </ContentWrapper>
  );
}

function Content() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showPostTest, setShowPostTest] = useState(false);
  const [alertTimeout, setAlertTimeout] = useState(null);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const area = searchParams.get("area"); // PARA LA MUESTRA DE CONTENIDO

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("current_user"));
    const fetchStudentData = async () => {
      if (currentUser) {
        const userId = currentUser.userId;
        const response = await getStudentById(userId);
        if (!response.postTestCompl) {

          const timeout = setTimeout(() => {
            setShowPopUp(true);
          }, 1000); // 1 segundo en milisegundos   CAMBIAR IMPORTANTISIMO
          //}, 180000); // 3 minutos en milisegundos

          setAlertTimeout(timeout);
        } else {
          setShowPostTest(false);
        }
      }
    };
    fetchStudentData();
  }, []);

  const handlePopUpAlertConfirm = () => {
    setShowPopUp(false);
    setShowPostTest(true);
  };

  const handlePopUpAlertCancel = () => {
    if (alertTimeout) {
      clearTimeout(alertTimeout);
    }
    const newTimeout = setTimeout(() => {
      setShowPopUp(true);
    }, 1000); // 1 segundo en milisegundos (o el tiempo deseado)  CAMBIAR IMPORTANTISIMO
    //}, 180000); // 3 minutos en milisegundos
    setAlertTimeout(newTimeout);
    setShowPopUp(false);
  };

  return (
    <>
      {showPopUp && (
        <PopUpAlert isOpen={showPopUp} onConfirm={handlePopUpAlertConfirm} onCancel={handlePopUpAlertCancel} />
      )}
      {showPostTest ? (
        <ContentWrapper>
          <PostTest onClose={() => setShowPostTest(false)} />
        </ContentWrapper>
      ) : (
        <ContentView />
      )}
    </>
  );
}

export default Content;