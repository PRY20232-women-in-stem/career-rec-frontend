import { Flex, Heading, Stack, Text, SimpleGrid } from "@chakra-ui/layout";
import { Button, Card, CardBody, CardFooter, CardHeader, Image, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function LearnSTEM() {
  const isMobile = useBreakpointValue({ base: true, md: false })

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false, // Centra los elementos en el carrusel
  };

  const cards = [
    {
      title: 'Ciencia (Science)',
      text:
        'La ciencia se dedica al estudio sistemático y metódico del mundo natural...',
      image: 'WomenInStem1.png',
    },
    {
      title: 'Tecnología (Technology)',
      text:
        'La ciencia se dedica al estudio sistemático y metódico del mundo natural...',
      image: 'WomenInStem1.png',
    },
    {
      title: 'Ingeniería (Engineering)',
      text:
        'La ciencia se dedica al estudio sistemático y metódico del mundo natural...',
      image: 'WomenInStem1.png',
    },
    {
      title: 'Matemáticas (Mathematics)',
      text:
        'La ciencia se dedica al estudio sistemático y metódico del mundo natural...',
      image: 'WomenInStem1.png',
    },
  ];

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
          <Text fontSize={["md", "lg"]} textAlign={"center"} color={'purple.700'}>Las carreras STEM están relacionadas con la innovación, el desarrollo de tecnologías y el crecimiento de las empresas, lo que contribuye a la mejora de la economía. Los profesionales que se dedican a estas áreas ayudan a mejorar la competitividad de las empresas y a impulsar la creación de empleos de alta calidad.</Text>
          <Heading textAlign={"center"} color={"purple.700"}>
            ¿Cuáles son las áreas de STEM?
          </Heading>
          {isMobile ? (
            <Slider {...sliderSettings}>
              {cards.map((card, index) => (
                <div key={index} style={{ margin: '0 8px' }}> {/* Contenedor con margen */}
                  <Card overflow="hidden">
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
                </div>
              ))}
            </Slider>
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