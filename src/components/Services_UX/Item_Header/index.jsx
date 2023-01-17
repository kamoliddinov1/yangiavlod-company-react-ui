import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

import header_img from "../../../assets/ServicesUx/ux-bg 1.png";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  textAlign: "left",
  boxShadow: "none",
  borderRadius: "0px",
}));

function Header() {
  return (
    <Box sx={{ width: "100%", background: "#E5E5E5" }}>
      <Grid container>
        <Grid item xs={12}>
          <Item>
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                display: { lg: "none", md: "none", sm: "none", xs: "flex" },
              }}
              image={header_img}
              alt="Live from space album cover"
            />
          </Item>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Item>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 1)",
                fontSize: { lg: "57px", md: "55px", sm: "55px", xs: "45px" },
                width: { lg: "500px", md: "420px", sm: "325px", xs: "20%px" },
                height: {
                  lg: "123px",
                  md: "120px",
                  sm: "116px",
                  xs: "120px",
                },
                lineHeight: { lg: "67px", md: "60px", sm: "55px", xs: "4 8px" },
                fontWeight: 700,
                fontStyle: "normal",
                padding: {
                  lg: "210px 0px 0px 109px",
                  md: "130px 0px 0px 100px",
                  sm: "60px 0px 0px 60px",
                  xs: "29px 0px 26px 10.5%",
                },
              }}
            >
              UX Design Services
            </Typography>
          </Item>
        </Grid>
        <Grid item lg={6} md={6} sm={6}>
          <Item>
            <CardMedia
              component="img"
              sx={{
                display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
                padding: "0px",
              }}
              image={header_img}
              alt="Live from space album cover"
            />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 1)",
                fontSize: { lg: "20px", md: "20px", sm: "20px", xs: "9.8px" },
                width: { lg: "730px", md: "678px", sm: "700px", xs: "80%" },
                height: { lg: "166px", md: "166px", sm: "164px", xs: "100%" },
                fontWeight: 400,
                lineHeight: "166%",
                p: {
                  lg: "40px 50px",
                  md: "40px 50px",
                  sm: "35px 60px",
                  xs: "0px 20px 24px 5.5%",
                },
              }}
            >
              We transform businesses through effective user experience design
              for complex systems, websites, and apps. We create products and
              services for companies across the globe through in-depth research,
              proactive strategies, and accessible design. Our UI/UX design
              services are used by companies of all sizes, from startups to
              enterprises.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
