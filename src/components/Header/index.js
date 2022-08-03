import React from "react";
import { Box, Center } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box>
      <Center
        as="header"
        h={150}
        bg={"teal.500"}
        color="white"
        fontWeight={"bold"}
        fontSize="4xl"
        pb={8}
      >
        VxTel - Calculo de tarifa
      </Center>
    </Box>
  );
}
