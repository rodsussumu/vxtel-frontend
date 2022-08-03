import React from 'react';
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import api from "../../api";

export default function Header({ setData }) {
  const formik = useFormik({
    initialValues: {
      origin: "",
      destination: "",
      duration: 0,
      plan: "",
    },
    onSubmit: (values) => {
      const body = {
        origin: values.origin,
        destination: values.destination,
        duration: Number(values.duration),
        plan: values.plan,
      };
      api
        .post("/tarifa", body)
        .then((resp) => {
          setData(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <Flex
      align={"center"}
      justify="center"
      bg={"blackAlpha.200"}
      h="calc(100vh - 150px)"
    >
      <Center
        w={"100%"}
        maxW={840}
        bg="white"
        top={100}
        position="absolute"
        borderRadius={5}
        p="6"
        boxShadow={"0 1px 2px #ccc"}
      >
        <form onSubmit={formik.handleSubmit}>
          <FormControl display="flex" flexDir="column" gap={4}>
            <HStack spacing={"4"}>
              <Box w={"100%"}>
                <FormLabel htmlFor="origin">DDD de origem</FormLabel>
                <Select
                  placeholder="Selecione um DDD"
                  id="origin"
                  variant="flushed"
                  onChange={formik.handleChange}
                  value={formik.values.origin}
                >
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="018">018</option>
                </Select>
              </Box>

              <Box w={"100%"}>
                <FormLabel htmlFor="destination">DDD de destino</FormLabel>
                <Select
                  placeholder="Selecione um DDD"
                  id="destination"
                  variant="flushed"
                  onChange={formik.handleChange}
                  value={formik.values.destination}
                >
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="018">018</option>
                </Select>
              </Box>

              <Box w={"100%"}>
                <FormLabel htmlFor="duration">Tempo em minutos</FormLabel>
                <NumberInput min={0} id="duration">
                  <NumberInputField
                    onChange={formik.handleChange}
                    value={Number(formik.values.duration)}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Box>

              <Box w={"100%"}>
                <FormLabel htmlFor="plan">Plano FaleMais</FormLabel>
                <Select
                  placeholder="Selecione um Plano"
                  id="plan"
                  variant="flushed"
                  value={formik.values.plan}
                  onChange={formik.handleChange}
                >
                  <option value="FaleMais 30">FaleMais 30</option>
                  <option value="FaleMais 60">FaleMais 60</option>
                  <option value="FaleMais 120">FaleMais 120</option>
                </Select>
              </Box>
            </HStack>

            <HStack spacing={"4"} justify="center">
              <Button
                w={240}
                p="6"
                type="submit"
                bg={"teal.600"}
                color="white"
                fontWeight={"bold"}
                fontSize="xl"
                mt={"2"}
                _hover={{ bg: "teal.800" }}
              >
                Enviar
              </Button>
            </HStack>
          </FormControl>
        </form>
      </Center>
    </Flex>
  );
}
