import { useState, useEffect } from 'react';
import {
  Stack, Flex, Heading, Text, Image, Button, Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalCloseButton, ModalBody, ModalFooter, Link, Card, CardBody, CardHeader, useDisclosure, Tabs, Tab, TabList, TabPanel, TabPanels
} from '@chakra-ui/react';
//import { useLocation } from 'react-router-dom';
import PopUpButton from '../components/PopUpButton';
import PostTest from '../components/PostTest';
import YouTubeVideo from '../components/YoutubeVideo';
import { getStudentById } from "../services/StudentService";

function ContentWrapper({ children }) {
  return (
    <Flex minH={"100vh"} justify={"center"} bg={"purple.100"}>
      <Stack spacing={4} mx={"auto"} maxW={{ base: "lg", lg: "100%" }} py={12} px={6} >
        {children}
      </Stack>
    </Flex>
  );
}

function ContentView({ onConfirm, showPopUpButton }) {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <ContentWrapper>

      {showPopUpButton && <PopUpButton onConfirm={onConfirm} />}

      {/* Contenido de la vista */}
      {/* Sección 1: ¿Qué son las carreras STEM? */}
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab>Ingeniería</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
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
                  <YouTubeVideo width="100%" height="100%" videoUrl="https://www.youtube.com/watch?v=PbyKKD7mvpA" />
                  <Text fontSize={["md", "lg"]} color="purple.700">
                    Descripción del video 1.
                  </Text>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <YouTubeVideo width="100%" height="100%" videoUrl="https://www.youtube.com/watch?v=W53Ks824GTA" />
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
            <Button onClick={onOpen} colorScheme="purple" size="sm" mt={4}>
              Abrir Modal
            </Button>

            {/* Modal interactivo */}
            <Modal isOpen={isOpen} onClose={onClose} size="lg">
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
                  <Button colorScheme="purple" onClick={onClose}>
                    Cerrar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* Contenido de la vista */}
    </ContentWrapper >
  );
}

function Content() {
  const [showPostTest, setShowPostTest] = useState(false);
  const [showPopUpButton, setShowPopUpButton] = useState(false);

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
          setShowPopUpButton(true);
        } else {
          console.log("No se ha completado el post test");
        }
      }
    };
    fetchStudentData();
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
        <ContentView onConfirm={handlePopUpButtonConfirm} showPopUpButton={showPopUpButton} />
      )}
    </>
  );
}

export default Content;