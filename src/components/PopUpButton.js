import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Heading, Text, Image, Button, IconButton, Popover, PopoverTrigger, PopoverContent, PopoverHeader,
  PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor,
} from '@chakra-ui/react';

function PopUpButton({ onConfirm, isOpen }) {

  const handlePopUpAlertConfirm = () => {
    onConfirm();
  };

  return (
    <motion.div
      drag
      initial={{ x: window.innerWidth - 90, y: window.innerHeight / 8 - 120 }} // Alinea a la derecha
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
      <Popover placement='left' isOpen={isOpen}>
        <PopoverTrigger>
          <IconButton
            isRound={true}
            bg='purple.200'
            sx={{ _hover: { backgroundColor: 'purple.200' }, w: '65px', h: '65px' }}
            icon={<Image src='/imgPrac.png' w='55px' h='60px' />}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <Heading textAlign={"center"} color={"purple.700"}>Post Test</Heading>
          <Text textAlign="center">
            ¡Te invitamos a resolver un test super cortito!
          </Text>
          <Button bg={'purple.400'} color={'white'} onClick={handlePopUpAlertConfirm}>
            Hacerlo ahora
          </Button>
        </PopoverContent>
      </Popover>
    </motion.div>
  );
}

export default PopUpButton;