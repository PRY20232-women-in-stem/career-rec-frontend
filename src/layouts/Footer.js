import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Input,
  IconButton,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { BiMailSend } from 'react-icons/bi'

function Footer() {
  return (
    <>
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box display='flex' alignItems='center'>
                <Image borderRadius='full' boxSize='35px' src='womenInStem.png' />
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
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'green.600',
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}

export default Footer;