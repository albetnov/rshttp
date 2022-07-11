import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./Components/Main";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";

SyntaxHighlighter.registerLanguage("json", json);

function App() {
  return (
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  );
}

export default App;
