import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
  Box,
} from "@chakra-ui/react";
import React from "react";
import CustomAlert from "../Core/CustomAlert";

export default function CookieList() {
  const parseCookie = () => {
    let cookie = document.cookie;
    if (cookie.includes(";")) {
      cookie = cookie.split("; ");
    }
    return cookie.map((item) => item.split("="));
  };

  return (
    <Box>
      <CustomAlert
        msg="Cookie appear here are only cookie that accessible by JavaScript (Non HttpOnly Cookie)."
        type="info"
      />
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Value</Th>
            </Tr>
          </Thead>
          <Tbody>
            {parseCookie().map((item) => (
              <Tr key={item[0] + item[1]}>
                <Td>{item[0]}</Td>
                <Td>{item[1]}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
