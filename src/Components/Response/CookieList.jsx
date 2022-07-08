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
    if (!cookie) {
      return { data: null };
    }
    if (cookie.includes(";")) {
      cookie = cookie.split("; ");
    }

    if (Array.isArray(cookie)) {
      return { cookie: "multi", data: cookie.map((item) => item.split("=")) };
    }
    return { cookie: "single", data: cookie.split("=") };
  };

  const ShowCookie = () => {
    const { cookie, data } = parseCookie();
    if (data === null) {
      return (
        <Tr>
          <Td colSpan={2}>
            <CustomAlert msg="No Cookie found." type="error" />
          </Td>
        </Tr>
      );
    }

    if (cookie === "single") {
      return (
        <Tr>
          <Td>{data[0]}</Td>
          <Td>{data[1]}</Td>
        </Tr>
      );
    } else {
      return data.map((item) => (
        <Tr key={item[0] + item[1]}>
          <Td>{item[0]}</Td>
          <Td>{item[1]}</Td>
        </Tr>
      ));
    }
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
            <ShowCookie />
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
