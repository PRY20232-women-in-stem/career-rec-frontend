import { useRef } from 'react';
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  Button,
  AlertDialogBody,
  Text,
  Heading,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function RegisterNowAlert({ isOpen, onConfirm }) {
  const cancelRef = useRef();
  const navigate = useNavigate();

  const handleRegisterModalConfirm = () => {
    onConfirm(); // Cerrar el modal de registro
    navigate('/register'); // Redirigir al login después de confirmar
  };

  return (
    <AlertDialog motionPreset='scale' leastDestructiveRef={cancelRef} isOpen={isOpen} isCentered>
      <AlertDialogOverlay />
      <AlertDialogContent maxW="xs">
        <AlertDialogHeader>
          <Heading textAlign={"center"} color={"purple.700"}>¡Hola!</Heading>
        </AlertDialogHeader>
        <AlertDialogBody>
          <Text textAlign={"center"}>Parece que no haz iniciado sesión, hazlo para realizar el test. 😊</Text>
        </AlertDialogBody>
        <AlertDialogFooter justifyContent="center">
          <Button bg={'purple.400'} color={'white'} onClick={handleRegisterModalConfirm}>Ir ahora</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default RegisterNowAlert;