import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const style1 = {
    fontSize: { lg: "50px", xs: "21.46", md: "31px" },
    fontFamily: "Inter",
    fontWeight: "800",
    lineHeight: { lg: "60.51px", md: "37.51px", xs: "25.98px" },
    color: "#000000",
    paddingLeft: "1.5%",
  };
  const arr = [
    {
      title: "Localization",
      text: "Creating multisite and multi- language website versions for different regions, countries, and areas",
    },
    {
      title: "Personalization",
      text: "Creating a unique experience for each visitor based on a range of criteria",
    },
    {
      title: "Web Analytics",
      text: "Integrating solutions to track metrics that provide actionable insights on traffic sources, customer journey, and engagement",
    },
    {
      title: "Integration",
      text: "Integrating a variety of services for form management, chat solutions (including chatbot), phone number validation, and video",
    },
    {
      title: "Performance",
      text: "Making sure that the site works well under a variety of circumstances to retain customers",
    },
    {
      title: "SEO",
      text: "Helping achieve better SEO results by correctly designing and building sites",
    },
    {
      title: "Accessibility",
      text: "Developing sites that are available to customers with special needs",
    },
    {
      title: "Security",
      text: "Testing site vulnerabilities through security and penetration testing",
    },
    {
      title: "Testing Automation",
      text: "Providing solutions and approaches to quickly and automatically test complex UI",
    },
    {
      title: "Availability",
      text: "Implementing the right DevOps infrastructure combined with software to ensure minimal down time, high performance across your entire site, and all expected functionality",
    },
    {
      title: "UI/UX",
      text: "Designing and developing responsive sites that provide fast, modern, and interactive experiences, seamlessly displaying animations, graphics, videos, and other content",
    },
    {
      title: "Content Management",
      text: "Providing the capability to create, manage, and deliver your content to various devices and channels through content management systems",
    },
  ];
  return (
    <div style={{marginBottom:'3%'}}>
      <Box >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: { xs: "4%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: { lg: "center", xs: "center" },
            }}
          >
            <Box
              sx={{
                backgroundColor: "#000000",
                width: { lg: "50px", xs: "25px", md: "43.55px" },
                height: { lg: "6px", xs: "4.15px", md: "4.15px" },
              }}
            ></Box>
            <Typography sx={style1}>
              Our Areas of <span style={{ color: "#3CB6FB" }}>Expertise</span>
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { lg: "20px", xs: "15px", md: "17px" },
              fontWeight: "400",
              fontFamily: "Source Sans Pro",
              lineHeight: { lg: "33.2px", xs: "24.9px", md: "28.22px" },
              color: "#000000",
              paddingLeft: { lg: "5%", xs: "9%", md: "-3%", sm: "6%" },
              padingTop: { xs: "5%" },
              width: "80%",
            }}
          >
            For over a decade, we’ve provided the MarTech services that enable
            our customers to implement their strategies. Here are some of the
            key areas we cover:
          </Typography>
        </Box>
        <Box
          sx={{
            margin: {
              lg: "4% 0% 0% -3%",
              xs: "5% 10% 0% 10%",
              md: "0% 1% 0% 1%",
              sm: "4% -2% 0% -2%",
            },
          }}
        >
          <Grid
            container
            rowGap={4}
            columnGap={4}
            sx={{ justifyContent: "center" }}
          >
            {arr.map((val, index) => (
              <Grid
                item
                lg={2.5}
                md={2.5}
                sm={3}
                xs={12}
                key={index}
                sx={{
                  width: "100%",
                  height: {
                    lg: "168px",
                    md: "89.21px",
                    xs: "100%",
                    sm: "109.21px",
                  },
                  padding: { lg: "1.5%", xs: "3%", md: "1.5%", sm: "2%" },
                  background:
                    "linear-gradient(270deg, #EDEDED 0%, rgba(251, 246, 246, 0) 100%)",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{
                      color: "white",
                      backgroundColor: "#3DB9FF",
                      width: "62px",
                      height: "2px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: "700",
                      fontFamily: "inter",
                    }}
                  ></Box>
                  <Typography
                    sx={{
                      fontSize: {
                        lg: "16.29px",
                        md: "9.82px",
                        xs: "16.29px",
                        sm: "9px",
                      },
                      fontFamily: "Source Sans Pro",
                      lineHeight: {
                        lg: "14.72px",
                        xs: "14.72px",
                        md: "8.87px",
                      },
                      color: "#000000",
                      paddingLeft: "1%",
                      fontWeight: "600",
                      paddingTop: "4%",
                    }}
                  >
                    {val.title}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "13.51px",
                      xs: "13.51px",
                      md: "8.14px",
                      sm: "8px",
                    },
                    fontFamily: "Source Sans Pro",
                    lineHeight: {
                      lg: "22.43px",
                      xs: "22.43px",
                      md: "13.52px",
                      sm: "13px",
                    },
                    fontWeight: "400",
                    color: "#000000",
                    paddingTop: "1%",
                  }}
                >
                  {val.text}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};
