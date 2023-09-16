import { useState, useEffect } from 'react';
import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import PopUpAlert from '../components/PopUpAlert';
import PostTest from '../components/PostTest';

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

  useEffect(() => {
    // Realiza una verificación en la base de datos para determinar si el usuario ha completado el PostTest.
    // Si el usuario ha completado el PostTest, muestra directamente el contenido.
    const userHasCompletedPostTest = false; // checkUserPostTestCompletion(); Esta función debe verificar en la base de datos. EJEMPLO

    if (!userHasCompletedPostTest) {
      // Si el usuario no ha completado el PostTest, muestra la Alerta después del tiempo indicado.
      const timeout = setTimeout(() => {
        setShowPopUp(true);
      }, 1000); // 1 segundo en milisegundos
      //}, 180000); // 3 minutos en milisegundos

      // Limpia el temporizador cuando el componente se desmonta.
      setAlertTimeout(timeout);
    } else {
      // Si el usuario ha completado el PostTest, muestra directamente el contenido.
      setShowPostTest(false);
    }
  }, []);

  const handlePopUpAlertConfirm = () => {
    setShowPopUp(false);
    setShowPostTest(true);
  };

  const handlePopUpAlertCancel = () => {
    // Cuando se hace clic en "Cerrar", primero cancela el temporizador actual.
    if (alertTimeout) {
      clearTimeout(alertTimeout);
    }

    // Luego, configura un nuevo temporizador para mostrar la Alerta nuevamente después del tiempo deseado.
    const newTimeout = setTimeout(() => {
      setShowPopUp(true);
    }, 1000); // 1 segundo en milisegundos (o el tiempo deseado)

    // Almacena el identificador del nuevo temporizador en el estado alertTimeout.
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