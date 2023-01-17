import { Box, Typography } from "@mui/material";
import React from "react";
import MapBg from "../../assets/mapBg.png";

const ComponyTurist = () => {
  return (
    <Box>
       <Box sx={{ display: "flex", ml: 2, mt: 10, mb:8 }}>
    <Typography
      sx={{ fontWeight: "600", fontSize: { xs: "14px", sm: "30px", md:'35', lg:'40px' } }}
    >
      -- Our Experience 
    </Typography>
    <Typography
      sx={{
        fontWeight: "600",
        fontSize: { xs: "14px", sm: "30px", md:'35', lg:'40px' },
        color: "#3DB9FF",
      }}
    >
      Runs Deep!
    </Typography>
  </Box>
      <div>
        <Box
          sx={{
            backgroundImage: `url(${MapBg})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            m: "3% 10%",
            width: { xs: "250px", sm: "600px", md: "800px", lg: "1033px" },
            height: { xs: "130px", sm: "320px", md: "500px", lg: "526" },
            // border: "1px solid red",
            mt:1
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: { xs: "2890px", sm: "2770px", md: "3080px", lg: "3040px" },
              left: { xs: "55px", sm: "135px", md: "200px", lg: "230px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "25px", md: "40px" },
                fontWeight: "700",
                color: "#3DB9FF",
              }}
            >
              25+
            </Typography>
            <Typography sx={{ fontSize: { xs: "5px", sm: "9px", md: "12px" } }}>
              Open source projects
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: { xs: "2880px", sm: "2740px", md: "3050px", lg: "3000px" },
              left: { xs: "130px", sm: "350px", md: "480px", lg: "570px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "25px", md: "40px" },
                fontWeight: "700",
                color: "#3DB9FF",
              }}
            >
              11
            </Typography>
            <Typography sx={{ fontSize: { xs: "5px", sm: "9px", md: "12px" } }}>
              Countries Across 4 Continents
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: { xs: "2890px", sm: "2770px", md: "3070px", lg: "3050px" },
              left: { xs: "195px", sm: "480px", md: "650px", lg: "780px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "25px", md: "40px" },
                fontWeight: "700",
                color: "#3DB9FF",
              }}
            >
              1998
            </Typography>
            <Typography sx={{ fontSize: { xs: "5px", sm: "9px", md: "15px" } }}>
              Established in
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: { xs: "2950px", sm: "2900px", md: "3300px", lg: "3300px" },
              left: { xs: "90px", sm: "220px", md: "290px", lg: "390px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "25px", md: "40px" },
                fontWeight: "700",
                color: "#3DB9FF",
              }}
            >
              ISO
            </Typography>
            <Typography sx={{ fontSize: { xs: "5px", sm: "9px", md: "15px" } }}>
              27001 Certified
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: { xs: "2920px", sm: "2870px", md: "3210px", lg: "3200px" },
              left: { xs: "140px", sm: "350px", md: "450px", lg: "620px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "25px", md: "40px" },
                fontWeight: "700",
                color: "#3DB9FF",
              }}
            >
              25+
            </Typography>
            <Typography sx={{ fontSize: { xs: "5px", sm: "9px", md: "15px" } }}>
              Service Accelerators
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: { xs: "2960px", sm: "2920px", md: "3300px", lg: "3300px" },
              left: { xs: "225px", sm: "550px", md: "750px", lg: "970px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "25px", md: "40px" },
                fontWeight: "700",
                color: "#3DB9FF",
              }}
            >
              200+
            </Typography>
            <Typography sx={{ fontSize: { xs: "5px", sm: "9px", md: "15px" } }}>
              Employees
            </Typography>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default ComponyTurist;
