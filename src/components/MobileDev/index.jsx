import React from "react";
import OurApproach from "../OurApproach";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import shield from "../../assets/shield 1.png";
import analysis from "../../assets/analysis 1.png";
import appstore from "../../assets/app-store 1.png";
import penciland from "../../assets/pencil-and-ruler 1.png";
import setting from "../../assets/setting 1.png";
import Coding2 from "../../assets/coding 2.png";

import header_img from "../../assets/mobiledevelopment.png";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  ...theme.typography.body2,
  textAlign: "left",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  borderRadius: "0px",
  height: "100%",
}));
const MobileDev = () => {
  return (
    <div>
      <div>
        <Box sx={{ width: "100%" }}>
          <Grid container>
            <Grid item xs={12}>
              <Box>
                <CardMedia
                  component="img"
                  sx={{
                    width: "100%",
                    display: { lg: "none", md: "none", sm: "none", xs: "flex" },
                  }}
                  image={header_img}
                  alt="Live from space album cover"
                />
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Box>
                <Typography
                  sx={{
                    textAlign: "start",
                    color: "rgba(0, 0, 0, 1)",
                    fontSize: {
                      lg: "57px",
                      md: "47px",
                      sm: "38px",
                      xs: "30px",
                    },
                    width: {
                      lg: "500px",
                      md: "420px",
                      sm: "325px",
                      xs: "20%px",
                    },
                    height: {
                      lg: "123px",
                      md: "120px",
                      sm: "116px",
                      xs: "90px",
                    },
                    lineHeight: {
                      lg: "67px",
                      md: "60px",
                      sm: "55px",
                      xs: "4 8px",
                    },
                    fontWeight: 700,
                    fontStyle: "normal",
                    padding: {
                      lg: "210px 0px 0px 109px",
                      md: "130px 0px 0px 100px",
                      sm: "60px 0px 0px 60px",
                      xs: "29px 0px 26px 11%",
                    },
                  }}
                >
                  Enterprise Mobile Solutions
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={6}>
              <Box>
                <CardMedia
                  component="img"
                  sx={{
                    display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
                    padding: "0px",
                  }}
                  image={header_img}
                  alt="Live from space album cover"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(0, 0, 0, 1)",
                    fontSize: {
                      lg: "20px",
                      md: "20px",
                      sm: "20px",
                      xs: "9.8px",
                    },
                    width: {
                      lg: "720px",
                      md: "678px",
                      sm: "700px",
                      xs: "333px",
                    },
                    height: {
                      lg: "166px",
                      md: "166px",
                      sm: "164px",
                      xs: "95px",
                    },
                    fontWeight: 400,
                    lineHeight: "166%",
                    p: {
                      lg: "40px 50px",
                      md: "40px 50px",
                      sm: "35px 60px",
                      xs: "0px 20px 24px 40px",
                    },
                  }}
                >
                  Exadel has extensive experience designing, building, and
                  delivering native, hybrid, and cross-platform mobile
                  applications of any level and complexity. With our deep
                  expertise in mobile technologies, we provide end-to-end mobile
                  app development services from architecture & design to
                  delivery, testing, and maintenance.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div>
        <Box sx={{ display: "flex", ml: 2, mt: 8 }}>
          <Typography
            sx={{ fontWeight: "600", fontSize: { xs: "24px", sm: "40px" } }}
          >
            -- Our
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: { xs: "24px", sm: "40px" },
              color: "#3DB9FF",
            }}
          >
            Services
          </Typography>
        </Box>
        <Box sx={{ m: "3% 5%" }}>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: {
                sm: "14px",
                md: "20px",
                textAlign: "start",
              },
            }}
          >
            Exadel offers full-cycle enterprise mobile app development services
            spanning solution ideation, design, development and deployment. We
            cover:
          </Typography>
        </Box>
        <Box sx={{ m: "0px 4%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} sm={6}>
              <Paper
                sx={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    columnGap: 2,
                  }}
                >
                  <Typography
                    sx={{
                      background: "#3DB9FF",
                      p: "3px",
                      fontWeight: "bold",
                      color: "white",
                      width: "30px",
                      fontSize: "20px",
                    }}
                  >
                    1
                  </Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "20px" }}>
                    Mobile App Development
                  </Typography>
                </Box>
                <Typography sx={{ textAlign: "start", p: 3 }}>
                  For more than a decade, Exadel has successfully delivered
                  enterprise mobile solutions using hybrid, native, and
                  cross-platform mobile frameworks. Our rich history of custom
                  software development led us to evolve core mobile libraries,
                  tools, and widespread adoption of production-ready
                  architectures that reduce mobile application development time
                  while mitigating project risks.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper
                sx={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    columnGap: 2,
                  }}
                >
                  <Typography
                    sx={{
                      background: "#3DB9FF",
                      p: "3px",
                      fontWeight: "bold",
                      color: "white",
                      width: "30px",
                      fontSize: "20px",
                    }}
                  >
                    2
                  </Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "20px" }}>
                    UI/UX Design
                  </Typography>
                </Box>
                <Typography sx={{ textAlign: "start", p: 3 }}>
                  We create superior mobile user experiences and interfaces that
                  balance form and function by collaborating with stakeholders
                  and leveraging our expertise in innovative mobile app
                  development.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div>
        <Box sx={{ display: { xs: "unset", sm: "flex" }, ml: 2, mt: 8 }}>
          <Typography
            sx={{ fontWeight: "600", fontSize: { xs: "24px", sm: "40px" } }}
          >
            -- Mobile App
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: { xs: "24px", sm: "40px" },
              color: "#3DB9FF",
            }}
          >
            Development Lifecycle
          </Typography>
        </Box>
        <Box sx={{ m: "3% 5%" }}>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: {
                sm: "14px",
                md: "20px",
                textAlign: "start",
              },
            }}
          >
            We devise a process for each of our clients to ensure that our
            enterprise mobile application development services cover their
            business needs.
          </Typography>
        </Box>
        <Box sx={{ m: "0px 4%" }}>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} sm={6}>
              <Item>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 2,
                      columnGap: 2,
                    }}
                  >
                    <img src={Coding2} alt="#" />
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: { xs: "16px", sm: "20px" },
                      }}
                    >
                      Architecture
                    </Typography>
                  </Box>
                  <Typography component="li" sx={{ textAlign: "start", p: 1 }}>
                    Create robust application architecture to ensure mobile
                    application performance and maintainability
                  </Typography>
                  <Typography component="li" sx={{ textAlign: "start", p: 1 }}>
                    Architect clean integrations and horizontally scalable
                    back-end services{" "}
                  </Typography>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Item>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 2,
                      columnGap: 2,
                    }}
                  >
                    <img src={penciland} alt="#" />
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: { xs: "16px", sm: "20px" },
                      }}
                    >
                      Design
                    </Typography>
                  </Box>
                  <Typography component="li" sx={{ textAlign: "start", p: 1 }}>
                    Collaboratively design engaging UI/UX that users will
                    loveArchitect clean integrations and horizontally scalable
                    back-end services{" "}
                  </Typography>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Item>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 2,
                      columnGap: 2,
                    }}
                  >
                    <img src={setting} alt="#" />
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: { xs: "16px", sm: "20px" },
                      }}
                    >
                      Development
                    </Typography>
                  </Box>
                  <Typography component="li" sx={{ textAlign: "start", p: 1 }}>
                    Client- and server-side components for the entire ecosystem
                  </Typography>
                  <Typography component="li" sx={{ textAlign: "start", p: 1 }}>
                    Integration with internal systems, vendors’ APIs, and
                    third-party services
                  </Typography>
                  <Typography component="li" sx={{ textAlign: "start", p: 1 }}>
                    Mobile cloud computing (AWS, Azure, GCP)
                  </Typography>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Item>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 2,
                      columnGap: 2,
                    }}
                  >
                    <img src={appstore} alt="#" />
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: { xs: "16px", sm: "20px" },
                      }}
                    >
                      Production Implementation and Support
                    </Typography>
                  </Box>
                  <Typography component="li" sx={{ textAlign: "start", p: 1 }}>
                    App Store and Google Play submission
                  </Typography>
                  <Typography component="li" sx={{ textAlign: "start", p: 1 }}>
                    Continuous Integration/Continuous Deployment (CI/CD){" "}
                  </Typography>
                  <Typography component="li" sx={{ textAlign: "start", p: 1 }}>
                    Release management
                  </Typography>
                  <Typography component="li" sx={{ textAlign: "start", p: 1 }}>
                    Ongoing support and updates
                  </Typography>
                  <Typography component="li" sx={{ textAlign: "start", p: 1 }}>
                    Data Driven Horizontal Scaling (for hosted services)Release
                    management
                  </Typography>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Item>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 2,
                      columnGap: 2,
                    }}
                  >
                    <img src={analysis} alt="#" />
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: { xs: "16px", sm: "20px" },
                      }}
                    >
                      Monitoring & Analysis
                    </Typography>
                  </Box>
                  <Typography component="li" sx={{ textAlign: "start", p: 1 }}>
                    Analytics (Google, Apple, Firebase, Application Insights)
                  </Typography>
                  <Typography component="li" sx={{ textAlign: "start", p: 1 }}>
                    Application Logging (Splunk, ELK Stack, etc.)
                  </Typography>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Item>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 2,
                      columnGap: 2,
                    }}
                  >
                    <img src={shield} alt="#" />
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: { xs: "16px", sm: "20px" },
                      }}
                    >
                      Security
                    </Typography>
                  </Box>
                  <Typography component="li" sx={{ textAlign: "start", p: 1 }}>
                    Single Sign On (SSO)/OAuth 2.0/JSON Web Token (JWT)
                  </Typography>
                  <Typography component="li" sx={{ textAlign: "start", p: 1 }}>
                    Multi-Factor Authentication (MFA)
                  </Typography>
                  <Typography component="li" sx={{ textAlign: "start", p: 1 }}>
                    Role and Claims Based Authorization
                  </Typography>
                  <Typography component="li" sx={{ textAlign: "start", p: 1 }}>
                    Mobile Device Management (MDM) & Mobile Application
                    Management (MAM)
                  </Typography>
                  <Typography component="li" sx={{ textAlign: "start", p: 1 }}>
                    Encryption in Transit (TLS)
                  </Typography>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div>
        <OurApproach />
      </div>
    </div>
  );
};

export default MobileDev;
