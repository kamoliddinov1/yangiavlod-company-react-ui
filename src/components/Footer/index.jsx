import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Button, Divider, IconButton, Typography } from "@mui/material";
import { useLocation } from 'react-router-dom'

import Telegram from "../../assets/telegram.png";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import Logo from "../../assets/LogoBlue.png";

const aboutData = [
  { id: 1, title: "Overview", path: "" },
  { id: 2, title: "Partners", path: "" },
  { id: 3, title: "Leadership", path: "" },
];

const servicesData = [
  { id: 1, title: "Mobile Development", path: "" },
  { id: 2, title: "Marketing Technology", path: "" },
  { id: 3, title: "Web Development", path: "" },
];

const marData = [
  { id: 1, title: "Content Marketing", path: "" },
  { id: 2, title: "Content Marketing", path: "" },
  { id: 3, title: "Content Marketing", path: "" },
];

const tarmoqData = [
  { id: 1, icon: Telegram, link: "" },
  { id: 2, icon: Instagram, link: "" },
  { id: 3, icon: Facebook, link: "" },
  { id: 4, icon: Twitter, link: "" },
];

const Footer = () => {
  const location = useLocation()

  return (
    <Box sx={{ width: "100%", backgroundColor: location.pathname === "/ourwork" ? "white" : "" }}>
      <Divider />
      <Box sx={{ p: "3% 8%" }}>
 
            <Box
              sx={{ display: { xs:'block', sm:'block', md:"flex"}, float: {xs:'unset', md:"right"}, columnGap: 4}}
            >
              <Typography sx={{ fontSize: { xs:'20px', md:"30px"} }}>
                How can we help you?
              </Typography>
              <Button
                sx={{
                  fontWeight: "400",
                  fontSize: { xs:'15px', md:"20px"},
                  textTransform: "unset",
                  background: "#3DB9FF",
                  color: "white",
                  borderRadius: "56px",
                  width: {xs:'150px', md:"200px"},
                  height: {xs:'30px',md:"41px"},
                  ":hover": { background: "#3DB9FF" },
                }}
              >
                Contact us
              </Button>
            </Box>
        
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{display:{xs:'none', md:'flex'}}}>
          <Grid item xs={6} md={4} lg={4}>
            <Box>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "24px",
                  textAlign: "start",
                  mb: 2,
                }}
              >
                Services
              </Typography>
              {servicesData.map((ele, id) => (
                <Button
                  key={id}
                  sx={{
                    display: "block",
                    textTransform: "unset",
                    fontSize: { lg: "18px" },
                    color: "black",
                  }}
                >
                  {ele.title}
                </Button>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6} md={4} lg={4}>
            <Box sx={{ mt: 6 }}>
              {marData.map((ele, id) => (
                <Button
                  key={id}
                  sx={{
                    display: "block",
                    textTransform: "unset",
                    fontSize: { lg: "18px" },
                    color: "black",
                  }}
                >
                  {ele.title}
                </Button>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6} md={4} lg={4}>
            <Box>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "24px",
                  textAlign: "start",
                  mb: 2,
                }}
              >
                About US
              </Typography>
              {aboutData.map((ele, id) => (
                <Button
                  key={id}
                  sx={{
                    display: "block",
                    textTransform: "unset",
                    fontSize: { lg: "18px" },
                    color: "black",
                  }}
                >
                  {ele.title}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ display: "flex", alignItems: "center", mt: 4 }}
        >
          <Grid item xs={12} sm={12} md={4}>
            <Box sx={{ textAlign: { xs:'center', md:"start"}}}>
              {tarmoqData.map((ele, id) => (
                <IconButton key={id} sx={{ width: { xs: "37px", sm: "37px", md: "40px" },}}>
                  <img width="100%"  src={ele.icon} alt="tarmoqicon" />
                </IconButton>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6} sm={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography sx={{ width: {xs:'220px', md:"220px"}, fontSize: { xs:'10px', sm:"18px"} }}>
              ©Yangi Avlod Corparation 2022
            </Typography>
          </Grid>
          <Grid item xs={6} sm={12} md={4}>
            <Box
              sx={{
                width: { xs: "82px", sm: "122px", md: "147px" },
                ml:'auto',
                mr:'auto'
              }}
            >
              <img style={{ width: "100%" }} src={Logo} alt="logo" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Footer;
