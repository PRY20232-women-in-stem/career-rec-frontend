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
import { EmailIcon } from '@chakra-ui/icons';
import { FaXTwitter, FaInstagram, FaYoutube, FaLinkedin, FaDiscord } from 'react-icons/fa6';

function Footer() {
  return (
    <>
      <Box bg={'gray.50'} color={'gray.700'}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }} spacing={6}>
            <Stack spacing={6}>
              <Box display='flex' alignItems='center'>
                <Image borderRadius='full' boxSize='35px' src='src/assets/WomenInStem1.png' />
                <Text fontSize={'lg'} ml={2}>
                  Girls in STEM
                </Text>
              </Box>
              <Text fontSize={'sm'} textAlign={'left'}>
                © 2023 Bambu Consulting. All rights reserved
              </Text>
              <Stack direction={'row'} spacing={3}>
                <Box as='a' fontSize={20} href='https://twitter.com/' target='_blank'>
                  <FaXTwitter />
                </Box>
                <Box as='a' fontSize={20} href='https://discord.com/' target='_blank'>
                  <FaDiscord />
                </Box>
                <Box as='a' fontSize={20} href='https://www.linkedin.com/' target='_blank'>
                  <FaLinkedin />
                </Box>
                <Box as='a' fontSize={20} href='https://www.youtube.com/' target='_blank'>
                  <FaYoutube />
                </Box>
                <Box as='a' fontSize={20} href='https://www.instagram.com/' target='_blank'>
                  <FaInstagram />
                </Box>
              </Stack>
              <Stack align={'flex-start'}>
                <Text>Made with ❤️ in 🇵🇪</Text>
              </Stack>
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
              <Box as="a" href='https://www.privacypolicies.com/live/2d7ff2cb-c9ef-4df8-8c88-c79b67d87d72' target='_blank'>
                Política de privacidad
              </Box>
            </Stack>
            <Stack align={'flex-start'}>
              <Heading fontSize={'lg'} mb={2}>
                Mantengase actualizado
              </Heading>
              <Stack direction={'row'} ml={0.5}>
                <Input placeholder={'Dirección email'} variant='filled' focusBorderColor='purple.400' />
                <IconButton bg={'purple.300'} color={'white'} _hover={{ bg: 'purple.400', }} icon={<EmailIcon />} />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}

export default Footer;