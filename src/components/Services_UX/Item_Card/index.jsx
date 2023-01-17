import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

import chiziq_img from "../../../assets/ServicesUx/chiziq.png";
import { datas } from "../datas";
import { datas2 } from "../datas";
import { datas3 } from "../datas";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  textAlign: "left",
  boxShadow: "none",
  borderRadius: "0px",
}));

function Card() {
  return (
    <Box sx={{ width: "100%", background: "#E5E5E5" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Item
            sx={{
              display: "flex",
              alignItems: "center",
              pt: "20px",
              pl: { lg: "33px", md: "33px", sm: "15px", xs: "9px" },
              pb: { lg: "50px", sm: "40px", xs: "30px" },
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
                columnGap: { lg: 1.2, md: 1.2, sm: 1, xs: 0.7 },
              }}
            >
              <Typography
                sx={{
                  height: { lg: "53px", md: "50px", sm: "33px", xs: "23px" },
                  color: "rgba(0, 0, 0, 1)",
                  fontSize: {
                    lg: "49px",
                    md: "49px",
                    sm: "31px",
                    xs: "20px",
                  },
                  fontWeight: 800,
                  lineHeight: {
                    lg: "60px",
                    md: "55px",
                    sm: "37.5px",
                    xs: "26px",
                  },
                }}
              >
                Our
              </Typography>
              <Typography
                sx={{
                  height: { lg: "53px", md: "50px", sm: "33px", xs: "23px" },
                  color: "rgba(61, 185, 255, 1)",
                  fontSize: {
                    lg: "49px",
                    md: "49px",
                    sm: "31px",
                    xs: "20px",
                  },
                  fontWeight: 800,
                  lineHeight: {
                    lg: "60px",
                    md: "55px",
                    sm: "37.5px",
                    xs: "26px",
                  },
                }}
              >
                UX Design Services
              </Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>
      <Box
        sx={{
          padding: {
            lg: "10px 110px 100px 110px",
            md: "10px 110px 100px 110px",
            sm: "10px 70px 100px 70px",
            xs: "10px 10% 50px 10.5%",
          },
          borderBottom:{lg:"1px solid black",md:"1px solid black",sm:'0px',xs:'0px'},
        }}
      >
        <Grid
          container
          rowSpacing={6}
          columnSpacing={{ xs: 1, sm: 2, md: 3.5 }}
        >
          {datas.map((val, index) => {
            return (
              <Grid item lg={4} md={4} sm={6} xs={12} key={index}>
                <Item
                  sx={{
                    background: "white",
                    height: {
                      lg: "200px",
                      md: "300px",
                      sm: "215px",
                      xs: "100%",
                    },
                    boxShadow:
                      "3.33694px 2.66955px 58.0627px rgba(0, 0, 0, 0.25);",
                  }}
                >
                  <Box sx={{ display: "flex", padding: "14px 0px 12px 15px" }}>
                    <Typography
                      sx={{
                        width: "23px",
                        height: "23px",
                        fontSize: "20px",
                        lineHeight: "17px",
                        background: "#3DB9FF",
                        fontWeight: 700,
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: "7.64px",
                      }}
                    >
                      {val.id}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          lg: "16px",
                          md: "16px",
                          sm: "15px",
                          xs: "14px",
                        },
                        color: "black",
                        fontWeight: 600,
                      }}
                    >
                      {val.title}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      // height: "140px",
                      fontSize: "12px",
                      color: "black",
                      fontWeight: 400,
                      lineHeight: {
                        lg: "22.1px",
                        md: "22.1px",
                        sm: "22.36px",
                        xs: "20px",
                      },
                      padding: "0px 20px 10px 15px",
                    }}
                  >
                    {val.desc}
                  </Typography>
                </Item>
              </Grid>
            );
          })}

          <Grid item xs={12}>
            <Item>
              <Typography
                sx={{
                  color: "black",
                  fontSize: { lg: "20px", md: "20px", sm: "20px", xs: "12px" },
                  lineHeight: {
                    lg: "33px",
                    md: "33px",
                    sm: "33px",
                    xs: "22px",
                  },
                  fontWeight: 700,
                }}
              >
                Our designers are dedicated to making our customers’ products
                work well and look great. We help with all aspects of digital
                product design, branding, and communications.
              </Typography>
            </Item>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Item>
              <Typography
                sx={{
                  fontSize: {
                    lg: "21.64px",
                    md: "20px",
                    sm: "20px",
                    xs: "16.7px",
                  },
                  color: "black",
                  lineHeight: "11px",
                  fontWeight: 800,
                  pb: { lg: "17px", md: "17px", sm: "15px", xs: "15px" },
                  height: { lg: "17px", md: "15px", sm: "14px", xs: "14px" },
                }}
              >
                Digital Product Design
              </Typography>
              {datas2.map((val, index) => {
                return (
                  <Grid item xs={12} key={index}>
                    <Item sx={{ display: "flex", alignItems: "center" }}>
                      <CardMedia
                        component="img"
                        sx={{
                          width: {
                            lg: "6px",
                            md: "6px",
                            sm: "6px",
                            xs: "5px",
                          },
                          heigt: {
                            lg: "6px",
                            md: "6px",
                            sm: "6px",
                            xs: "5px",
                          },
                          pr: {
                            lg: "15px",
                            md: "15px",
                            sm: "15px",
                            xs: "10px",
                          },
                        }}
                        image={val.img}
                        alt="Live from space album cover"
                      />
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: {
                            lg: "20px",
                            md: "20px",
                            sm: "16px",
                            xs: "13.9px",
                          },
                          lineHeight: {
                            lg: "33px",
                            md: "33px",
                            sm: "27px",
                            xs: "27px",
                          },
                          height: {
                            lg: "33px",
                            md: "33px",
                            sm: "27px",
                            xs: "27px",
                          },
                          fontWeight: 400,
                          fontStyle: "normal",
                        }}
                      >
                        {val.desc}
                      </Typography>
                    </Item>
                  </Grid>
                );
              })}
            </Item>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Item>
              <Typography
                sx={{
                  fontSize: {
                    lg: "21.64px",
                    md: "20px",
                    sm: "20px",
                    xs: "16.7px",
                  },
                  color: "black",
                  lineHeight: "11px",
                  fontWeight: 800,
                  pb: { lg: "17px", md: "17px", sm: "15px", xs: "15px" },
                  height: { lg: "17px", md: "15px", sm: "14px", xs: "14px" },
                }}
              >
                Branding & Communication
              </Typography>
              {datas3.map((val, index) => {
                return (
                  <Grid item xs={12} key={index}>
                    <Item sx={{ display: "flex", alignItems: "center" }}>
                      <CardMedia
                        component="img"
                        sx={{
                          width: {
                            lg: "6px",
                            md: "6px",
                            sm: "6px",
                            xs: "5px",
                          },
                          heigt: {
                            lg: "6px",
                            md: "6px",
                            sm: "6px",
                            xs: "5px",
                          },
                          pr: {
                            lg: "15px",
                            md: "15px",
                            sm: "15px",
                            xs: "10px",
                          },
                        }}
                        image={val.img}
                        alt="Live from space album cover"
                      />
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: {
                            lg: "20px",
                            md: "20px",
                            sm: "16px",
                            xs: "14px",
                          },
                          lineHeight: {
                            lg: "33px",
                            md: "33px",
                            sm: "27px",
                            xs: "27px",
                          },
                          height: {
                            lg: "33px",
                            md: "33px",
                            sm: "27px",
                            xs: "27px",
                          },
                          fontWeight: 400,
                          fontStyle: "normal",
                        }}
                      >
                        {val.desc}
                      </Typography>
                    </Item>
                  </Grid>
                );
              })}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Card;
