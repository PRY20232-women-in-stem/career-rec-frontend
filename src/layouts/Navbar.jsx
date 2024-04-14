import { useState, useEffect } from 'react';
import { Link as ReactRouterLink, useLocation, useNavigate } from 'react-router-dom';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box, Collapse, Divider, Flex, HStack, IconButton, Image, Link, Stack, Text, Center, useDisclosure, Container
} from '@chakra-ui/react';
import LogoutAlert from '../components/LogoutAlert';

function NavLink({ to, children, onClose, bg }) {
  return (
    <ReactRouterLink to={to} onClick={onClose} >
      <Box fontWeight='semibold' px={2} py={1} rounded={'md'} w={{ base: "100%", md: "auto" }} textAlign={{ base: "left", md: "center" }}
        _hover={{ textDecoration: 'none', bg: 'purple.400' }} color={'white'} bg={bg} fontSize={15}>
        {children}
      </Box>
    </ReactRouterLink>
  );
}

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVocTestCompleted, setIsVocTestCompleted] = useState(false);
  const [recArea, setRecArea] = useState("");

  // Al cargar el componente, verifica si hay un token en el local storage
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const currentUser = JSON.parse(localStorage.getItem("current_user"));
    const contentRegex = /^\/content(?:\?|$)/;

    if (token) {
      setIsLoggedIn(true);
    }

    if (!token && contentRegex.test(location.pathname)) {
      navigate('/login');
    }

    const fetchStudentData = async () => {
      if (currentUser) {
        if (currentUser.vocationalTestCompleted === true) {
          setIsVocTestCompleted(true);
        }
        if (currentUser.recommendedArea !== "") {
          setRecArea(currentUser.recommendedArea);
        }
      }
    };

    fetchStudentData();

  }, [navigate, location.pathname]);

  const handleLogoutClick = () => {
    setShowLogoutAlert(true);
  };

  const handleLogoutAlertConfirm = () => {
    setIsLoggedIn(false);
    setShowLogoutAlert(false); // Cerrar el modal de alerta
    onClose();
  };

  const handleLogoutAlertCancel = () => {
    setShowLogoutAlert(false); // Cerrar el modal de alerta
  };

  const areasSTEM = [
    { name: 'Ciencias', route: '/content?area=Ciencia' },
    { name: 'Tecnologia', route: '/content?area=Tecnologia' },
    { name: 'Ingenieria', route: '/content?area=Ingenieria' },
    { name: 'Matematica', route: '/content?area=Matematica' }
  ];

  const renderSTEMLinks = (isMobile) => {
    if (!isVocTestCompleted || isLoggedIn === false) return null;

    return areasSTEM.map(area => {
      const navLinkProps = {
        key: area.name,
        to: area.route,
        bg: recArea === area.name ? 'purple.500' : undefined,
        onClose: isMobile ? onClose : undefined
      };

      return <NavLink {...navLinkProps}>{area.name}</NavLink>;
    });
  };

  const renderAuthLinks = () => {
    if (isLoggedIn) {
      return (
        <NavLink onClose={handleLogoutClick}>Cerrar sesión</NavLink>
      );
    } else {
      return (
        <>
          <NavLink to='/register' onClose={onClose} bg={'purple.500'}>Registrarse</NavLink>
          <NavLink to='/login' onClose={onClose} >Iniciar sesión</NavLink>
        </>
      );
    }
  };

  const renderWebOrMobile = () => {
    return (
      <Box bg={'purple.300'} px={4} position="sticky" top={0} zIndex={1000}>

        {/* VERSION WEB DEL NAVBAR */}
        <Container as={Stack} maxW={{ md: '6xl' }} display={{ base: 'none', md: 'flex' }}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <HStack alignItems={'center'} justifyContent={'space-between'} w={{ md: '100%' }}>
              <Link as={ReactRouterLink} to='/' _hover={{ textDecoration: 'none' }}>
                <HStack alignItems={'center'}>
                  <Image borderRadius='full' boxSize='50px' src='WomenInStem1.png' />
                  <Text fontWeight='semibold' fontSize={'lg'} color={'white'}>Girls in STEM</Text>
                </HStack>
              </Link>
              <Flex alignItems={'center'}>
                <HStack as={'nav'} spacing={2}>
                  {/*<NavLink to='/about-us'>Nosotras</NavLink> // Se ha decidido quitar esta sección */}
                  <NavLink to='/' >Aprendamos de STEM</NavLink>
                  <NavLink to='/vocational-test' >Test vocacional</NavLink>
                  {renderSTEMLinks(false)}
                  <Center height='30px'>
                    <Divider orientation='vertical' borderWidth="1px" rounded="1px" />
                  </Center>
                  {renderAuthLinks()}
                </HStack>
              </Flex>
            </HStack>
          </Flex>
        </Container>

        {/* VERSION DEL NAVBAR MOBILE */}
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} display={{ base: 'flex', md: 'none' }}>
          <IconButton size={'md'} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} onClick={isOpen ? onClose : onOpen} />
          <HStack alignItems={'center'} justifyContent={'space-between'} w={{ md: '100%' }}>
            <Link as={ReactRouterLink} to='/' _hover={{ textDecoration: 'none' }}>
              <HStack alignItems={'center'}>
                <Image borderRadius='full' boxSize='50px' src='WomenInStem1.png' />
                <Text fontWeight='semibold' fontSize={'lg'} color={'white'}>Girls in STEM</Text>
              </HStack>
            </Link>
          </HStack>
        </Flex>
        {/* PANEL PARA MOBILE DEL NAVBAR */}
        <Collapse in={isOpen} animateOpacity style={{ position: "absolute", left: 0, width: '100%' }} display={{ base: 'flex', md: 'none' }}>
          <Stack px={4} pb={2} bg={'purple.300'} align={'start'}>
            {/*<NavLink to='/about-us' onClose={onClose}>Nosotras</NavLink> // Se ha decidido quitar esta sección */}
            <NavLink to='/' onClose={onClose}>Aprendamos de STEM</NavLink>
            <NavLink to='/vocational-test' onClose={onClose}>Test vocacional</NavLink>
            {renderSTEMLinks(true)}
            <Divider />
            {renderAuthLinks()}
          </Stack>
        </Collapse>
      </Box >
    );
  }

  return (
    <>
      {renderWebOrMobile()}
      <LogoutAlert isOpen={showLogoutAlert} onConfirm={handleLogoutAlertConfirm} onCancel={handleLogoutAlertCancel} />
    </>
  )
}

export default Navbar;