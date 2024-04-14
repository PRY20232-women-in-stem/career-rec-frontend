import { useState } from "react";
import {
  Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Box, Flex, Heading, Stack, Text, Link, Image
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Formik, Form, Field } from "formik";
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { loginUser } from "../services/AuthService";
import { jwtDecode } from "jwt-decode";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validationSchema = {
    email: (value) => (!value ? "Campo requerido" : !/^\S+@\S+\.\S+$/.test(value) ? "Formato de correo inválido" : ""),
    password: (value) => (!value ? "Campo requerido" : "")
  };

  const handleSubmit = async (values, actions) => {
    try {
      const token = await loginUser(values);
      const decodedToken = jwtDecode(token.accessToken);

      const userPayload = JSON.stringify({
        userId: decodedToken.sub,
        email: decodedToken.email,
        firstName: decodedToken.firstName,
        lastName: decodedToken.lastName,
        vocationalTestCompleted: decodedToken.vocationalTestCompleted,
        recommendedArea: decodedToken.recommendedArea
      });

      localStorage.setItem("access_token", token.accessToken);
      localStorage.setItem("current_user", userPayload);

      actions.setSubmitting(false);
      navigate('/');
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      if (error.response.status === 404) {
        setError("Email no está registrado.");
      }
      if (error.response.status === 401) {
        setError("Email o contraseña incorrecta.");
      }
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Flex minH={"100vh"} align={"center"} justify={"center"} bg={'purple.300'}>
          <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={{ base: 5, lg: 10 }}>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 'none', md: 5 }} align={'center'}>
              <Image w={{ base: '250px', md: '350px' }} src='signinImage.jpg' />
              <Form>
                <Stack direction={'column'} spacing={6} p={5}>
                  <Stack direction={'column'} align={"center"}>
                    <Heading fontSize={"4xl"} textAlign={"center"}>
                      Iniciar sesión
                    </Heading>
                    <Text fontSize={"lg"}>
                      Nos alegra tenerte devuelta 💜
                    </Text>
                  </Stack>
                  <Stack>
                    <Field name="email" validate={validationSchema.email}>
                      {({ field, form }) => (
                        <FormControl id="email" isInvalid={form.errors.email && form.touched.email}>
                          <FormLabel>Dirección email</FormLabel>
                          <Input {...field} type="text" />
                          <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="password" validate={validationSchema.password}>
                      {({ field, form }) => (
                        <FormControl id="password" isInvalid={form.errors.password && form.touched.password}>
                          <FormLabel>Contraseña</FormLabel>
                          <InputGroup>
                            <Input {...field} type={showPassword ? "text" : "password"} />
                            <InputRightElement h={"full"}>
                              <Button variant={"ghost"} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                              </Button>
                            </InputRightElement>
                          </InputGroup>
                          <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    {error && (
                      <Text color={"red.500"}>{error}</Text>
                    )}
                    <Stack spacing={10} pt={2}>
                      <Button isLoading={props.isSubmitting} loadingText="Enviando" type="submit" size={"lg"} bg={"purple.300"} color={"white"} _hover={{ bg: 'purple.500' }}>
                        Enviar
                      </Button>
                    </Stack>
                    <Stack pt={6}>
                      <Text align={"center"}>
                        ¿No tienes una cuenta? <Link as={ReactRouterLink} to='/register' color={"blue.400"}>Regístrate</Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Stack>
              </Form>
            </Stack>
          </Box>
        </Flex>
      )
      }
    </Formik >
  );
}

export default Login;