import { useState, useEffect } from 'react';
import {
  Stack, Flex, Heading, Text, Image, Button, Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalCloseButton, ModalBody, ModalFooter, Link, Card, CardBody, CardHeader
} from '@chakra-ui/react';
//import { useLocation } from 'react-router-dom';
import PopUpAlert from '../components/PopUpAlert';
import PostTest from '../components/PostTest';
import { getStudentById } from "../services/StudentService";
import YouTubeVideo from '../components/YoutubeVideo';

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
  // Estado para controlar la apertura del modal
  const [isOpen, setIsOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ContentWrapper>
      {/* Contenido de la vista */}
      {/* Sección 1: ¿Qué son las carreras STEM? */}
      <Card mb={4} >
        <CardHeader>
          <Heading fontSize="xl" color="purple.700">
            ¿Qué son las carreras STEM?
          </Heading>
        </CardHeader>
        <CardBody>
          <Text fontSize={["md", "lg"]} color="purple.700">
            Las carreras STEM están relacionadas con la innovación, el desarrollo de tecnologías y el crecimiento de las empresas,
            lo que contribuye a la mejora de la economía. Los profesionales que se dedican a estas áreas ayudan a mejorar la competitividad
            de las empresas y a impulsar la creación de empleos de alta calidad.
          </Text>
        </CardBody>
      </Card>

      {/* Sección 2: Videos */}
      <Stack spacing={4}>
        <Heading fontSize="xl" color="purple.700">
          Videos sobre STEM
        </Heading>
        {/* Agrega componentes de video aquí */}
        <Card>
          <CardBody>
            <YouTubeVideo width="100%" height="100%" videoUrl="https://www.youtube.com/watch?v=CbEst0K063c" />
            <Text fontSize={["md", "lg"]} color="purple.700">
              Descripción del video 1.
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <YouTubeVideo width="100%" height="100%" videoUrl="https://www.youtube.com/watch?v=BVdngsy95mY" />
            <Text fontSize={["md", "lg"]} color="purple.700">
              Descripción del video 2.
            </Text>
          </CardBody>
        </Card>
      </Stack>

      {/* Sección 3: Fotos con descripción */}
      <Stack spacing={4}>
        <Heading fontSize="xl" color="purple.700">
          Fotos con Descripción
        </Heading>
        {/* Agrega componentes de fotos con descripción aquí */}
        <Card mb={4} >
          <CardBody>
            <Image objectFit="cover" src="WomenInStem2.png" />
            <Text fontSize={["md", "lg"]} color="purple.700">
              Descripción de la foto 1.
            </Text>
          </CardBody>
        </Card>
        <Card mb={4}>
          <CardBody>
            <Image objectFit="cover" src="WomenInStem2.png" />
            <Text fontSize={["md", "lg"]} color="purple.700">
              Descripción de la foto 2.
            </Text>
          </CardBody>
        </Card>
      </Stack>

      {/* Botón para abrir un modal */}
      <Button onClick={openModal} colorScheme="purple" size="sm" mt={4}>
        Abrir Modal
      </Button>

      {/* Modal interactivo */}
      <Modal isOpen={isOpen} onClose={closeModal} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Información Adicional</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="lg" color="purple.700">
              Este es un modal interactivo con contenido adicional. Puedes agregar información detallada, enlaces o cualquier otro contenido que desees.
            </Text>
            <Link color="purple.400" href="#" mt={2}>
              Enlace a más detalles
            </Link>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="purple" onClick={closeModal}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Contenido de la vista */}
    </ContentWrapper>
  );
}

function Content() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showPostTest, setShowPostTest] = useState(false);
  const [alertTimeout, setAlertTimeout] = useState(null);

  //const location = useLocation(); // PARA LA MUESTRA DE CONTENIDO, USARSE LUEGO PARA MOSTRAR CONTENIDO
  //const searchParams = new URLSearchParams(location.search); // PARA LA MUESTRA DE CONTENIDO, USARSE LUEGO PARA MOSTRAR CONTENIDO
  //const area = searchParams.get("area"); // PARA LA MUESTRA DE CONTENIDO, USARSE LUEGO PARA MOSTRAR CONTENIDO

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("current_user"));
    const fetchStudentData = async () => {
      if (currentUser) {
        const userId = currentUser.userId;
        const response = await getStudentById(userId);
        if (!response.postTestCompl) {

          const timeout = setTimeout(() => {
            setShowPopUp(true);
          }, 1000); // 1 segundo en milisegundos, CAMBIAR IMPORTANTISIMO
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
    }, 1000); // 1 segundo en milisegundos (o el tiempo deseado), CAMBIAR IMPORTANTISIMO
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