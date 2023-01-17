import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const style1 = {
    fontSize: { lg: "50px", xs: "21.46", md: "31px", sm: "25px" },
    fontFamily: "Inter",
    fontWeight: "800",
    lineHeight: { lg: "60.51px", md: "37.51px", xs: "25.98px" },
    color: "#000000",
    paddingLeft: { lg: "1%", md: "1.5%", sm: "2%", xs: "2%" },
  };
  const arr = [
    {
      title: "Full Cycle Development",
      text: "We are a full-service digital marketing agency, so we can develop platforms and websites from scratch, ensuring that your website is set up correctly and it empowers your digital marketing team.",
    },
    {
      title: "Legacy Migration",
      text: "We migrate your old portals and websites to leading platforms such as Adobe Experience Cloud or WordPress to ensure that your content team can easily implement your marketing strategy.",
    },
    {
      title: "Assessments and Upgrades",
      text: "We assess your existing marketing technology solutions and guide you toward a more effective or modern approach, without having to start from scratch.",
    },
    {
      title: "Support and Maintenance",
      text: "We offer on-going support, including QA automation and DevOps, to ensure that our clients’ solutions perform optimally and meet their digital marketing goals. We also provide a number of web publishing services to bridge the gap between your content creators and customers.",
    },
  ];
  return (
    <div>
      <Box marginLeft="2%">
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
                width: { lg: "50px", xs: "12px", md: "30px", sm: "20px" },
                height: { lg: "6px", xs: "3px", md: "4.15px" },
                marginLeft: { xs: "4%", md: "3%" },
              }}
            ></Box>
            <Typography sx={style1}>
              Marketing Technology{" "}
              <span style={{ color: "#3CB6FB" }}>Services</span>
            </Typography>
          </Box>
          <Box sx={{display:'flex', justifyContent:'center'}}>
          <Typography
            sx={{
              fontSize: { lg: "20px", md: "20px", sm: "20px", xs: "9.8px" },
              fontWeight: "400",
              fontFamily: "Source Sans Pro",
              lineHeight: { lg: "33.2px", xs: "24.9px", md: "28.22px" },
              color: "#000000",
              mt:3,             
              width: { lg: "90%", md: "85%", sm: "678px", xs: "250px" },
              textAlign:'start',
              m:'3% 4%',
            }}
          >
            We use Native Development, as well as Hybrid, Cross-Platform, and
            Progressive Web App Development approaches to provide each customer
            with the following benefits.
          </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            margin: {
              lg: "4% 0% 0% -3%",
              xs: "5% 10% 0% 10%",
              md: "2% 1% 0% 1%",
              sm: "4% -1% 0% -1%",
            },
          }}
        >
          <Grid
            container
            rowGap={3}
            columnGap={3}
            sx={{ justifyContent: "center" }}
          >
            {arr.map((val, index) => (
              <Grid
                item
                lg={5}
                md={5}
                sm={5}
                xs={12}
                key={index}
                sx={{
                  width: "100%",
                  height: { lg: "250px", md: "200px", xs: "100%", sm: "180px" },
                  padding: { lg: "1.5%", xs: "3%", md: "1.5%", sm: "2%" },
                  boxShadow:
                    "rgba(0, 0, 0, 0.15) 0px 25px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      color: "white",
                      backgroundColor: "#3DB9FF",
                      width: "25px",
                      height: "25px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: "700",
                      fontFamily: "inter",
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { lg: "24.56px", md: "14.8px", xs: "14.63px" },
                      fontFamily: "Source Sans Pro",
                      lineHeight: { lg: "7px", xs: "4.17px", md: "4.22px" },
                      color: "#000000",
                      paddingLeft: "1%",
                      fontWeight: "600",
                    }}
                  >
                    {val.title}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: { lg: "20px", xs: "11.91px", md: "12.06px" },
                    fontFamily: "Source Sans Pro",
                    lineHeight: { lg: "33.2px", xs: "19.78px", md: "20.02px" },
                    fontWeight: "400",
                    color: "#000000",
                    paddingTop: "1%",
                    textAlign:'start'
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
