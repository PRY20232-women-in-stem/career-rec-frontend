import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Input,
  IconButton,
  Image,
} from '@chakra-ui/react';
import { BiMailSend } from 'react-icons/bi'

function Footer() {
  return (
    <>
      <Box bg={'gray.50'} color={'gray.700'}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }} spacing={8}>
            <Stack spacing={6}>
              <Box display='flex' alignItems='center'>
                <Image borderRadius='full' boxSize='35px' src='WomenInStem1.png' />
                <Text fontWeight={'500'} fontSize={'lg'} ml={2}>
                  Women in STEM
                </Text>
              </Box>
              <Text fontSize={'sm'} textAlign={'left'}>
                © 2022 Chakra Templates. All rights reserved
              </Text>
              <Stack direction={'row'} spacing={6}>
                {/*<SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </SocialButton>*/}
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                Compañía
              </Text>
              <Box as="a" href={'#'}>
                Quienes somos
              </Box>
              <Box as="a" href={'#'}>
                Contáctanos
              </Box>
            </Stack>
            <Stack align={'flex-start'}>
              <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                Soporte
              </Text>
              <Box as="a" href={'#'}>
                Términos de servicio
              </Box>
              <Box as="a" href={'#'}>
                Política de privacidad
              </Box>
            </Stack>
            <Stack align={'flex-start'}>
              <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                Mantengase actualizado
              </Text>
              <Stack direction={'row'}>
                <Input placeholder={'Dirección email'} variant='filled' focusBorderColor='purple.400' />
                <IconButton bg={'purple.300'} color={'white'} _hover={{ bg: 'purple.400', }} icon={<BiMailSend />} />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}

export default Footer;