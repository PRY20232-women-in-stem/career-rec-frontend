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

function RegisterSuccessfulAlert({ isOpen, onConfirm }) {
  const cancelRef = useRef();
  const navigate = useNavigate();

  const handleRegisterModalConfirm = () => {
    onConfirm(); // Cerrar el modal de registro
    navigate('/login'); // Redirigir al login después de confirmar
  };

  return (
    <AlertDialog motionPreset='scale' leastDestructiveRef={cancelRef} isOpen={isOpen} isCentered>
      <AlertDialogOverlay />
      <AlertDialogContent maxW="xs">
        <AlertDialogHeader>
          <Heading textAlign={"center"} color={"purple.700"}>¡Bienvenida!</Heading>
        </AlertDialogHeader>
        <AlertDialogBody>
          <Text textAlign={"center"}>El usuario fue registrado exitosamente</Text>
        </AlertDialogBody>
        <AlertDialogFooter justifyContent="center">
          <Button bg={'purple.400'} color={'white'} onClick={handleRegisterModalConfirm}>Aceptar</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default RegisterSuccessfulAlert;