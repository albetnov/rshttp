import { Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { ApiParser } from "../Utils/ApiInterface";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardResponse from "./CardResponse";
import Card from "./Core/Card";
import Topbar from "./Core/Topbar";

export default function Main() {
  const [method, setMethod] = useState("");
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");

  const changeMethod = (value) => {
    setMethod(value);
  };

  const changeUrl = async (value) => {
    try {
      setIsLoading(true);
      const result = await ApiParser(value, method, header, body);
      console.log(result);
      setResult(result);
    } catch (e) {
      console.log(e);
      setResult(e);
    } finally {
      setIsLoading(false);
    }
  };

  const changeHeader = (value) => setHeader(value);

  const changeBody = (value) => setBody(value);

  return (
    <Box>
      <Topbar />
      <Container mt={10} maxW="container.lg">
        <Card
          head={"RSHTTP"}
          content={
            <Box>
              <CardHeader
                onMethodChange={changeMethod}
                onUrlChange={changeUrl}
                method={method}
                onLoad={isLoading}
              />
              <CardBody
                onHeaderChange={changeHeader}
                onBodyChange={changeBody}
              />
              <CardResponse result={result} />
            </Box>
          }
        />
      </Container>
    </Box>
  );
}
