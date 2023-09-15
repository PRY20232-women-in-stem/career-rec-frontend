import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Input,
  IconButton,
  Image,
  Heading,
} from '@chakra-ui/react';
import { BiMailSend } from 'react-icons/bi'

function Footer() {
  return (
    <>
      <Box bg={'gray.50'} color={'gray.700'}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }} spacing={6}>
            <Stack spacing={6}>
              <Box display='flex' alignItems='center'>
                <Image borderRadius='full' boxSize='35px' src='WomenInStem1.png' />
                <Text fontSize={'lg'} ml={2}>
                  Girls in STEM
                </Text>
              </Box>
              <Text fontSize={'sm'} textAlign={'left'}>
                © 2023 Bambu Consulting. All rights reserved
              </Text>
              {/*<Stack direction={'row'} spacing={6}>  // Botones de redes sociales
                <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </SocialButton>
              </Stack>*/}
            </Stack>
            <Stack align={'flex-start'}>
              <Heading fontSize={'lg'} mb={2}>
                Compañía
              </Heading>
              <Box as="a" href={'#'}>
                Quienes somos
              </Box>
              <Box as="a" href={'#'}>
                Contáctanos
              </Box>
            </Stack>
            <Stack align={'flex-start'}>
              <Heading fontSize={'lg'} mb={2}>
                Soporte
              </Heading>
              <Box as="a" href={'#'}>
                Términos de servicio
              </Box>
              <Box as="a" href={'#'}>
                Política de privacidad
              </Box>
            </Stack>
            <Stack align={'flex-start'}>
              <Heading fontSize={'lg'} mb={2}>
                Mantengase actualizado
              </Heading>
              <Stack direction={'row'}>
                <Input placeholder={'Dirección email'} variant='filled' focusBorderColor='purple.400' />
                <IconButton bg={'purple.300'} color={'white'} _hover={{ bg: 'purple.400', }} icon={<BiMailSend />} />
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <Text>Made with ❤️ in 🇵🇪</Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}

export default Footer;