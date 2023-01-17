import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TextImg from "../../assets/text1.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const WereHering = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", ml: 2, mt: 8 }}>
        <Typography
          sx={{ fontWeight: "600", fontSize: { xs: "24px", sm: "40px" } }}
        >
          -- We're
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: { xs: "24px", sm: "40px" },
            color: "#3DB9FF",
          }}
        >
          Hiring!
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          background: "#3DB9FF",
          m: "2% 5%",
          alignItems:'center',
          color:'white',
          mt: 8
        }}
      >
        <Box sx={{ width: "50%", }}>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: { xs: "16px", sm: "40px" },
              textAlign: "start",
              mt:3,
              ml:4
            }}
          >
            We're Hiring!
          </Typography>
          <Box sx={{ textAlign: "start",  mt:8, ml:4 }}>
            <Typography
              sx={{ fontWeight: "400", fontSize: { xs: "10px", md: "34px" } }}
            >
              Check out{" "}
            </Typography>
            <Typography
              sx={{ fontWeight: "400", fontSize: { xs: "10px", md: "34px" } }}
            >
              our open positions!
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems:'center', columnGap: 2,  mt:8, ml:4, mb:3 }}>
            <Typography
              sx={{ fontWeight: "400", fontSize: { xs: "11px", md: "34px" } }}
            >
              Send CV{" "}
            </Typography>
            <ArrowRightAltIcon fontSize='large' sx={{ ":hover": { color: "red" } }} />
          </Box>
        </Box>

        <Box sx={{ width: { xs:'40%', sm:'20%', md:"20%"}, ml:'auto', mr:'10%' }}>
          <img style={{width:'100%'}} src={TextImg} alt="text" />
        </Box>
      </Box>
    </Box>
  );
};

export default WereHering;
