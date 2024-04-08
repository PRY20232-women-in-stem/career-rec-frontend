import { useLocation } from 'react-router-dom';
import {
  Stack, Flex
} from '@chakra-ui/react';
import PopUpButton from '../components/PopUpButton';
import EngineeringContent from '../components/EngineeringContent';
import ScienceContent from '../components/ScienceContent';
import TechnologyContent from '../components/TechnologyContent';
import MathematicsContent from '../components/MathematicsContent';

function ContentWrapper({ children }) {
  return (
    <Flex minH={"100vh"} justify={"center"} bg={"purple.100"}>
      <Stack spacing={4} mx={"auto"} maxW={{ base: "lg", lg: "100%" }} py={6} px={6} >
        {children}
      </Stack>
    </Flex>
  );
}

function ContentView() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const area = searchParams.get("area");
  return (
    <ContentWrapper>
      <PopUpButton />
      {area === "Ingenieria" ? <EngineeringContent /> : null}
      {area === "Ciencia" ? <ScienceContent /> : null}
      {area === "Tecnologia" ? <TechnologyContent /> : null}
      {area === "Matematica" ? <MathematicsContent /> : null}
    </ContentWrapper >
  );
}

function Content() {
  return (
    <>
      <ContentView />
    </>
  );
}

export default Content;