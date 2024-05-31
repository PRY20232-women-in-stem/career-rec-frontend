import { useState } from 'react';
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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons';
import { FaXTwitter, FaInstagram, FaYoutube, FaLinkedin, FaDiscord } from 'react-icons/fa6';
import { isDisabled } from '@testing-library/user-event/dist/cjs/utils/index.js';

function Footer() {
  const [email, setEmail] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const toast = useToast()

  const handleSubmit = () => {
    if (validateEmail(email)) {
      setIsButtonDisabled(true);
      toast({
        position: 'bottom-right',
        duration: 3000,
        render: () => (
          <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
            mt={5}
            position='relative'
            rounded='10px'
          >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
              ¡Correo registrado!
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
              Gracias por suscribirse a nuestras actualizaciones. Pronto recibirá noticias de nosotros.
            </AlertDescription>
          </Alert>
        ),
      });
    } else {
      toast({
        position: 'bottom-right',
        duration: 3000,
        render: () => (
          <Alert
            status='error'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
            mt={5}
            position='relative'
            rounded='10px'
          >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
              Error
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
              Por favor, ingrese una dirección de correo electrónico válida.
            </AlertDescription>
          </Alert>
        ),
      });
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

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
              <Stack direction={'row'} spacing={3}>
                {/*<Box as='a' fontSize={20} href='https://twitter.com/girlsinstemorg' target='_blank'>
                  <FaXTwitter />
                </Box>
                <Box as='a' fontSize={20} href='https://discord.com/invite/worldofwomen' target='_blank'>
                  <FaDiscord />
                </Box>
                <Box as='a' fontSize={20} href='https://www.linkedin.com/company/girlsinstemorg/?originalSubdomain=es' target='_blank'>
                  <FaLinkedin />
                </Box>*/}
                <Box as='a' fontSize={20} href='https://www.youtube.com/user/STEMWomen' target='_blank'>
                  <FaYoutube />
                </Box>
                <Box as='a' fontSize={20} href='https://www.instagram.com/girlsinstem_/?hl=es' target='_blank'>
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
              <Box as="a" href='https://www.canva.com/design/DAGGeyih3c8/mZl0mKMyCMXiR3nWeAqSLg/edit?utm_content=DAGGeyih3c8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'>
                Quienes somos
              </Box>
              <Box as="a" href='https://www.linkedin.com/in/johana-campos-davila/'>
                Contáctanos
              </Box>
            </Stack>
            <Stack align={'flex-start'}>
              <Heading fontSize={'lg'} mb={2}>
                Soporte
              </Heading>
              <Box as="a" href='https://docs.google.com/document/d/186knsaGKYS896iw1ZR8UFLcMI1mae9v7NJs9fbL5zzo/edit?usp=drive_link'>
                Términos de servicio
              </Box>
              <Box as="a" href='https://docs.google.com/document/d/1Owy1GlL13LXzbvrgoTs2mc7Xx3bbwtaSj77dJsp-a6g/edit?usp=sharing' target='_blank'>
                Política de privacidad
              </Box>
            </Stack>
            <Stack align={'flex-start'}>
              <Heading fontSize={'lg'} mb={2}>
                Mantengase actualizado
              </Heading>
              <Stack direction={'row'} ml={0.5}>
                <Input placeholder={'Dirección email'} variant='filled' focusBorderColor='purple.400' value={email} onChange={(e) => setEmail(e.target.value)} />
                <IconButton bg={'purple.300'} color={'white'} _hover={{ bg: 'purple.400', }} icon={<EmailIcon />}
                  disabled={isButtonDisabled}
                  onClick={handleSubmit} />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}

export default Footer;