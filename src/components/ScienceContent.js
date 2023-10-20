import {
  Stack, Heading, Text, Image, Card, CardBody, useDisclosure, Tabs, Tab, TabList, TabPanel, TabPanels
} from '@chakra-ui/react';
import YouTubeVideo from './YoutubeVideo';
import scienceData from '../resources/ScienceContent';

function ScienceContent() {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <>
      {/* INTRODUCCION */}
      <Heading fontSize={"4xl"} color="purple.700">
        Q PONER ACA / CIENCIA
      </Heading>
      <Text fontSize={["md", "lg"]} color="purple.700" mb={4}>
        La ciencia estudia los fenómenos naturales y sociales de la realidad. Además, las ciencias realizan procesos de experimentación y demostración.
        Las carreras que encontrarás en esta sección son: Medicina General, Biología, Química Industrial, Microbiología y Parasitología y Farmacia y Bioquímica
      </Text>

      <Tabs variant='soft-rounded' colorScheme='green' size='lg' isFitted>
        <TabList>
          <Tab color={'purple.500'} _selected={{ color: 'white', bg: 'purple.500' }}>Ciencias</Tab>
          <Tab color={'purple.500'} _selected={{ color: 'white', bg: 'purple.500' }}>Destacado</Tab>
        </TabList>
        <TabPanels>
          {/* CONTENIDO SELECCIONADO */}
          <TabPanel>
            <Heading fontSize="xl" color="purple.700" mb={3} mt={3}>
              Medicina
            </Heading>
            {renderCareerInfo(scienceData.biomedic)}
            {renderCareerVideos(scienceData.biomedic)}
            {renderCareerPhotos(scienceData.biomedic)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Biología
            </Heading>
            {renderCareerInfo(scienceData.mining)}
            {renderCareerVideos(scienceData.mining)}
            {renderCareerPhotos(scienceData.mining)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Química Industrial
            </Heading>
            {renderCareerInfo(scienceData.enviromental)}
            {renderCareerVideos(scienceData.enviromental)}
            {renderCareerPhotos(scienceData.enviromental)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Microbiología y Parasitología
            </Heading>
            {renderCareerInfo(scienceData.industrial)}
            {renderCareerVideos(scienceData.industrial)}
            {renderCareerPhotos(scienceData.industrial)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Farmacia y Bioquímica
            </Heading>
            {renderCareerInfo(scienceData.civil)}
            {renderCareerVideos(scienceData.civil)}
            {renderCareerPhotos(scienceData.civil)}
          </TabPanel>

          {/* CONTENIDO DE MUJERES SELECCIONADO */}
          <TabPanel>
            <Heading>
              Contenido de mujeres seleccionadas de ciencias
            </Heading>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default ScienceContent;

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