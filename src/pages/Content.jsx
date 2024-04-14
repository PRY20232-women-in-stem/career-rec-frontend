import { useLocation } from 'react-router-dom';
import {
  Stack, Flex
} from '@chakra-ui/react';
import STEMAreaContent from '../components/STEMAreaContent';
import engineeringData from '../resources/EngineeringContent';
import technologyData from '../resources/TechnologyContent';
import mathematicsData from '../resources/MathematicsContent';
import scienceData from '../resources/ScienceContent';

const areaDataMap = {
  "Ingenieria": engineeringData,
  "Ciencia": scienceData,
  "Tecnologia": technologyData,
  "Matematica": mathematicsData
};

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

  const areaData = areaDataMap[area];

  return (
    <ContentWrapper>
      {area && <STEMAreaContent areaName={area} areaData={areaData} />}
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