import React from "react";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

import img_1 from "../../../assets/ServicesUx/1.png";
import chiziq_img from "../../../assets/ServicesUx/chiziq.png";
import about_img from "../../../assets/ServicesUx/ux-11.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  textAlign: "left",
  boxShadow: "none",
  borderRadius: "0px",
}));

function About() {
  return (
    <Box
      sx={{
        background: { lg: "white", md: "white", sm: "#E5E5E5", xs: "#E5E5E5" },
        pb: { lg: "64px", md: "30px", sm: "17px", xs: "0px" },
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={6}>
        <Grid item xs={12}>
          <Item
            sx={{
              display: "flex",
              alignItems: "center",
              pt: { lg: "17px", md: "17px", sm: "0px", xs: "0px" },
              pl: { lg: "33px", md: "33px", sm: "15px", xs: "7px" },
              pb: { lg: "50px", sm: "55px", xs: "20px" },
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: { lg: "50px", md: "50px", sm: "34px", xs: "7%" },
                height: { lg: "6px", md: "6px", sm: "4px", xs: "3px" },
                pr: { xs: "5px", sm: "15px", md: "25px", lg: "25px" },
                pt:{ xs: "5px", sm: "7px", md: "7px", lg: "7px" },
              }}
              image={chiziq_img}
              alt="Live from space album cover"
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: { lg: 1.2, md: 1.2, sm: 1, xs: 0.5 },
              }}
            >
              <Typography
                sx={{
                  color: "rgba(0, 0, 0, 1)",
                  fontSize: {
                    lg: "49px",
                    md: "49px",
                    sm: "31px",
                    xs: "18px",
                  },
                  fontWeight: 800,
                  lineHeight: {
                    lg: "60px",
                    md: "55px",
                    sm: "37.5px",
                    xs: "26px",
                  },
                  height: { lg: "53px", md: "50px", sm: "33px", xs: "23px" },
                }}
              >
                Our Approach to
              </Typography>
              <Typography
                sx={{
                  color: "rgba(61, 185, 255, 1)",
                  fontSize: {
                    lg: "49px",
                    md: "49px",
                    sm: "31px",
                    xs: "18px",
                  },
                  fontWeight: 800,
                  lineHeight: {
                    lg: "60px",
                    md: "55px",
                    sm: "37.5px",
                    xs: "26px",
                  },
                  height: { lg: "53px", md: "50px", sm: "33px", xs: "23px" },
                }}
              >
                UX Design
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid item lg={4} md={6} sm={6}>
          <Item>
            <CardMedia
              component="img"
              sx={{
                width: { lg: "384px", md: "400px", sm: "333px" },
                height: { lg: "427px", md: "400px", sm: "270px" },
                pl: { lg: "110px", md: "110px", sm: "60px" },
                display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
              }}
              image={about_img}
              alt="Live from space album cover"
            />
          </Item>
        </Grid>
        <Grid item lg={8} md={6} sm={6} xs={12}>
          <Item>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  color: "black",
                  fontSize: {
                    lg: "19.6px",
                    md: "19px",
                    sm: "13px",
                    xs: "13px",
                  },
                  lineHeight: "166.02%",
                  width: { lg: "730px", md: "470px", sm: "323px", xs: "82%" },
                  fontStyle: "normal",
                  fontWeight: 400,
                  pl: { lg: "39px", md: "39px", sm: "36px", xs: "10.5%" },
                }}
              >
                Our UX/UI services combine the emotional side of branding with
                the rational side of our customers’ business needs. We strive to
                establish a strong connection between end users and brand
                identity, which ultimately translates to sustainable revenue for
                our customers.
              </Typography>
              <CardMedia
                component="img"
                sx={{
                  display: {
                    lg: "flex",
                    md: "none",
                    sm: "none",
                    xs: "none",
                  },
                  width: "157px",
                  height: "144px",
                  position: "relative",
                  right: "80px",
                }}
                image={img_1}
                alt="Live from space album cover"
              />
            </Box>
            <Typography
              sx={{
                color: "black",
                fontSize: {
                  lg: "19.6px",
                  md: "19px",
                  sm: "13px",
                  xs: "13px",
                },
                lineHeight: "166.02%",
                width: { lg: "730px", md: "470px", sm: "323px", xs: "82%" },
                fontStyle: "normal",
                fontWeight: 400,
                pl: { lg: "39px", md: "39px", sm: "36px", xs: "10.5%" },
                pt: { lg: "10px", md: "20px", sm: "13px", xs: "20px" },
              }}
            >
              We employ a user-centered design (UCD) approach, which ensures
              that our customer’s usability goals are met at every step of the
              design process. We’re always thinking about what a user needs,
              what their priorities are, and how we can ensure they get the most
              use and satisfaction out of our customers’ products.
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: { lg: "19.6px", md: "19px", sm: "13px", xs: "13px" },
                lineHeight: "166.02%",
                width: { lg: "730px", md: "470px", sm: "323px", xs: "82%" },
                fontStyle: "normal",
                fontWeight: 400,
                pl: { lg: "39px", md: "39px", sm: "36px", xs: "10.5%" },
                pt: { lg: "15px",   xs: "20px" },
                display: { lg: "flex", md: "none", sm: "none", xs: "flex" },
              }}
            >
              We always think about products from the perspective of both
              designers and entrepreneurs. We employ User Centered Design,
              Design Thinking, Agile Methodologies, and Jobs to Be Done to
              create digital products that combine visuals with business aims.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Typography
              sx={{
                color: "black",
                fontSize: { lg: "19.6px", md: "19px", sm: "13px", xs: "13px" },
                lineHeight: "166.02%",
                fontStyle: "normal",
                fontWeight: 400,
                pl: { lg: "39px", md: "110px", sm: "60px", xs: "11.5%" },
                pt: {  md: "26px", sm: "14px",  },
                pr: "25px",
                display: { lg: "none", md: "flex", sm: "flex", xs: "none" },
              }}
            >
              We always think about products from the perspective of both
              designers and entrepreneurs. We employ User Centered Design,
              Design Thinking, Agile Methodologies, and Jobs to Be Done to
              create digital products that combine visuals with business aims.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <CardMedia
              component="img"
              sx={{
                width: "79%",
                height: "220px",
                pl: "10.5%",
                display: { lg: "none", md: "none", sm: "none", xs: "flex" },
              }}
              image={about_img}
              alt="Live from space album cover"
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
export default About;
