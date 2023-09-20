import { Flex, Heading, Stack, Text, SimpleGrid, Box } from "@chakra-ui/layout";
import { Button, Card, CardBody, CardFooter, CardHeader, Image, useBreakpointValue } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function LearnSTEM() {
  const isMobile = useBreakpointValue({ base: true, md: false })

  const cards = [
    {
      title: 'Ciencia (Science)',
      text:
        'La ciencia se dedica al estudio sistemático y metódico del mundo natural. Comprende la observación, la experimentación, la formulación de hipótesis y la obtención de conclusiones basadas en evidencia. Las disciplinas científicas abarcan campos como la biología, la química, la física, la astronomía y muchas otras.',
      image: 'WomenInStem1.png',
    },
    {
      title: 'Tecnología (Technology)',
      text:
        'La ciencia se dedica al estudio sistemático y metódico del mundo natural. Comprende la observación, la experimentación, la formulación de hipótesis y la obtención de conclusiones basadas en evidencia. Las disciplinas científicas abarcan campos como la biología, la química, la física, la astronomía y muchas otras.',
      image: 'WomenInStem1.png',
    },
    {
      title: 'Ingeniería (Engineering)',
      text:
        'La ciencia se dedica al estudio sistemático y metódico del mundo natural. Comprende la observación, la experimentación, la formulación de hipótesis y la obtención de conclusiones basadas en evidencia. Las disciplinas científicas abarcan campos como la biología, la química, la física, la astronomía y muchas otras.',
      image: 'WomenInStem1.png',
    },
    {
      title: 'Matemáticas (Mathematics)',
      text:
        'La ciencia se dedica al estudio sistemático y metódico del mundo natural. Comprende la observación, la experimentación, la formulación de hipótesis y la obtención de conclusiones basadas en evidencia. Las disciplinas científicas abarcan campos como la biología, la química, la física, la astronomía y muchas otras.',
      image: 'WomenInStem1.png',
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

  return (
    <>
      <Flex minH={"100vh"} justify={"center"} bg={"purple.100"}>
        <Stack spacing={8} mx={"auto"} maxW={{ base: "lg", lg: "100%" }} py={12} px={6}>
          <Heading fontSize={"4xl"} textAlign={"center"} color={"purple.700"}>
            ¡Aprendamos de STEM!
          </Heading>
          <Image objectFit='cover' src='WomenInStem2.png' />
          <Heading textAlign={"center"} color={"purple.700"}>
            ¿Qué son las carreras STEM?
          </Heading>
          <Text fontSize={["md", "lg"]} textAlign={"center"} color={'purple.700'}>
            Las carreras STEM están relacionadas con la innovación, el desarrollo de tecnologías y el crecimiento de las empresas,
            lo que contribuye a la mejora de la economía. Los profesionales que se dedican a estas áreas ayudan a mejorar la competitividad
            de las empresas y a impulsar la creación de empleos de alta calidad.
          </Text>
          <Heading textAlign={"center"} color={"purple.700"}>
            ¿Cuáles son las áreas de STEM?
          </Heading>
          {isMobile ? (
            <Box display="flex" justifyContent="center">
              <Carousel {...carouselSettings}>
                {cards.map((card, index) => (
                  <Card key={index} overflow="hidden">
                    <Image objectFit="cover" src={card.image} />
                    <CardHeader>
                      <Heading size="md">{card.title}</Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>{card.text}</Text>
                    </CardBody>
                    <CardFooter>
                      <Button>Ver más</Button>
                    </CardFooter>
                  </Card>
                ))}
              </Carousel>
            </Box>
          ) : (
            <SimpleGrid spacing={8} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
              {cards.map((card, index) => (
                <Card key={index} overflow="hidden">
                  <Image objectFit="cover" src={card.image} alt={card.title} />
                  <CardHeader>
                    <Heading size="md">{card.title}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>{card.text}</Text>
                  </CardBody>
                  <CardFooter>
                    <Button>Ver más</Button>
                  </CardFooter>
                </Card>
              ))}
            </SimpleGrid>
          )}
        </Stack>
      </Flex>
    </>
  );
}

export default LearnSTEM;