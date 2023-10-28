import { useState, useEffect } from 'react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box, Collapse, Divider, Flex, HStack, Highlight, IconButton, Image, Link, Stack, Text,
  useDisclosure
} from '@chakra-ui/react';
import { Link as ReactRouterLink, useLocation, useNavigate } from 'react-router-dom';
import LogoutAlert from '../components/LogoutAlert';
import { getStudentById } from "../services/StudentService";

const NavLink = ({ to, children, onClose }) => (
  <Box fontWeight='semibold' px={2} py={1} rounded={'md'} w={{ base: "100%", md: "auto" }} textAlign={{ base: "left", md: "center" }}
    _hover={{ textDecoration: 'none', bg: 'purple.400' }} color={'white'}>
    <ReactRouterLink to={to} onClick={onClose} >{children}</ReactRouterLink>
  </Box>
);

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVocTestCompleted, setIsVocTestCompleted] = useState(false);
  const [recCareer, setRecCareer] = useState("");

  // Al cargar el componente, verifica si hay un token en el local storage
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const currentUser = JSON.parse(localStorage.getItem("current_user"));

    if (token) {
      setIsLoggedIn(true);
    }
    if (!token && location.pathname === "/content") {
      navigate('/login');
    }

    const fetchStudentData = async () => {
      if (currentUser) {
        const userId = currentUser.userId;
        const response = await getStudentById(userId);
        if (response.vocationalTestCompl === true) {
          setIsVocTestCompleted(true);
          localStorage.setItem('vocational_test_compl', 'true');
        }
        if (response.recCareer !== "") {
          setRecCareer(response.recCareer);
          localStorage.setItem('rec_career', response.recCareer);
        }
      }
    };

    const cachedVocationalTestCompl = localStorage.getItem('vocational_test_compl');
    if (cachedVocationalTestCompl === 'true') {
      setIsVocTestCompleted(true);
    } else {
      fetchStudentData();
    };

    if (location.pathname === "/content") {
      fetchStudentData();
    };
  }, [navigate, location.pathname]);

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
                <NavLink to='/' >Aprendamos de STEM</NavLink>
                <NavLink to='/vocational-test' >Test vocacional</NavLink>
                {isVocTestCompleted && <NavLink to='/content' >Contenido STEM</NavLink>}
              </HStack>
            </Flex>
          </HStack>
        </Flex>

        {/* VERSION MOBILE DEL NAVBAR */}
        <Collapse in={isOpen} animateOpacity style={{ position: "absolute", left: 0, width: '100%' }}>
          <Stack px={4} pb={2} bg={'purple.300'} align={'start'}>
            {/*<NavLink to='/about-us' onClose={onClose}>Nosotras</NavLink> // Se ha decidido quitar esta sección */}
            <NavLink to='/' onClose={onClose}>Aprendamos de STEM</NavLink>
            <NavLink to='/vocational-test' onClose={onClose}>Test vocacional</NavLink>

            {isVocTestCompleted &&
              <NavLink to="/content?area=Ciencia" onClose={onClose}>
                {recCareer === 'Ciencia' ? (
                  <Highlight query={['Ciencias']} styles={{ px: '3', py: '1', rounded: 'full', bg: 'purple.500', color: 'white' }}>
                    Ciencias
                  </Highlight>
                ) : (
                  'Ciencias'
                )}
              </NavLink>
            }
            {isVocTestCompleted &&
              <NavLink to="/content?area=Tecnologia" onClose={onClose}>
                {recCareer === 'Tecnologia' ? (
                  <Highlight query={['Tecnología']} styles={{ px: '3', py: '1', rounded: 'full', bg: 'purple.500', color: 'white' }}>
                    Tecnología
                  </Highlight>
                ) : (
                  'Tecnología'
                )}
              </NavLink>
            }
            {isVocTestCompleted &&
              <NavLink to="/content?area=Ingenieria" onClose={onClose}>
                {recCareer === 'Ingenieria' ? (
                  <Highlight query={['Ingeniería']} styles={{ px: '3', py: '1', rounded: 'full', bg: 'purple.500', color: 'white' }}>
                    Ingeniería
                  </Highlight>
                ) : (
                  'Ingeniería'
                )}
              </NavLink>
            }
            {isVocTestCompleted &&
              <NavLink to="/content?area=Matematica" onClose={onClose}>
                {recCareer === 'Matematica' ? (
                  <Highlight query={['Matemáticas']} styles={{ px: '3', py: '1', rounded: 'full', bg: 'purple.500', color: 'white' }}>
                    Matemáticas
                  </Highlight>
                ) : (
                  'Matemáticas'
                )}
              </NavLink>
            }
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