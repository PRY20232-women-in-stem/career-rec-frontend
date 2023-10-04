import { useState, useEffect } from 'react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Collapse,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';
import LogoutAlert from '../components/LogoutAlert';

const NavLink = ({ to, children, onClose }) => (
  <Box fontWeight='semibold' px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'purple.400' }} color='white'>
    <ReactRouterLink to={to} onClick={onClose}>{children}</ReactRouterLink>
  </Box>
);

function Navbar() {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Al cargar el componente, verifica si hay un token en el local storage
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogoutClick = () => {
    setShowLogoutAlert(true);
  };

  const handleLogoutAlertConfirm = () => {
    setIsLoggedIn(false);
    setShowLogoutAlert(false); // Cerrar el modal de alerta
  };

  const handleLogoutAlertCancel = () => {
    setShowLogoutAlert(false); // Cerrar el modal de alerta
  };

  return (
    <>
      <Box bg={'purple.300'} px={4} position="sticky" top={0} zIndex={1000}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton size={'md'} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
          <HStack alignItems={'center'} justifyContent={'space-between'} w={{ md: '100%' }}>
            <Link as={ReactRouterLink} to='/' _hover={{ textDecoration: 'none' }}>
              <HStack alignItems={'center'}>
                <Image borderRadius='full' boxSize='50px' src='WomenInStem1.png' />
                <Text fontSize={'lg'} color={'white'}>Girls in STEM</Text>
              </HStack>
            </Link>
            <Flex alignItems={'center'}>
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                {/*<NavLink to='/about-us'>Nosotras</NavLink> // Se ha decidido quitar esta sección */}
                {location.pathname !== "/content" && (
                  <NavLink to='/vocational-test'>Test vocacional</NavLink>
                )}
                <NavLink to='/'>Aprendamos de STEM</NavLink>
              </HStack>
            </Flex>
          </HStack>
        </Flex>

        <Collapse in={isOpen} animateOpacity style={{ position: "absolute", left: 0, width: '100%' }}>
          <Stack px={4} pb={2} bg={'purple.300'} align={'start'}>
            {/*<NavLink to='/about-us' onClose={onClose}>Nosotras</NavLink> // Se ha decidido quitar esta sección */}
            {location.pathname !== "/content" && (
              <NavLink to='/vocational-test' onClose={onClose}>Test vocacional</NavLink>
            )}
            <NavLink to='/' onClose={onClose}>Aprendamos de STEM</NavLink>
            <Divider />
            {isLoggedIn ? (
              <Box fontWeight='semibold' px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'purple.400' }} color='white' onClick={handleLogoutClick}>
                Cerrar sesión
              </Box>
            ) : (
              <>
                <NavLink to='/register' onClose={onClose}>Registrarse</NavLink>
                <NavLink to='/login' onClose={onClose}>Iniciar sesión</NavLink>
              </>
            )}
          </Stack>
        </Collapse>
        <LogoutAlert isOpen={showLogoutAlert} onConfirm={handleLogoutAlertConfirm} onCancel={handleLogoutAlertCancel} />
      </Box>
    </>
  )
}

export default Navbar;