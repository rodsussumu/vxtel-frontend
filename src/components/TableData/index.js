import React from 'react';
import {
  Center,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function TableData({ data }) {
  return (
    <Flex align={"center"} justify="center" bg={"blackAlpha.200"}>
      <Center
        w={"100%"}
        maxW={840}
        bg="white"
        top={80}
        position="absolute"
        borderRadius={5}
        p="6"
        boxShadow={"0 1px 2px #ccc"}
      >
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Origem</Th>
                <Th>Destino</Th>
                <Th isNumeric>Tempo</Th>
                <Th>Plano FaleMais</Th>
                <Th isNumeric>Com FaleMais</Th>
                <Th isNumeric>Sem FaleMais</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Center>{data.origin || "-"}</Center>
                </Td>
                <Td>
                  <Center>{data.destination || "-"}</Center>
                </Td>
                <Td isNumeric>
                  <Center>{data.duration || "-"}</Center>
                </Td>
                <Td>
                  <Center>{data.plan || "-"}</Center>
                </Td>
                <Td isNumeric>
                  <Center>
                    {(data.costWithPlan || 0).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    }) || "0"}
                  </Center>
                </Td>
                <Td isNumeric>
                  <Center>
                    {(data.costWithoutPlan || 0).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    }) || "0"}
                  </Center>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </Flex>
  );
}
