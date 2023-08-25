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
import { Link as ReactRouterLink } from 'react-router-dom';

const NavLink = ({ to, children }) => (
  <Box fontWeight='semibold' px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'purple.400' }} color='white'>
    <ReactRouterLink to={to}>{children}</ReactRouterLink>
  </Box>
);

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'purple.300'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton size={'md'} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
          <HStack alignItems={'center'} justifyContent={'space-between'} w={{ md: '100%' }}>
            <Link as={ReactRouterLink} to='/' _hover={{ textDecoration: 'none' }}>
              <HStack alignItems={'center'}>
                <Image borderRadius='full' boxSize='50px' src='WomenInStem1.png' />
                <Text fontSize={'lg'} color={'white'}>
                  Women in STEM
                </Text>
              </HStack>
            </Link>
            <Flex alignItems={'center'}>
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                <NavLink to='/about-us'>Nosotras</NavLink>
                <NavLink to='/vocational-test'>Test vocacional</NavLink>
                <NavLink to='/learn'>Aprendamos de STEM</NavLink>
              </HStack>
            </Flex>
          </HStack>
        </Flex>
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ position: "absolute", left: 0, width: '100%' }}>
        <Stack px={4} pb={2} bg={'purple.300'} align={'start'}>
          <NavLink to='/about-us'>Nosotras</NavLink>
          <NavLink to='/vocational-test'>Test vocacional</NavLink>
          <NavLink to='/learn'>Aprendamos de STEM</NavLink>
          <Divider />
          <NavLink to='/login'>Cerrar sesión</NavLink>
        </Stack>
      </Collapse >
    </>
  )
}

export default Navbar;