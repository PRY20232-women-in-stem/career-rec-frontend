import React, { useRef } from 'react';
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  Button,
  AlertDialogBody,
  Text,
  Heading,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function LogoutAlert({ isOpen, onConfirm, onCancel }) {
  const cancelRef = useRef();
  const navigate = useNavigate();

  const handleLogoutModalConfirm = () => {
    onConfirm(); // Cerrar el modal de cierre de sesión
    // Aquí podrías implementar la lógica para cerrar sesión
    navigate('/login'); // Redirigir al login después de confirmar
  };

  const handleLogoutModalCancel = () => {
    onCancel(); // Cerrar el modal de cierre de sesión
  };

  return (
    <AlertDialog motionPreset='scale' leastDestructiveRef={cancelRef} onClose={handleLogoutModalCancel} isOpen={isOpen} isCentered>
      <AlertDialogOverlay />
      <AlertDialogContent maxW="xs">
        <AlertDialogHeader>
          <Heading textAlign={"center"} color={"purple.700"}>Cerrar sesión</Heading>
        </AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          <Text textAlign={"center"}>¿Estas segura de cerrar sesión?</Text>
        </AlertDialogBody>
        <AlertDialogFooter justifyContent="center">
          <Button ref={cancelRef} onClick={handleLogoutModalCancel}>No</Button>
          <Button bg={'purple.400'} color={'white'} ml={3} onClick={handleLogoutModalConfirm}>Sí</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default LogoutAlert;