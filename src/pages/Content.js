import { Flex, Heading, Stack, Text, SimpleGrid } from "@chakra-ui/layout";
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@chakra-ui/react";

function LearnSTEM() {
  return (
    <>
      <Flex minH={"100vh"} justify={"center"} bg={"purple.100"}>
        <Stack spacing={8} mx={"auto"} maxW={{ base: "lg", lg: "100%" }} py={12} px={6}>
          <Heading fontSize={"4xl"} textAlign={"center"} color={"purple.700"}>
            ¡Aprendamos de STEM! xdxdxdx
          </Heading>
          <Image objectFit='cover' src='WomenInStem2.png' />
          <Heading textAlign={"center"} color={"purple.700"}>
            ¿Qué son las carreras STEM?
          </Heading>
          <Text fontSize={["md", "lg"]} textAlign={"center"} color={'purple.700'}>Las carreras STEM están relacionadas con la innovación, el desarrollo de tecnologías y el crecimiento de las empresas, lo que contribuye a la mejora de la economía. Los profesionales que se dedican a estas áreas ayudan a mejorar la competitividad de las empresas y a impulsar la creación de empleos de alta calidad.</Text>
          <Heading textAlign={"center"} color={"purple.700"}>
            ¿Cuáles son las áreas de STEM?
          </Heading>
          <SimpleGrid spacing={8} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
            <Card overflow='hidden'>
              <Image objectFit='cover' src='WomenInStem1.png' />
              <CardHeader>
                <Heading size='md'>Ciencia (Science)</Heading>
              </CardHeader>
              <CardBody>
                <Text>La ciencia se dedica al estudio sistemático y metódico del mundo natural. Comprende la observación, la experimentación, la formulación de hipótesis y la obtención de conclusiones basadas en evidencia. Las disciplinas científicas abarcan campos como la biología, la química, la física, la astronomía y muchas otras.</Text>
              </CardBody>
              <CardFooter>
                <Button>Ver más</Button>
              </CardFooter>
            </Card>
            <Card overflow='hidden'>
              <Image objectFit='cover' src='WomenInStem1.png' />
              <CardHeader>
                <Heading size='md'>Tecnología (Technology)</Heading>
              </CardHeader>
              <CardBody>
                <Text>La ciencia se dedica al estudio sistemático y metódico del mundo natural. Comprende la observación, la experimentación, la formulación de hipótesis y la obtención de conclusiones basadas en evidencia. Las disciplinas científicas abarcan campos como la biología, la química, la física, la astronomía y muchas otras.</Text>
              </CardBody>
              <CardFooter>
                <Button>Ver más</Button>
              </CardFooter>
            </Card>
            <Card overflow='hidden'>
              <Image objectFit='cover' src='WomenInStem1.png' />
              <CardHeader>
                <Heading size='md'>Ingeniería (Engineering)</Heading>
              </CardHeader>
              <CardBody>
                <Text>La ciencia se dedica al estudio sistemático y metódico del mundo natural. Comprende la observación, la experimentación, la formulación de hipótesis y la obtención de conclusiones basadas en evidencia. Las disciplinas científicas abarcan campos como la biología, la química, la física, la astronomía y muchas otras.</Text>
              </CardBody>
              <CardFooter>
                <Button>Ver más</Button>
              </CardFooter>
            </Card>
            <Card overflow='hidden'>
              <Image objectFit='cover' src='WomenInStem1.png' />
              <CardHeader>
                <Heading size='md'>Matemáticas (Mathematics)</Heading>
              </CardHeader>
              <CardBody>
                <Text>La ciencia se dedica al estudio sistemático y metódico del mundo natural. Comprende la observación, la experimentación, la formulación de hipótesis y la obtención de conclusiones basadas en evidencia. Las disciplinas científicas abarcan campos como la biología, la química, la física, la astronomía y muchas otras.</Text>
              </CardBody>
              <CardFooter>
                <Button>Ver más</Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Stack>
      </Flex>
    </>
  );
}

export default LearnSTEM;