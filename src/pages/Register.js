import { useState } from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, Flex, HStack, Heading, Stack, Text } from "@chakra-ui/layout";
import { Link, Image } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { Link as ReactRouterLink } from 'react-router-dom';
import RegisterAlert from "../components/RegisterAlert";
import { createStudent } from "../services/StudentService";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterAlert, setShowRegisterAlert] = useState(false);

  const validationSchema = {
    firstName: (value) => (!value ? "Campo requerido" : ""),
    lastName: (value) => (!value ? "Campo requerido" : ""),
    email: (value) => (!value ? "Campo requerido" : !/^\S+@\S+\.\S+$/.test(value) ? "Formato de correo inválido" : ""),
    password: (value) => (!value ? "Campo requerido" : "")
  };

  const handleSubmit = async (values, actions) => {
    try {
      await createStudent(values);
      handleRegisterAlertClose();
      actions.setSubmitting(false);
    } catch (error) {
      console.error("Error al registrar estudiante");
    }
  };

  const handleRegisterAlertConfirm = () => {
    setShowRegisterAlert(false); // Cerrar el modal de alerta
  };

  const handleRegisterAlertClose = () => {
    setShowRegisterAlert(true); // Cerrar el modal de alerta
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
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
                  Registrarse
                </Heading>
                <Text fontSize={"lg"} color={"white"}>
                  Descubre más sobre nosotras 💜
                </Text>
              </Stack>
              <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
                <Form>
                  <Stack spacing={4}>
                    <HStack>
                      <Box>
                        <Field name="firstName" validate={validationSchema.firstName}>
                          {({ field, form }) => (
                            <FormControl id="firstName" isInvalid={form.errors.firstName && form.touched.firstName}>
                              <FormLabel>Nombre</FormLabel>
                              <Input {...field} type="text" />
                              <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      </Box>
                      <Box>
                        <Field name="lastName" validate={validationSchema.lastName}>
                          {({ field, form }) => (
                            <FormControl id="lastName" isInvalid={form.errors.lastName && form.touched.lastName}>
                              <FormLabel> Apellido</FormLabel>
                              <Input {...field} type="text" />
                              <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      </Box>
                    </HStack>
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
                        ¿Ya tienes una cuenta? <Link as={ReactRouterLink} to='/login' color={"blue.400"}>Inicia sesión</Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Form>
              </Box>
            </Stack>
          </Flex>
        )}
      </Formik>
      <RegisterAlert isOpen={showRegisterAlert} onConfirm={handleRegisterAlertConfirm} />
    </>
  );
}

export default Register;