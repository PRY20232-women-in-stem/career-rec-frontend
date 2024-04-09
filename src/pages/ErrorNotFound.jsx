import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

function ErroNotFound() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <Box textAlign="center" py={10} px={6}>
        <Heading size="2xl" color="purple.700">
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Página no encontrada
        </Text>
        <Text color={'gray.500'} mb={6}>
          La página que estás buscando no existe
        </Text>
        <Button onClick={handleButtonClick} colorScheme="purple" color="white" variant="solid">
          Volver al inicio
        </Button>
      </Box>
    </>
  );
}

export default ErroNotFound;