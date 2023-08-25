import { useState } from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Link, Image } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { Link as ReactRouterLink } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = {
    email: (value) => (!value ? "Campo requerido" : !/^\S+@\S+\.\S+$/.test(value) ? "Formato de correo inválido" : ""),
    password: (value) => (!value ? "Campo requerido" : "")
  };

  const handleSubmit = (values, actions) => {
    // COLOCAR LLAMADA AL BACKEND
    setTimeout(() => { // QUITAR TIMEOUT LUEGO
      console.log(values);
      actions.setSubmitting(false)
    }, 1000)
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
        <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"purple.300"}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Image borderRadius='full' boxSize='150px' src='WomenInStem1.png' /> {/* CAMBIAR IMAGEN LUEGO */}
              <Heading fontSize={"4xl"} textAlign={"center"} color={"white"}>
                Iniciar sesión
              </Heading>
              <Text fontSize={"lg"} color={"white"}>
                Nos alegra tenerte devuelta 💜
              </Text>
            </Stack>
            <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
              <Form>
                <Stack spacing={4}>
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
                  <Stack spacing={10} pt={2}>
                    <Button isLoading={props.isSubmitting} loadingText="Enviando" type="submit" size={"lg"} bg={"purple.300"} color={"white"} _hover={{ bg: 'purple.500' }}>
                      Enviar
                    </Button>
                  </Stack>
                  <Stack pt={6}>
                    <Text align={"center"}>
                      ¿Aún no tienes una cuenta? <Link as={ReactRouterLink} to='/register' color={"blue.400"}>Regístrate</Link>
                    </Text>
                  </Stack>
                </Stack>
              </Form>
            </Box>
          </Stack>
        </Flex>
      )}
    </Formik>
  );
}

export default Login;