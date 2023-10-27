import {
  Stack, Heading, Text, Image, Card, CardBody, CardHeader, Tabs, Tab, TabList, TabPanel, TabPanels, Box, IconButton
} from '@chakra-ui/react';
import { BsLinkedin } from 'react-icons/bs';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import YouTubeVideo from './YoutubeVideo';
import engineeringData from '../resources/EngineeringContent';

function EngineeringContent() {

  return (
    <>
      {/* INTRODUCCION */}
      <Heading fontSize={"4xl"} color="purple.700">
        Ingeniería
      </Heading>
      <Text fontSize={["md", "lg"]} color="purple.700" mb={4}>
        La ingeniería estudia las disciplinas que combinan las habilidades científicas y técnicas para el diseño y/o construcción de sistemas,
        máquinas, infraestructuras, entre otros. Las carreras que encontrarás en esta sección son: Ingeniería Biomédica, Ingeniería de Gestión Minera,
        Ingeniería Ambiental, Ingeniería Industrial e Ingeniería Civil.
      </Text>

      <Tabs variant='soft-rounded' colorScheme='green' size='lg' isFitted>
        <TabList>
          <Tab color={'purple.500'} _selected={{ color: 'white', bg: 'purple.500' }}>Contenido</Tab>
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
            <Heading fontSize="xl" color="purple.700" mb={3} mt={3}>
              Ingeniería Biomédica
            </Heading>
            {renderWomenProfiles(engineeringData.biomedic)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Ingeniería de Gestión Minera
            </Heading>
            {renderWomenProfiles(engineeringData.mining)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Ingeniería Ambiental
            </Heading>
            {renderWomenProfiles(engineeringData.enviromental)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Ingeniería Industrial
            </Heading>
            {renderWomenProfiles(engineeringData.industrial)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Ingeniería Civil
            </Heading>
            {renderWomenProfiles(engineeringData.civil)}
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
        <Card key={index} maxW='md'>
          {video.title !== "" && (
            <CardHeader>
              <Heading fontSize="xl">
                {video.title}
              </Heading>
            </CardHeader>
          )}
          {video.description !== "" && (
            <CardBody>
              <Text fontSize={["md", "lg"]}>
                {video.description}
              </Text>
            </CardBody>
          )}
          {video.videoUrl !== "" && (
            <Box pb="20px">
              <YouTubeVideo width="100%" height="100%" videoUrl={video.videoUrl} />
            </Box>
          )}
        </Card>
      ))}
    </Stack>
  );
}

function renderCareerPhotos(careerData) {
  return (
    <Stack spacing={4}>
      {careerData.photos.map((photo, index) => (
        <Card key={index} maxW='md'>
          {photo.title !== "" && (
            <CardHeader>
              <Heading fontSize="xl">
                {photo.title}
              </Heading>
            </CardHeader>
          )}
          {photo.description !== "" && (
            <CardBody>
              <Text fontSize={["md", "lg"]}>
                {photo.description}
              </Text>
            </CardBody>
          )}
          {photo.imageUrl !== "" && (
            <Zoom>
              <Image objectFit="cover" pb="40px" src={photo.imageUrl} />
            </Zoom>
          )}
        </Card>
      ))}
    </Stack>
  );
}

function renderWomenProfiles(careerData) {
  return (
    <Stack spacing={4}>
      {careerData.women.map((woman, index) => (
        <Card key={index} maxW='md'>
          {woman.name !== "" && (
            <CardHeader>
              <Heading fontSize="xl">
                {woman.name}
              </Heading>
            </CardHeader>
          )}
          {woman.photo !== "" && (
            <Box mx="auto">
              <Image maxW="200px" objectFit="cover" src={woman.photo} />
            </Box>
          )}
          <CardBody>
            {woman.linkedin && woman.linkedin !== "" && (
              <IconButton
                variant='ghost'
                colorScheme='blue'
                icon={<BsLinkedin />}
              />
            )}
            {woman.description !== "" && (
              <Text fontSize={["md", "lg"]}>
                {woman.description}
              </Text>
            )}
            {woman.description2 && woman.description2 !== "" && (
              <Text fontSize={["md", "lg"]}>
                {woman.description2}
              </Text>
            )}
          </CardBody>
        </Card>
      ))}
    </Stack>
  );
}