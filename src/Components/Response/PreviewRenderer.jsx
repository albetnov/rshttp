import { Textarea } from "@chakra-ui/react";
import React from "react";
import CustomAlert from "../Core/CustomAlert";

export default function PreviewRenderer({ type, result }) {
  if (type === "html") {
    return (
      <iframe
        src={result?.request.responseURL}
        title="Result"
        style={{
          border: 0,
          width: "100%",
          marginTop: 10,
          height: 450,
        }}
      ></iframe>
    );
  } else if (type === "json") {
    return (
      <Textarea mt={5} value={JSON.stringify(result?.data, null, 2)} readOnly />
    );
  } else if (type === "text") {
    return <Textarea mt={5} value={result?.data} readOnly />;
  } else {
    return (
      <CustomAlert
        msg="Please choose one of Type Data Response"
        type="warning"
      />
    );
  }
}
