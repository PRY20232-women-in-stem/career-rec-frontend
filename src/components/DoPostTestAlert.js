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

function DoPostTestAlert({ isOpen, onConfirm, onCancel }) {
  const cancelRef = useRef();

  const handlePostTestAlertConfirm = () => {
    onConfirm();
  };

  const handlePostTestAlertCancel = () => {
    onCancel();
  };

  return (
    <>
      <AlertDialog motionPreset='scale' leastDestructiveRef={cancelRef} onClose={handlePostTestAlertCancel} isOpen={isOpen} isCentered>
        <AlertDialogOverlay />
        <AlertDialogContent maxW="xs">
          <AlertDialogHeader>
            <Heading textAlign={"center"} color={"purple.700"}>Post test</Heading>
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <Text textAlign={"center"}>¿Estás segura de realizar el Post test ahora?</Text>
          </AlertDialogBody>
          <AlertDialogFooter justifyContent="center">
            <Button ref={cancelRef} onClick={handlePostTestAlertCancel}>No</Button>
            <Button bg={'purple.400'} color={'white'} ml={3} onClick={handlePostTestAlertConfirm}>Sí</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default DoPostTestAlert;