import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import BgHome from "../../assets/bghome.png";

const WorkBanner = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ m: "1% 5%" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid
            item
            xs={12}
            sm={7}
            md={7}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <Box
              sx={{
                width: "100%",
                height: { xs: "266px", sm: "334px", md: "531px" },
              }}
            >
              <img style={{ width: "100%" }} src={BgHome} alt="homepng" />
            </Box>
          </Grid>
          <Grid item xs={11} sm={5} md={5}>
            <Box sx={{ m: { xs: "0px 15%", sm: "0px" } }}>
              <Box>
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: {
                      xs: "20px",
                      md: "35px",
                      lg: "57px",
                      textAlign: "start",
                    },
                  }}
                >
                  Digital Solutions.
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: {
                      xs: "20px",
                      sm: "30px",
                      md: "35px",
                      lg: "57px",
                      textAlign: "start",
                    },
                  }}
                >
                  Delivered.
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: "221px", sm: "250px", md: "403px", lg: "503px" },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: { xs: "15px", sm: "13px", md: "21px" },
                    textAlign: "start",
                  }}
                >
                  New Generation is a global software consultancy and
                  engineering company, which creates the transformative
                  strategies, platforms, and products our clients need to run
                  and grow their businesses.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={7}
            md={7}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <Box
              sx={{
                width: { xs: "233px", sm: "390px", md: "506px", lg: "656px" },
                height: { xs: "266px", sm: "334px", md: "531px" },
              }}
            >
              <img style={{ width: "100%" }} src={BgHome} alt="homepng" />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ background: "linear-gradient(90deg, #15FF1F 0%, #52A5FF 100%)", mt:3 }}
      >
        <Typography sx={{ fontSize: { xs: "108px", sm: "128px" }, color:'white' }}>
          Ad
        </Typography>
      </Box>
    </Box>
  );
};
export default WorkBanner;
