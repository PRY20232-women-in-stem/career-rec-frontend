import { Flex, Heading, Stack, Text, SimpleGrid } from "@chakra-ui/layout";
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@chakra-ui/react";

function LearnSTEM() {
  return (
    <>
      <Flex minH={"100vh"} justify={"center"} bg={"purple.100"}>
        <Stack spacing={8} mx={"auto"} maxW={{ base: "lg", lg: "100%" }} py={12} px={6}>
          <Heading fontSize={"4xl"} textAlign={"center"} color={"purple.700"}>
            ¡Aprendamos de STEM!
          </Heading>
          <Heading textAlign={"center"} color={"purple.700"}>
            ¿Qué son las carreras STEM?
          </Heading>
          <Text color={'purple.700'}>Las carreras STEM están relacionadas con la innovación, el desarrollo de tecnologías y el crecimiento de las empresas, lo que contribuye a la mejora de la economía. Los profesionales que se dedican a estas áreas ayudan a mejorar la competitividad de las empresas y a impulsar la creación de empleos de alta calidad.</Text>
          <Heading textAlign={"center"} color={"purple.700"}>
            ¿Cuáles son las áreas de STEM?
          </Heading>
          <SimpleGrid spacing={8} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
            <Card overflow='hidden'>
              <Image objectFit='cover' src='womenInStem.png' />
              <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
            <Card overflow='hidden'>
              <Image objectFit='cover' src='womenInStem.png' />
              <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
            <Card overflow='hidden'>
              <Image objectFit='cover' src='womenInStem.png' />
              <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
            <Card overflow='hidden'>
              <Image objectFit='cover' src='womenInStem.png' />
              <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Stack>
      </Flex>
    </>
  );
}

export default LearnSTEM;