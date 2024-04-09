import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

function AboutUs() {
  return (
    <>
      <Flex minH={"100vh"} justify={"center"} bg={"purple.100"}>
        <Stack spacing={8} mx={"auto"} maxW={{ base: "lg", lg: "100%" }} py={12} px={6}>
          <Heading fontSize={"4xl"} textAlign={"center"} color={"purple.700"}>
            ¡Anímate, atrévete y escoge el mundo de las carreras STEM!
          </Heading>
          <Box p={[4, 6, 8]} maxW={"600px"} bg={"white"} rounded={"md"} shadow={"md"}>
            <Stack spacing={[4, 6]}>
              <Image src='WomenInStem1.png' borderRadius='md' />
              <Text fontSize={["md", "lg"]} textAlign={"center"}>
                Te acompañamos a dar el primer paso hacia el cambio, te mostraremos las áreas más innovadores que contribuyen a la mejora económica del país. Rinde nuestro test vocacional y comienza la aventura.
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

export default AboutUs;