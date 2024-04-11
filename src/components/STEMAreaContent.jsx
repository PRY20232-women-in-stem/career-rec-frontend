import {
  Stack, Heading, Text, Image, Card, CardBody, CardHeader, Tabs, Tab, TabList, TabPanel, TabPanels, Box, IconButton, Container, Grid, GridItem
} from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa6';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import YouTubeVideo from './YoutubeVideo';

function STEMAreaContent({ areaName, areaData }) {

  const areaTextDescription = {
    "Ingenieria": "La ingeniería estudia las disciplinas que combinan las habilidades científicas y técnicas para el diseño y/o construcción de sistemas, máquinas, infraestructuras, entre otros. Las carreras que encontrarás en esta sección son: Ingeniería Biomédica, Ingeniería de Gestión Minera, Ingeniería Ambiental, Ingeniería Industrial e Ingeniería Civil.",
    "Tecnologia": "La tecnología es un pilar esencial en la era actual, impulsando la innovación, el diseño, la creación y la aplicación de sistemas tecnológicos. Algunas de las carreras emocionantes en el ámbito tecnológico son Ingeniería de Sistemas/Software, Ingeniería Electrónica, Ingeniería Mecatrónica, Ingeniería de Telecomunicaciones y Ciencias de la Computación.",
    "Matematica": "Las Matemáticas ocupan un lugar fundamental en el campo STEM. Aquí, te adentrarás en disciplinas que se basan en el razonamiento lógico y el rigor matemático. Explorarás teorías abstractas y aplicaciones prácticas. Algunas de las carreras que encontrarás en esta área son Matemática Pura, Economía, Estadística, Contabilidad y Finanzas.",
    "Ciencia": "La ciencia estudia los fenómenos naturales y sociales de la realidad. Además, las ciencias realizan procesos de experimentación y demostración. Las carreras que encontrarás en esta sección son: Medicina General, Biología, Química Industrial, Microbiología y Parasitología y Farmacia y Bioquímica."
  };

  return (
    <>
      {/* VISTA WEB */}
      <Container as={Stack} maxW={{ md: '6xl' }} display={{ base: 'none', md: 'block' }}>
        <Heading fontSize={"4xl"} color="purple.700" mb={6}>
          {areaName}
        </Heading>
        <Text fontSize={["md", "lg"]} color="purple.700" mb={8}>
          {areaTextDescription[areaName]}
        </Text>

        <Tabs variant='soft-rounded' colorScheme='green' size='lg' isFitted>
          <TabList>
            <Tab color={'purple.500'} _selected={{ color: 'white', bg: 'purple.500' }}>Contenido</Tab>
            <Tab color={'purple.500'} _selected={{ color: 'white', bg: 'purple.500' }}>Destacado</Tab>
          </TabList>
          <TabPanels>
            {/* CONTENIDO SELECCIONADO */}
            <TabPanel>
              {areaData.map((area, index) => (
                <div key={index}>
                  <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
                    {area.name}
                  </Heading>
                  {renderCareerInfo(area)}
                  {renderCareerVideos(area)}
                  {renderCareerPhotos(area)}
                </div>
              ))}
            </TabPanel>

            {/* CONTENIDO DE MUJERES SELECCIONADO */}
            <TabPanel>
              {areaData.map((area, index) => (
                <div key={index}>
                  <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
                    {area.name}
                  </Heading>
                  {renderWomenProfiles(area)}
                </div>
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container >

      {/* VISTA MOBILE */}
      <Box display={{ base: 'block', md: 'none' }}>
        < Heading fontSize={"4xl"} color="purple.700" >
          {areaName}
        </Heading >
        <Text fontSize={["md", "lg"]} color="purple.700" mb={4}>
          {areaTextDescription[areaName]}
        </Text>

        <Tabs variant='soft-rounded' colorScheme='green' size='lg' isFitted>
          <TabList>
            <Tab color={'purple.500'} _selected={{ color: 'white', bg: 'purple.500' }}>Contenido</Tab>
            <Tab color={'purple.500'} _selected={{ color: 'white', bg: 'purple.500' }}>Destacado</Tab>
          </TabList>
          <TabPanels>
            {/* CONTENIDO SELECCIONADO */}
            <TabPanel>
              {areaData.map((area, index) => (
                <div key={index}>
                  <Heading fontSize="xl" color="purple.700" mb={3} mt={6}>
                    {area.name}
                  </Heading>
                  {renderCareerInfo(area)}
                  {renderCareerVideos(area)}
                  {renderCareerPhotos(area)}
                </div>
              ))}
            </TabPanel>

            {/* CONTENIDO DE MUJERES SELECCIONADO */}
            <TabPanel>
              {areaData.map((area, index) => (
                <div key={index}>
                  <Heading fontSize="xl" color="purple.700" mb={3} mt={3}>
                    {area.name}
                  </Heading>
                  {renderWomenProfiles(area)}
                </div>
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default STEMAreaContent;

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
              <Box as='a' href={woman.linkedin} target='_blank'>
                <IconButton
                  variant='ghost'
                  colorScheme='blue'
                  icon={<FaLinkedin />}
                />
              </Box>
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