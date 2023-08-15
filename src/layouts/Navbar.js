import {
  Box,
  Flex,
  Button,
  useColorModeValue,
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
  Link
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Link as ReactRouterLink, NavLink } from 'react-router-dom';


function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('purple.300')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton size={'md'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
          <HStack spacing={8} alignItems={'center'}>
            <Link as={ReactRouterLink} to='/'>
              <Image borderRadius='full' boxSize='50px' src='womenInStem.png' />
            </Link>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              <NavLink to="/about-us">
                Quienes somos
              </NavLink>
              <NavLink to="/vocational-test">
                Test vocacional
              </NavLink>
              <NavLink to="/learn">
                Aprendamos de STEM
              </NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Link as={ReactRouterLink} to='/login'>
              <Button variant={'outline'} colorScheme={'whiteAlpha'} size={'sm'} mr={4}>Ingresar</Button>
            </Link>
            <Link as={ReactRouterLink} to='/register'>
              <Button variant={'solid'} colorScheme='whiteAlpha' size={'sm'} mr={4}>Registrarse</Button>
            </Link>
            {/* Construir validacion cuando sesion exista */}
            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <Avatar size={'sm'} src='personaAvatar.png' />
              </MenuButton>
              <MenuList>
                <MenuItem>Perfil</MenuItem>
                <MenuItem>Perfil</MenuItem>
                <MenuDivider />
                <MenuItem>Cerrar sesion</MenuItem>
              </MenuList>
            </Menu>
            {/* Fin de menu de logeado*/}
          </Flex>
        </Flex>

        {/* Menu hamburguesa responsive */}
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
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