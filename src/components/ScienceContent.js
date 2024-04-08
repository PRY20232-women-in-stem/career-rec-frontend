import {
  Stack, Heading, Text, Image, Card, CardBody, CardHeader, Tabs, Tab, TabList, TabPanel, TabPanels, Box, IconButton
} from '@chakra-ui/react';
import { BsLinkedin } from 'react-icons/bs';
import YouTubeVideo from './YoutubeVideo';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import scienceData from '../resources/ScienceContent';

function ScienceContent() {

  return (
    <>
      {/* INTRODUCCION */}
      <Heading fontSize={"4xl"} color="purple.700">
        Ciencias
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
            {renderCareerInfo(scienceData.medicine)}
            {renderCareerVideos(scienceData.medicine)}
            {renderCareerPhotos(scienceData.medicine)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Biología
            </Heading>
            {renderCareerInfo(scienceData.biology)}
            {renderCareerVideos(scienceData.biology)}
            {renderCareerPhotos(scienceData.biology)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Química Industrial
            </Heading>
            {renderCareerInfo(scienceData.chemistry)}
            {renderCareerVideos(scienceData.chemistry)}
            {renderCareerPhotos(scienceData.chemistry)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Microbiología y Parasitología
            </Heading>
            {renderCareerInfo(scienceData.microParasi)}
            {renderCareerVideos(scienceData.microParasi)}
            {renderCareerPhotos(scienceData.microParasi)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Farmacia y Bioquímica
            </Heading>
            {renderCareerInfo(scienceData.pharmaBioche)}
            {renderCareerVideos(scienceData.pharmaBioche)}
            {renderCareerPhotos(scienceData.pharmaBioche)}
          </TabPanel>

          {/* CONTENIDO DE MUJERES SELECCIONADO */}
          <TabPanel>
            <Heading fontSize="xl" color="purple.700" mb={3} mt={3}>
              Medicina
            </Heading>
            {renderWomenProfiles(scienceData.medicine)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Biología
            </Heading>
            {renderWomenProfiles(scienceData.biology)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Química
            </Heading>
            {renderWomenProfiles(scienceData.chemistry)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Microbiología y Parasitología
            </Heading>
            {renderWomenProfiles(scienceData.microParasi)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Farmacología y Bioquímica
            </Heading>
            {renderWomenProfiles(scienceData.pharmaBioche)}
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
              <YouTubeVideo videoUrl={video.videoUrl} title={video.title} />
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