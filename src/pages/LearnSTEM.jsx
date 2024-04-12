import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Flex, Heading, Stack, Text, SimpleGrid, Box, Card, CardBody, CardHeader, Image, Container, HStack, VStack, Button
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaHeart } from "react-icons/fa6";

function LearnSTEM() {
  const cards = [
    {
      title: 'Ciencia (Science)',
      text:
        'La ciencia se dedica al estudio sistemático y metódico del mundo natural. Comprende la observación, la experimentación, la formulación de hipótesis y la obtención de conclusiones basadas en evidencia. Las disciplinas científicas abarcan campos como la biología, la química, la física, la astronomía y muchas otras.',
      image: 'https://img.freepik.com/vektoren-kostenlos/hand-gezeichneter-naturwissenschaftlicher-bildungshintergrund_23-2148499325.jpg?w=1380&t=st=1696922014~exp=1696922614~hmac=33575e876791a77085a3183dac4506a863d6fb98825e335c8ab2b20af27eaf38',
    },
    {
      title: 'Tecnología (Technology)',
      text:
        'La tecnología se enfoca en la aplicación de conocimientos técnicos para desarrollar soluciones innovadoras que mejoran la vida cotidiana. Implica la creación de sistemas, dispositivos y software que impulsan el progreso en áreas como la comunicación y la automatización. Los campos tecnológicos abarcan la ingeniería de sistemas, la electrónica, la mecatrónica, las telecomunicaciones y la ciencia de la computación, entre otros.',
      image: 'https://img.freepik.com/free-vector/illustration-technology-vector_53876-20556.jpg?w=1380&t=st=1696922240~exp=1696922840~hmac=b207502a5a1200d69cf9838a72610233d2e07acb4bb9fba6581a3d1682f8edc9',
    },
    {
      title: 'Ingeniería (Engineering)',
      text:
        'La ingeniería se dedica a la aplicación creativa de principios científicos y matemáticos para diseñar, construir y mantener sistemas, productos y soluciones tecnológicas. Implica la resolución de desafíos complejos, la innovación y la colaboración multidisciplinaria. Las disciplinas de ingeniería abarcan campos como la ingeniería civil, la ingeniería eléctrica, la ingeniería mecánica, la ingeniería química y muchas otras.',
      image: 'https://www.aiche.org/sites/default/files/styles/chenected_lead_image/public/images/Chenected/lead/shutterstock411197581.jpg?itok=p0wQIykw',
    },
    {
      title: 'Matemáticas (Mathematics)',
      text:
        'Las matemáticas se dedican al estudio sistemático y riguroso de las estructuras y patrones abstractos. Comprenden la resolución de problemas, la formulación de teoremas, y la obtención de soluciones basadas en razonamiento lógico. Las disciplinas matemáticas abarcan campos como el álgebra, la geometría, el cálculo, la estadística y muchas otras.',
      image: 'https://img.jagranjosh.com/imported/images/E/Articles/maths2.jpg',
    },
  ];

  const carouselSettings = {
    showArrows: false,
    showStatus: false,
    showThumbs: false,
    width: '40vh',
    autoPlay: true,
    infiniteLoop: true,
    interval: 5000,
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/vocational-test");
  };

  return (
    <>
      {/* VISTA WEB */}
      <Flex minH={"100vh"} justify={"center"} bg={"purple.100"}>
        <Container as={Stack} maxW={{ md: '6xl' }} display={{ base: 'none', md: 'block' }}>
          <Stack spacing={20} mx={"auto"} maxW={{ base: "lg", lg: "100%" }} py={12} px={6}>
            <HStack>
              <VStack>
                <Heading fontSize={"4xl"} textAlign={"center"} color={"purple.700"}>
                  ¡Descubre tu futuro en STEM!
                </Heading>
                <Text fontSize={["2xl"]} textAlign={"left"} m={4} color={'purple.700'}>
                  ¿Te apasiona la ciencia, la tecnología, la ingeniería o las matemáticas? Las carreras STEM ofrecen oportunidades emocionantes y desafiantes.
                  Descubre cómo puedes ser parte de la innovación y el progreso.
                </Text>
                <Button onClick={handleButtonClick} colorScheme="purple" color="white" variant="solid" rightIcon={<FaHeart />}>
                  Realizar test vocacional
                </Button>
              </VStack>
              <Image objectFit='cover' src='WomenInStem2.png' h={{ md: '400px' }} w={{ md: '400px' }} />
            </HStack>
            <VStack spacing={8}>
              <Heading textAlign={"center"} color={"purple.700"}>
                ¿Qué son las carreras STEM?
              </Heading>
              <Card >
                <CardBody>
                  <HStack>
                    <Image objectFit='cover' src='WomenStem.gif' h={{ md: '400px' }} w={{ md: '400px' }} m={4} />
                    <Text fontSize={["2xl"]} textAlign={"center"} m={4}>
                      Las carreras STEM están relacionadas con la innovación, el desarrollo de tecnologías y el crecimiento de las empresas,
                      lo que contribuye a la mejora de la economía. Los profesionales que se dedican a estas áreas ayudan a mejorar la competitividad
                      de las empresas y a impulsar la creación de empleos de alta calidad.
                    </Text>
                  </HStack>
                </CardBody>
              </Card>
            </VStack>
            <VStack spacing={8}>
              <Heading textAlign={"center"} color={"purple.700"}>
                ¿Cuáles son las áreas de STEM?
              </Heading>
              <SimpleGrid spacing={8} templateColumns="repeat(auto-fill, minmax(400px, 1fr))">
                {cards.map((card, index) => (
                  <Card key={index} overflow="hidden">
                    <CardHeader>
                      <Heading size="md">{card.title}</Heading>
                    </CardHeader>
                    <Image objectFit="cover" src={card.image} alt={card.title} h='250px' />

                    <CardBody>
                      <Text>{card.text}</Text>
                    </CardBody>
                  </Card>
                ))}
              </SimpleGrid>
            </VStack>
          </Stack>
        </Container >

        {/* VISTA MOBILE */}
        <Stack spacing={20} mx={"auto"} maxW={{ base: "lg", lg: "100%" }} py={12} px={6} display={{ base: 'flex', md: 'none' }}>
          <VStack spacing={4}>
            <Heading fontSize={"4xl"} textAlign={"center"} color={"purple.700"}>
              ¡Descubre tu futuro en STEM!
            </Heading>
            <Image objectFit='cover' src='WomenInStem2.png' h={{ md: '400px' }} w={{ md: '400px' }} />
            <Text fontSize={["2xl"]} textAlign={"left"} m={4} color={'purple.700'}>
              ¿Te apasiona la ciencia, la tecnología, la ingeniería o las matemáticas? Las carreras STEM ofrecen oportunidades emocionantes y desafiantes.
              Descubre cómo puedes ser parte de la innovación y el progreso.
            </Text>
            <Button onClick={handleButtonClick} colorScheme="purple" color="white" variant="solid" rightIcon={<FaHeart />}>
              Realizar test vocacional
            </Button>
          </VStack>
          <VStack spacing={4}>
            <Heading textAlign={"center"} color={"purple.700"}>
              ¿Qué son las carreras STEM?
            </Heading>
            <Card >
              <CardBody>
                <Image objectFit='cover' src='WomenStem.gif' h={{ md: '400px' }} w={{ md: '400px' }} />
                <Text fontSize={["md", "lg"]} textAlign={"center"}>
                  Las carreras STEM están relacionadas con la innovación, el desarrollo de tecnologías y el crecimiento de las empresas,
                  lo que contribuye a la mejora de la economía. Los profesionales que se dedican a estas áreas ayudan a mejorar la competitividad
                  de las empresas y a impulsar la creación de empleos de alta calidad.
                </Text>
              </CardBody>
            </Card>
          </VStack>
          <VStack spacing={4}>
            <Heading textAlign={"center"} color={"purple.700"}>
              ¿Cuáles son las áreas de STEM?
            </Heading>
            <Box display="flex" justifyContent="center">
              <Carousel {...carouselSettings}>
                {cards.map((card, index) => (
                  <Card key={index} overflow="hidden" mx={2}>
                    <Image objectFit="cover" src={card.image} />
                    <CardHeader>
                      <Heading size="md">{card.title}</Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>{card.text}</Text>
                    </CardBody>
                  </Card>
                ))}
              </Carousel>
            </Box>
          </VStack>
        </Stack>
      </Flex>
    </>
  );
}

export default LearnSTEM;