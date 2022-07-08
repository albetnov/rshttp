import { Tabs } from "@chakra-ui/react";
import { TabList } from "@chakra-ui/react";
import { TabPanels } from "@chakra-ui/react";
import { TabPanel } from "@chakra-ui/react";
import { Tab } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";
import BodyData from "./Body/BodyData";
import HeaderOptions from "./Body/HeaderOptions";

export default function CardBody({ onHeaderChange, onBodyChange }) {
  return (
    <Box my={3}>
      <Tabs isFitted variant="soft-rounded" colorScheme="blue">
        <TabList>
          <Tab>Header (JSON)</Tab>
          <Tab>Body Data</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <HeaderOptions onChange={onHeaderChange} />
          </TabPanel>
          <TabPanel>
            <BodyData onChange={onBodyChange} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
