import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Heading, Text, Image, Button, IconButton, Popover, PopoverTrigger, PopoverContent, PopoverHeader,
  PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton
} from '@chakra-ui/react';

function PopUpButton({ onConfirm }) {
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const postTestStatus = localStorage.getItem("post_test_compl");
  const userGroup = localStorage.getItem("group");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setPopUpIsOpen(true);
    }, 10000); // 240000 4 minutos en milisegundos

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const handlePopUpAlertConfirm = () => {
    onConfirm();
  };

  const handlePopoverClose = () => {
    setPopUpIsOpen(false); // Cierra el Popover al hacer clic en el botón de cierre
  };

  return (
    <motion.div
      drag
      initial={{ x: window.innerWidth - 90, y: window.innerHeight / 8 - 75 }} // Alinea a la derecha
      dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
      whileHover={{ scale: 1.2 }}
      dragConstraints={{
        top: -43, // Restringe el movimiento hacia la arriba
        right: window.innerWidth - 95, // Restringe el movimiento hacia la derecha
        bottom: window.innerHeight - 180, // Restringe el movimiento hacia abajo para evitar que desaparezca
        left: -20, // Restringe el movimiento hacia la izquierda
      }}
      style={{
        width: "60px",
        position: "fixed", // Posición fija para que el z-index tenga efecto
        zIndex: 9999, // Valor alto para que esté por encima de otros elementos
      }}
    >
      <Popover placement='left' isOpen={popUpIsOpen}>
        <PopoverTrigger>
          <IconButton
            isRound={true}
            bg='purple.200'
            sx={{ _hover: { backgroundColor: 'purple.200' }, w: '65px', h: '65px' }}
            icon={<Image src='/imgPrac.png' w='55px' h='60px' />}
            onClick={() => setPopUpIsOpen(!popUpIsOpen)}
          />
        </PopoverTrigger>
        <PopoverContent w={{ base: "250px", sm: "auto" }}>
          <PopoverArrow />
          <PopoverCloseButton onClick={handlePopoverClose} />

          {postTestStatus === "false" || (postTestStatus === "true" && userGroup === "G2") ? (
            <>
              <PopoverHeader border='0'>
                <Heading size='lg' textAlign={"center"} color={"purple.700"}>
                  Post Test
                </Heading>
              </PopoverHeader>
              <PopoverBody border='0'>
                <Text textAlign="center">
                  ¡Te invitamos a resolver un test super cortito!
                </Text>
              </PopoverBody>
              <PopoverFooter border='0'>
                <Button size='sm' bg={'purple.400'} color={'white'} onClick={handlePopUpAlertConfirm}>
                  Hacerlo ahora
                </Button>
              </PopoverFooter>
            </>
          ) : (
            <>
              <PopoverBody border='0'>
                <Heading size='lg' textAlign={"center"} color={"purple.700"}>
                  Gracias por hacer el test!💜
                </Heading>
              </PopoverBody>
            </>
          )}

        </PopoverContent>
      </Popover>
    </motion.div>
  );
}

export default PopUpButton;