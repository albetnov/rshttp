import { AlertIcon } from "@chakra-ui/react";
import { AlertTitle } from "@chakra-ui/react";
import { Alert } from "@chakra-ui/react";
import React from "react";

export default function CustomAlert({ msg, type }) {
  if (msg) {
    return (
      <Alert status={type} my={3} rounded="lg">
        <AlertIcon />
        <AlertTitle>{msg}</AlertTitle>
      </Alert>
    );
  } else {
    return "";
  }
}
