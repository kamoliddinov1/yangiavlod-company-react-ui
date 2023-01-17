import React from "react";
import Box from "@mui/material/Box"
import Cards from "./Cards";
import Cards2 from "./Cards2";
import SerBanner from "./ServicesBanner";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
<Box sx={{width:"100%"}}>
      <SerBanner/>
        <Cards/>
        <Cards2/>
    </Box>
  );
};