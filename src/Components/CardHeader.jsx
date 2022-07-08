import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomAlert from "./Core/CustomAlert";
import RequestSelector from "./Headings/RequestSelector";
import URLBar from "./Headings/URLBar";

export default function CardHeader({
  onMethodChange,
  onUrlChange,
  method,
  onLoad,
}) {
  const [error, setError] = useState("");

  const onError = (value) => {
    setError(value);
  };

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 3000);
  }, [error]);

  return (
    <Box>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "normal", md: "center" }}
        gap={3}
        mt={5}
      >
        <RequestSelector onChange={onMethodChange} />
        <URLBar
          onUrlChange={onUrlChange}
          onError={onError}
          method={method}
          onLoad={onLoad}
        />
      </Flex>
      <CustomAlert msg={error} type="error" />
    </Box>
  );
}
