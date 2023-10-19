import {
  Stack, Heading, Text, Image, Card, CardBody, useDisclosure, Tabs, Tab, TabList, TabPanel, TabPanels
} from '@chakra-ui/react';
import YouTubeVideo from './YoutubeVideo';
import engineeringData from '../resources/EngineeringContent';

function ScienceContent() {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <>
      <Tabs variant='soft-rounded' colorScheme='green' size='lg' isFitted>
        <TabList>
          <Tab color={'purple.500'} _selected={{ color: 'white', bg: 'purple.500' }}>Ciencia</Tab>
          <Tab color={'purple.500'} _selected={{ color: 'white', bg: 'purple.500' }}>Destacado</Tab>
        </TabList>
        <TabPanels>
          {/* CONTENIDO SELECCIONADO */}
          <TabPanel>
            {/* Sección 1: Que son carreras STEM */}
            {engineeringData.information.map((info, index) => (
              <Card key={index} mb={8}>
                <CardBody>
                  <Stack spacing='3'>
                    <Heading fontSize="xl">
                      {info.title}
                    </Heading>
                    <Text fontSize={["md", "lg"]}>
                      {info.content}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            ))}

            {/* Sección 2: Videos */}
            <Stack mb={8} spacing={4}>
              <Heading fontSize="xl" color="purple.700">
                Videos sobre STEM
              </Heading>
              {engineeringData.videos.map((video, index) => (
                <Card key={index}>
                  <CardBody>
                    <YouTubeVideo width="100%" height="100%" videoUrl={video.videoUrl} />
                    <Text mt='3' fontSize={["md", "lg"]}>
                      {video.description}
                    </Text>
                  </CardBody>
                </Card>
              ))}
            </Stack>

            {/* Sección 3: Fotos con descripción */}
            <Stack spacing={4}>
              <Heading fontSize="xl" color="purple.700">
                Fotos con Descripción
              </Heading>
              {engineeringData.photos.map((photo, index) => (
                <Card key={index}>
                  <CardBody>
                    <Image objectFit="cover" borderRadius='lg' src={photo.imageUrl} />
                    <Text mt='3' fontSize={["md", "lg"]}>
                      {photo.description}
                    </Text>
                  </CardBody>
                </Card>
              ))}
            </Stack>
          </TabPanel>

          {/* CONTENIDO DE MUJERES SELECCIONADO */}
          <TabPanel>
            {/* Sección 1: Que son carreras STEM */}
            {engineeringData.information.map((info, index) => (
              <Card key={index} mb={8}>
                <CardBody>
                  <Stack spacing='3'>
                    <Heading fontSize="xl">
                      {info.title}
                    </Heading>
                    <Text fontSize={["md", "lg"]}>
                      {info.content}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            ))}

            {/* Sección 2: Videos */}
            <Stack mb={8} spacing={4}>
              <Heading fontSize="xl" color="purple.700">
                Videos sobre STEM
              </Heading>
              {engineeringData.videos.map((video, index) => (
                <Card key={index}>
                  <CardBody>
                    <YouTubeVideo width="100%" height="100%" videoUrl={video.videoUrl} />
                    <Text mt='3' fontSize={["md", "lg"]}>
                      {video.description}
                    </Text>
                  </CardBody>
                </Card>
              ))}
            </Stack>

            {/* Sección 3: Fotos con descripción */}
            <Stack spacing={4}>
              <Heading fontSize="xl" color="purple.700">
                Fotos con Descripción
              </Heading>
              {engineeringData.photos.map((photo, index) => (
                <Card key={index}>
                  <CardBody>
                    <Image objectFit="cover" borderRadius='lg' src={photo.imageUrl} />
                    <Text mt='3' fontSize={["md", "lg"]}>
                      {photo.description}
                    </Text>
                  </CardBody>
                </Card>
              ))}
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default ScienceContent;