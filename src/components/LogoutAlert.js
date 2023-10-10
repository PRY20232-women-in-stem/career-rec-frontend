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

  const handleLogoutAlertConfirm = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('current_user');
    localStorage.removeItem('vocational_test_compl');
    localStorage.removeItem('pre_test_compl');
    localStorage.removeItem('post_test_compl');
    onConfirm(); // Cerrar el modal de cierre de sesión
    navigate('/login');
  };

  const handleLogoutAlertCancel = () => {
    onCancel(); // Cerrar el modal de cierre de sesión
  };

  return (
    <AlertDialog motionPreset='scale' leastDestructiveRef={cancelRef} onClose={handleLogoutAlertCancel} isOpen={isOpen} isCentered>
      <AlertDialogOverlay />
      <AlertDialogContent maxW="xs">
        <AlertDialogHeader>
          <Heading textAlign={"center"} color={"purple.700"}>Cerrar sesión</Heading>
        </AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          <Text textAlign={"center"}>¿Estás segura de cerrar sesión?</Text>
        </AlertDialogBody>
        <AlertDialogFooter justifyContent="center">
          <Button ref={cancelRef} onClick={handleLogoutAlertCancel}>No</Button>
          <Button bg={'purple.400'} color={'white'} ml={3} onClick={handleLogoutAlertConfirm}>Sí</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default LogoutAlert;