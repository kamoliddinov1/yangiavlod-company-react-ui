import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

import header_img from "../../../assets/marketing.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  textAlign: "left",
  boxShadow: "none",
  borderRadius: "0px",
}));

function SerBanner() {
  return (
    <Box sx={{ width: "100%", mt: "0px" }}>
      <Grid container >
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
          <Item
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems:'center',
              height:'100%'
            }}
          >
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 1)",
                fontSize: { lg: "47px", md: "47px", sm: "38px", xs: "25px" },
                width: { lg: "600px", md: "420px", sm: "325px", xs: "250px" },
                fontWeight: 700,
                fontStyle: "normal",
                mt:2,
              }}
            >
              Marketing Technology Practice
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
        <Grid item xs={12} sx={{ mt: 7 }}>
          <Item
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "rgba(0, 0, 0, 1)",
                  fontSize: { lg: "20px", md: "20px", sm: "20px", xs: "9.8px" },
                  width: { lg: "950px", md: "678px", sm: "678px", xs: "250px" },
                  fontWeight: 400,
                }}
              >
                We transform businesses through effective user experience design
                for complex systems, websites, and apps. We create products and
                services for companies across the globe through in-depth
                research, proactive strategies, and accessible design. Our UI/UX
                design services are used by companies of all sizes, from
                startups to enterprises.
              </Typography>
              <Typography
                sx={{
                  color: "#000000",
                  fontFamily: "Source Sans Pro",
                  fontWeight: 700,
                  fontSize: {
                    lg: "20px",
                    xs: "9.82px",
                    md: "18px",
                    sm: "15px",
                  },
                  lineHeight: { lg: "33.2px", xs: "2", md: "2", sm: "25.33px" },
                  width: { lg: "950px", md: "678px", sm: "678px", xs: "250px" },
                  mt: 5,
                }}
              >
                “Adobe Experience Manager is a robust content management
                solution that can be tailored for businesses to meet their
                growth goals,”{" "}
                <span
                  style={{
                    color: "#00000",
                    fontFamily: "Source Sans Pro",
                    fontWeight: "400",
                    fontSize: { lg: "20px", xs: "9.82px", md: "18px" },
                    lineHeight: { lg: "33.2px", xs: "9.83px", md: "29.88px" },
                  }}
                >
                  said Haresh Kumar, Director of Product Marketing, Adobe
                  Experience Manager Sites.
                </span>
                “Exadel MarTech Practice helps Experience Manager customers
                fully leverage all the capabilities the application has to
                offer.”
              </Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SerBanner;
