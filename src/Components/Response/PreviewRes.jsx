import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import ResType from "./ResType";
import PreviewRenderer from "./PreviewRenderer";
import CustomAlert from "../Core/CustomAlert";
import { AxiosError } from "axios";

export default function PreviewRes({ result }) {
  const [type, setType] = useState(
    result?.headers?.["content-type"]?.startsWith("text/html")
      ? "html"
      : "text" || ""
  );

  if (result instanceof AxiosError) {
    return <CustomAlert msg="Network Error" type="error" />;
  }

  const setTypeListener = (value) => {
    switch (value) {
      case "html":
        setType("html");
        break;
      case "text":
        setType("text");
        break;
      default:
        setType("");
        break;
    }
  };

  return (
    <Box>
      <Flex
        alignItems={{ base: "normal", md: "center" }}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
      >
        <Text>Preview:</Text>
        <ResType onChange={setTypeListener} type={type} />
      </Flex>
      <PreviewRenderer type={type} result={result} />
    </Box>
  );
}
