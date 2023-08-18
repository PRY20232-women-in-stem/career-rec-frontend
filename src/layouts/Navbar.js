import {
  Box,
  Flex,
  Button,
  IconButton,
  useDisclosure,
  HStack,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Image,
  Text,
  Link
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Link as ReactRouterLink, NavLink } from 'react-router-dom';


function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'purple.300'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton size={'md'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
          <HStack alignItems={'center'}>
            <Link as={ReactRouterLink} to='/'>
              <Image borderRadius='full' boxSize='50px' src='womenInStem.png' />
            </Link>
            <Text fontWeight={'500'} fontSize={'lg'} color={'white'}>
              Women in STEM
            </Text>
          </HStack>
          <Flex alignItems={'center'}>
            {/* ELEMENTOS DEL NAVBAR */}
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              <NavLink to="/about-us">
                <Box fontWeight='semibold' px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'purple.400' }} color='white'>
                  Quienes somos
                </Box>
              </NavLink>
              <NavLink to="/vocational-test">
                <Box fontWeight='semibold' px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'purple.400' }} color='white'>
                  Test vocacional
                </Box>
              </NavLink>
              <NavLink to="/learn">
                <Box fontWeight='semibold' px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'purple.400' }} color='white'>
                  Aprendamos de STEM
                </Box>
              </NavLink>
            </HStack>
            {/* BOTONES DE ACCION */}

            {/* Construir validacion cuando sesion exista */}
            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0} ml={4}>
                <Avatar size={'sm'} src='personaAvatar.png' />
              </MenuButton>
              <MenuList>
                <MenuItem>Perfil</MenuItem>
                <MenuItem>Resultados</MenuItem>
                <MenuDivider />
                <MenuItem>Cerrar sesión</MenuItem>
              </MenuList>
            </Menu>
            {/* Fin de menu de logeado*/}
          </Flex>
        </Flex>

        {/* Menu hamburguesa responsive */}
        {isOpen ? (
          <Box pb={4} display={{ md: 'flex' }}>
            {/*<HStack alignItems={'center'}>
              <Link as={ReactRouterLink} to='/'>
                <Image borderRadius='full' boxSize='50px' src='womenInStem.png' />
              </Link>
              <Text fontWeight={'500'} fontSize={'lg'} color={'white'}>
                Women in STEM
              </Text>
            </HStack>*/}
            <Stack as={'nav'} spacing={4}>
              <NavLink to="/about-us">
                Quienes somos
              </NavLink>
              <NavLink to="/vocational-test">
                Test vocacional
              </NavLink>
              <NavLink to="/learn">
                Aprendamos de STEM
              </NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

export default Navbar;