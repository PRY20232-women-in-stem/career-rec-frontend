import { useRef } from 'react';
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogCloseButton,
  Button,
  AlertDialogBody,
  Text,
  Heading,
} from '@chakra-ui/react';

function PopUpAlert({ isOpen, onConfirm, onCancel }) {
  const cancelRef = useRef();

  const handlePopUpAlertConfirm = () => {
    onConfirm();
  };

  const handleLogoutAlertCancel = () => {
    onCancel(); // Cerrar el modal de cierre de sesión
  };

  return (
    <AlertDialog motionPreset='scale' leastDestructiveRef={cancelRef} onClose={handleLogoutAlertCancel} isOpen={isOpen} isCentered>
      <AlertDialogOverlay />
      <AlertDialogContent maxW="xs">
        <AlertDialogHeader>
          <Heading textAlign={"center"} color={"purple.700"}>Post Test</Heading>
        </AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          <Text textAlign="center">
            ¡Te invitamos a resolver un test super cortito!
          </Text>
        </AlertDialogBody>
        <AlertDialogFooter justifyContent="center">
          <Button bg={'purple.400'} color={'white'} onClick={handlePopUpAlertConfirm}>
            Hacerlo ahora
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default PopUpAlert;