import { Textarea } from "@chakra-ui/react";
import React from "react";
import CustomAlert from "../Core/CustomAlert";

export default function PreviewRenderer({ type, result }) {
  if (type === "html") {
    return (
      <iframe
        src={result?.request.responseURL}
        style={{ marginTop: 5, width: "100%" }}
        title="response"
      ></iframe>
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
