import { useState } from "react";
import {
  Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Box, Flex, Stack, Heading, Text, Link, Image
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Formik, Form, Field } from "formik";
import { Link as ReactRouterLink } from 'react-router-dom';
import RegisterSuccessfulAlert from "../components/RegisterSuccessfulAlert";
import { createStudent } from "../services/StudentService";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterAlert, setShowRegisterAlert] = useState(false);
  const [error, setError] = useState("");

  const validationSchema = {
    firstName: (value) => (!value ? "campo vacio" : ""),
    lastName: (value) => (!value ? "campo vacio" : ""),
    email: (value) => (!value ? "campo vacio" : !/^\S+@\S+\.\S+$/.test(value) ? "Formato de correo inválido" : ""),
    password: (value) => (!value ? "campo vacio" : "")
  };

  const handleSubmit = async (values, actions) => {
    try {
      await createStudent(values);
      handleRegisterAlertAppear();
      actions.setSubmitting(false);
    } catch (error) {
      console.error("Error al registrar estudiante", error);
      if (error.response.status === 400) {
        setError("El email ya está registrado.");
      }
    }
  };

  const handleRegisterAlertConfirm = () => {
    setShowRegisterAlert(false); // Cerrar el modal de alerta
  };

  const handleRegisterAlertAppear = () => {
    setShowRegisterAlert(true); // Abre el modal de alerta
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
          <Flex minH={"100vh"} align={"center"} justify={"center"} bg={'purple.300'}>
            <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={{ base: 5, lg: 10 }}>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 'none', md: 5 }} align={'center'}>
                <Image w={{ base: '250px', md: '350px' }} src='signupImage.jpg' />
                <Form>
                  <Stack direction={'column'} spacing={6} p={5}>
                    <Stack direction={'column'} align={"center"}>
                      <Heading fontSize={"4xl"} textAlign={"center"}>
                        Registrarse
                      </Heading>
                      <Text fontSize={"lg"}>
                        Descubre más sobre nosotras 💜
                      </Text>
                    </Stack>
                    <Stack>
                      <Field name="firstName" validate={validationSchema.firstName}>
                        {({ field, form }) => (
                          <FormControl id="firstName" isInvalid={form.errors.firstName && form.touched.firstName}>
                            <FormLabel>Nombre</FormLabel>
                            <Input {...field} type="text" />
                            <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field name="lastName" validate={validationSchema.lastName}>
                        {({ field, form }) => (
                          <FormControl id="lastName" isInvalid={form.errors.lastName && form.touched.lastName}>
                            <FormLabel> Apellido</FormLabel>
                            <Input {...field} type="text" />
                            <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
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
                      <Stack direction={'row'} spacing={10} pt={2}>
                        <Button isLoading={props.isSubmitting} loadingText="Enviando" type="submit" w={'full'} bg={"purple.300"} color={"white"} _hover={{ bg: 'purple.500' }}>
                          Enviar
                        </Button>
                      </Stack>
                      <Stack direction={'row'} pt={4} justify={'center'}>
                        <Text align={"center"}>
                          ¿Ya tienes una cuenta? <Link as={ReactRouterLink} to='/login' color={"blue.400"}>Inicia sesión</Link>
                        </Text>
                      </Stack>
                    </Stack>
                  </Stack>
                </Form>
              </Stack>
            </Box>
          </Flex>
        )}
      </Formik>
      <RegisterSuccessfulAlert isOpen={showRegisterAlert} onConfirm={handleRegisterAlertConfirm} />
    </>
  );
}

export default Register;