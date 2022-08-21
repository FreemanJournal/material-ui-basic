import { FavoriteOutlined } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React, { SyntheticEvent, useState } from "react";

export default function MuiTabs() {
  const [value, setValue] = useState<string>("1");
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider",widht:'300px' }}>
          <TabList
            aria-label="Tabs example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            centered
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              label="Tab One"
              value="1"
              icon={<FavoriteOutlined />}
              iconPosition="start"
            />
            <Tab label="Tab two" value="2" />
            <Tab label="Tab three" value="3" />
            <Tab label="Tab four" value="4" />
            <Tab label="Tab five" value="5" />
            <Tab label="Tab six" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel One</TabPanel>
        <TabPanel value="2">Panel Two</TabPanel>
        <TabPanel value="3">Panel Three</TabPanel>
        <TabPanel value="4">Panel Four</TabPanel>
        <TabPanel value="5">Panel Five</TabPanel>
        <TabPanel value="6">Panel Six</TabPanel>
      </TabContext>
    </Box>
  );
}
