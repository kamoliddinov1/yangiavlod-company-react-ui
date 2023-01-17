import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import NativeImg from "../../assets/native.png";
import Mobileadvisors from "../../assets/mobile-for-advisors 1.png";
import RetailImg from "../../assets/retail-data-app 1.png";
import CfBanner from "../../assets/cf-banner 1.png";

const data = [
  { id: 1, title: "No compromise UI" },
  { id: 2, title: "Highest fidelity across devices" },
  { id: 3, title: "Best performance" },
  { id: 4, title: "Platform native features/hardware" },
  { id: 5, title: "Fewer dependencies" },
  { id: 6, title: "Easier store approval" },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  textAlign: "left",
  boxShadow: "none",
  borderRadius: "0px",
}));

const OurApproach = () => {
  return (
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
          Approach
        </Typography>
      </Box>
      <Box sx={{ m: "3% 4%" }}>
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
          We use Native Development, as well as Hybrid, Cross-Platform, and
          Progressive Web App Development approaches to provide each customer
          with the following benefits.
        </Typography>
      </Box>

   <Box sx={{display:'flex',justifyContent:{xs:'center' ,sm:'center', md:'start'}, padding:'2% 0px' }}>
        <Paper
          sx={{
            width:'90%',
            boxShadow: {xs:'none', sm:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"},
            background:{xs:'none', sm:'white'}
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 0, md: 0 }}
          >
            <Grid item xs={12} sm={12}>
              <Typography
                sx={{
                  textAlign: "start",
                  fontSize: { sm: "30px", md: "33px" },
                  fontWeight: "600",
                  ml: "8%",
                }}
              >
                Native Mobile App Development
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{display:{xs:'none', sm:'flex'}}}>
              <Box sx={{width:{xs:'100%', sm:'80%'}, ml:{sm:6}}}>
                <img width="100%" src={NativeImg} alt="#" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{}}>
              {data.map((ele, id) => (
                <Typography
                key={id}
                  component="li"
                  sx={{ textAlign: "start", mb: 1, fontSize: {sm:'12px', md:"20px"},  ml:{xs:2, sm:''} }}
                >
                  {ele.title}
                </Typography>
              ))}
              <Typography sx={{ textAlign: "start", mt: 1, fontSize: {sm:'12px', md:"20px"}, ml:{xs:2, sm:''} }}>
                Native application development provides a significant number of
                benefits over other approaches.
              </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} sx={{display:{xs:'flex', sm:'none'}}}>
              <Box sx={{width:{xs:'100%', sm:'80%'}, ml:{sm:6}}}>
                <img width="100%" src={NativeImg} alt="#" />
              </Box>
            </Grid>
          </Grid>
        </Paper>
        </Box>

      <Box sx={{display:'flex',justifyContent:{xs:'center' ,sm:'center', md:'end'}, padding:'2% 0px' }}>
        <Paper
          sx={{
            width:'90%',
            boxShadow: {xs:'none', sm:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"},
            background:{xs:'none', sm:'white'}
          }}
        >
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} sm={12}>
              <Typography
                sx={{
                  textAlign: "start",
                  fontSize: { sm: "30px", md: "33px" },
                  fontWeight: "600",
                  ml: "3%",
                }}
              >
                Native Mobile App Development
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Box sx={{}}>
              {data.map((ele, id) => (
                <Typography
                  key={id}
                  component="li"
                  sx={{ textAlign: "start", mb: 1, fontSize: {sm:'12px', md:"20px"}, ml: 2 }}
                >
                  {ele.title}
                </Typography>
              ))}
              <Typography
                sx={{ textAlign: "start", mt: 1, fontSize: {sm:'12px', md:"20px"}, ml: 2 }}
              >
                Native application development provides a significant number of
                benefits over other approaches.
              </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{width:{xs:'100%', sm:'80%'}}}>
                <img width="100%" src={NativeImg} alt="#" />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <div>
        <Box sx={{ display: "flex", ml: 2, mt: 1, columnGap: 1, }}>
          <Typography
            sx={{ fontWeight: "600", fontSize: { xs: "24px", sm: "40px" }, display:'block' }}
          >
            -- Clients
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: { xs: "24px", sm: "40px" },
              color: "#3DB9FF",
            }}
          >
            Solutions
          </Typography>
        </Box>
        <Box sx={{ m: "20px 6%" }}>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} sm={12} md={7}>
              <Box
                sx={{
                  display: {xs:'', sm:"flex"},
                  columnGap: 4,
                  background: "white",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box sx={{  width:{ xs:'100%', sm:"70%"}, height: {sm:"100%" } }}>
                  <img
                    width="100%"
                    height="100%"
                    src={Mobileadvisors}
                    alt="#"
                  />
                </Box>
                <Box sx={{ background: "white" }}>
                  <Typography
                    sx={{
                      p: 1,
                      fontSize: "30px",
                      fontWeight: "600",
                      textAlign: "start",
                    }}
                  >
                    Avlod CASH
                  </Typography>
                  <Typography sx={{ textAlign: "start", p: 1,}}>
                    A solution for financial advisors that allows them to access
                    customer-related quickly and securely.
                  </Typography>
                  <Typography
                    sx={{
                      p: 2,
                      fontSize: "20px",
                      fontWeight: "600",
                      textAlign: "start",
                      color: "#3DB9FF",
                    }}
                  >
                    Learn More
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item  xs={12} sm={6} md={5}>
              <Box
                sx={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  height: "100%",
                }}
              >
                <Box sx={{ background: "white" }}>
                  <Typography
                    sx={{
                      fontSize: "30px",
                      fontWeight: "600",
                      textAlign: "start",
                      p: 1,
                    }}
                  >
                    A Mobile Workforce Management App
                  </Typography>
                </Box>
                <Box sx={{ background: "#3DB9FF" }}>
                  <Typography
                    sx={{
                      textAlign: "start",
                      width: "80%",
                      p: 1,
                      color: "white",
                    }}
                  >
                    Updating an employee scheduling app to support multiple
                    browsers and ensure a modern UI/UX design.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                      textAlign: "start",
                      color: "white",
                      p: 2,
                    }}
                  >
                    Learn More
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={5}>
              <Box
                sx={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  height: "100%",
                }}
              >
                <Box sx={{ background: "white" }}>
                  <Typography
                    sx={{
                      fontSize: "30px",
                      fontWeight: "600",
                      textAlign: "start",
                      p: 1,
                    }}
                  >
                    Retail Data Update Collection App
                  </Typography>
                </Box>
                <Box sx={{ background: "#3DB9FF" }}>
                  <Typography
                    sx={{
                      textAlign: "start",
                      width: "80%",
                      p: 1,
                      color: "white",
                    }}
                  >
                    Updating an employee scheduling app to support multiple
                    browsers and ensure a modern UI/UX design.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                      textAlign: "start",
                      color: "white",
                      p: 2,
                    }}
                  >
                    Learn More
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={7}>
              <Box
                sx={{
                  display: {xs:'', sm:"flex"},
                  columnGap: 4,
                  background: "white",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box sx={{ width:{ xs:'100%', sm:"70%"}, height: {sm:"100%" }}}>
                  <img width="100%" height="100%" src={RetailImg} alt="#" />
                </Box>
                <Box sx={{ background: "white" }}>
                  <Typography
                    sx={{
                      p: 1,
                      fontSize: "30px",
                      fontWeight: "600",
                      textAlign: "start",
                    }}
                  >
                    Avlod CASH
                  </Typography>
                  <Typography sx={{ textAlign: "start", p: 1, width: "80%" }}>
                    A solution for financial advisors that allows them to access
                    customer-related quickly and securely.
                  </Typography>
                  <Typography
                    sx={{
                      p: 2,
                      fontSize: "20px",
                      fontWeight: "600",
                      textAlign: "start",
                      color: "#3DB9FF",
                    }}
                  >
                    Learn More
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div>
        <Box sx={{ mt: "7%", mb: "3%", width:'100%' }}>
          <img width='100%' src={CfBanner} alt="#" />
        </Box>
      </div>
    </div>
  );
};

export default OurApproach;
