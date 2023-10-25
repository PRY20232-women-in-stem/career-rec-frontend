import {
  Stack, Heading, Text, Image, Card, CardBody, CardHeader, useDisclosure, Tabs, Tab, TabList, TabPanel, TabPanels, Box
} from '@chakra-ui/react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import YouTubeVideo from './YoutubeVideo';
import mathematicsData from '../resources/MathematicsContent';

function MathematicsContent() {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <>
      {/* INTRODUCCION */}
      <Heading fontSize={"4xl"} color="purple.700">
        Matemáticas
      </Heading>
      <Text fontSize={["md", "lg"]} color="purple.700" mb={4}>
        Introduccipón de matematicas
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
              Matemática pura
            </Heading>
            {renderCareerInfo(mathematicsData.matemathics)}
            {renderCareerVideos(mathematicsData.matemathics)}
            {renderCareerPhotos(mathematicsData.matemathics)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Economía
            </Heading>
            {renderCareerInfo(mathematicsData.economy)}
            {renderCareerVideos(mathematicsData.economy)}
            {renderCareerPhotos(mathematicsData.economy)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Estadística
            </Heading>
            {renderCareerInfo(mathematicsData.stadistic)}
            {renderCareerVideos(mathematicsData.stadistic)}
            {renderCareerPhotos(mathematicsData.stadistic)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Contabilidad
            </Heading>
            {renderCareerInfo(mathematicsData.accounting)}
            {renderCareerVideos(mathematicsData.accounting)}
            {renderCareerPhotos(mathematicsData.accounting)}

            <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
              Finanzas
            </Heading>
            {renderCareerInfo(mathematicsData.finance)}
            {renderCareerVideos(mathematicsData.finance)}
            {renderCareerPhotos(mathematicsData.finance)}
          </TabPanel>

          {/* CONTENIDO DE MUJERES SELECCIONADO */}
          <TabPanel>
            <Heading>
              Contenido de mujeres seleccionadas de Matemáticas
            </Heading>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default MathematicsContent;

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