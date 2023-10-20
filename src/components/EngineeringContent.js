import {
  Stack, Heading, Text, Image, Card, CardBody, useDisclosure, Tabs, Tab, TabList, TabPanel, TabPanels
} from '@chakra-ui/react';
import YouTubeVideo from './YoutubeVideo';
import engineeringData from '../resources/EngineeringContent';

function EngineeringContent() {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <>
      {/* INTRODUCCION */}
      <Heading fontSize={"4xl"} color="purple.700">
        Q PONER ACA / Ingeniería 
      </Heading>
      <Text fontSize={["md", "lg"]} color="purple.700" mb={4}>
        La ingeniería estudia las disciplinas que combinan las habilidades científicas y técnicas para el diseño y/o construcción de sistemas,
        máquinas, infraestructuras, entre otros. Las carreras que encontrarás en esta sección son: Ingeniería Biomédica, Ingeniería de Gestión Minera,
        Ingeniería Ambiental, Ingeniería Industrial e Ingeniería Civil.
      </Text>

      <Tabs variant='soft-rounded' colorScheme='green' size='lg' isFitted>
        <TabList>
          <Tab color={'purple.500'} _selected={{ color: 'white', bg: 'purple.500' }}>Ingeniería</Tab>
          <Tab color={'purple.500'} _selected={{ color: 'white', bg: 'purple.500' }}>Destacado</Tab>
        </TabList>
        <TabPanels>
          {/* CONTENIDO SELECCIONADO */}
          <TabPanel>
            <Heading fontSize="xl" color="purple.700" mb={3} mt={3}>
              Ingeniería Biomédica
            </Heading>
            {renderCareerInfo(engineeringData.biomedic)}
            {renderCareerVideos(engineeringData.biomedic)}
            {renderCareerPhotos(engineeringData.biomedic)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Ingeniería de Gestión Minera
            </Heading>
            {renderCareerInfo(engineeringData.mining)}
            {renderCareerVideos(engineeringData.mining)}
            {renderCareerPhotos(engineeringData.mining)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Ingeniería Ambiental
            </Heading>
            {renderCareerInfo(engineeringData.enviromental)}
            {renderCareerVideos(engineeringData.enviromental)}
            {renderCareerPhotos(engineeringData.enviromental)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Ingeniería Industrial
            </Heading>
            {renderCareerInfo(engineeringData.industrial)}
            {renderCareerVideos(engineeringData.industrial)}
            {renderCareerPhotos(engineeringData.industrial)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Ingeniería Civil
            </Heading>
            {renderCareerInfo(engineeringData.civil)}
            {renderCareerVideos(engineeringData.civil)}
            {renderCareerPhotos(engineeringData.civil)}
          </TabPanel>

          {/* CONTENIDO DE MUJERES SELECCIONADO */}
          <TabPanel>
            <Heading>
              Contenido de mujeres seleccionadas
            </Heading>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default EngineeringContent;

function renderCareerInfo(careerData) {
  return careerData.information.map((info, index) => (
    <Card key={index} mb={4}>
      <CardBody>
        <Stack spacing={3}>
          <Heading fontSize="xl">
            {info.title}
          </Heading>
          {info.content !== "" && (
            <Text fontSize={["md", "lg"]}>
              {info.content}
            </Text>
          )}
        </Stack>
      </CardBody>
    </Card>
  ));
}

function renderCareerVideos(careerData) {
  return (
    <Stack mb={4} spacing={4}>
      {careerData.videos.map((video, index) => (
        <Card key={index}>
          <CardBody>
            <Stack spacing={3}>
              {video.title !== "" && (
                <Heading fontSize="xl">
                  {video.title}
                </Heading>
              )}
              {video.videoUrl !== "" && (
                <YouTubeVideo width="100%" height="100%" videoUrl={video.videoUrl} />
              )}
              {video.description !== "" && (
                <Text fontSize={["md", "lg"]}>
                  {video.description}
                </Text>
              )}
            </Stack>
          </CardBody>
        </Card>
      ))}
    </Stack>
  );
}

function renderCareerPhotos(careerData) {
  return (
    <Stack spacing={4}>
      {careerData.photos.map((photo, index) => (
        <Card key={index}>
          <CardBody>
            <Stack spacing={3}>
              {photo.title !== "" && (
                <Heading fontSize="xl">
                  {photo.title}
                </Heading>
              )}
              {photo.imageUrl !== "" && (
                <Image objectFit="cover" borderRadius='lg' src={photo.imageUrl} />
              )}
              {photo.description !== "" && (
                <Text mt='3' fontSize={["md", "lg"]}>
                  {photo.description}
                </Text>
              )}
            </Stack>
          </CardBody>
        </Card>
      ))}
    </Stack>
  );
}