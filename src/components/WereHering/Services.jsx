import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import MobileIcon from "../../assets/workServices/mobile.png";
import WevIcon from "../../assets/workServices/coding.png";
import UiuiIcon from "../../assets/workServices/icon3.png";
import MarketingIcon from "../../assets/workServices/marketing.png";
import FindIcon from "../../assets/workServices/findIcon.png";
import { Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const OurServices = () => {
  const data = [
    {
      id: 1,
      title: "Mobile Development",
      desc: "We provide expert business analysis, design, and development of mobile applications and provide further optimization and scale-up on demand.",
      icon: MobileIcon,
    },
    {
      id: 2,
      title: "Web Development",
      desc: "We improve the software development and delivery process by bringing together the best tools, solutions, and practices that allow organizations to automate the continuous delivery pipeline.",
      icon: WevIcon,
    },
    {
      id: 3,
      title: "UI/UX Services",
      desc: "We conduct user research, create wireframes and prototypes, and discuss navigational schemes and information  to ensure that our customers’ end products are valuable assets to their business.",
      icon: UiuiIcon,
    },
    {
      id: 4,
      title: "Marketing Technology",
      desc: "We provide the customization our clients need to add content across multiple channels, integrate their existing systems, and get their sites running perfectly for optimal user experience and authority.",
      icon: MarketingIcon,
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
         <Typography
            sx={{
              fontWeight: "600",
              fontSize: { xs: "16px", sm: "40px" },
              textAlign: "start",
              mt:"7%",
              ml:4,
            }}
          >
          -- Services
          </Typography>
      <Box sx={{m:"3% 5%"}}>
        <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 4, md: 8 }}>
          {data.map((ele, id) => (
            <Grid item xs={12} sm={6} md={6} key={id}>
              <Paper sx={{ display: "flex", height: "100%",boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                <Box sx={{ m: "4%", borderTop: "3px solid #3DB9FF" }}>
                  <img
                    style={{ marginTop: "12px" }}
                    src={ele.icon}
                    alt="icon"
                  />
                </Box>
                <Box sx={{ textAlign: "start" }}>
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: "600", mt: 5 }}
                  >
                    {ele.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {xs:'9px', sm:"15px"},
                      fontWeight: "400",
                      width: { xs: "220px", lg: "373px" },
                      mt: 2,
                    }}
                  >
                    {ele.desc}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: 2,
                      mt: 4,
                      mb: 3,
                      color: "#3DB9FF",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: { xs: "11px", md: "20px" },
                      }}
                    >
                      Learn More
                    </Typography>
                    <ArrowRightAltIcon
                      fontSize="large"
                      sx={{ ":hover": { color: "red" } }}
                    />
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Paper sx={{ display: "flex",boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
              <Box sx={{ m: "5%", borderTop: "3px solid #3DB9FF" }}>
                <img style={{ marginTop: "12px" }} src={FindIcon} alt="icon" />
              </Box>
              <Box sx={{ textAlign: "start" }}>
                <Typography sx={{ fontSize: "14px", fontWeight: "600", mt: 4 }}>
                  Find sponsors for your project
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs:'9px', sm:"15px"},
                    fontWeight: "400",
                    mt: 2,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  pharetra nulla ut mauris aliquet, ut vestibulum purus
                  vestibulumFusce ex arcu, euismod nec consequat maximus Fusce
                  ex arcu, euismod ne. Fusce pharetra nulla ut mauris aliquet,
                  ut vestibulum purus vestibulumFusce ex arcu, euismod nec
                  consequat maximus Fusce ex arcu, euismod ne.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: 2,
                    mt: 3,
                    mb: 3,
                    color: "#3DB9FF",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: { xs: "11px", md: "20px" },
                    }}
                  >
                    Learn More
                  </Typography>
                  <ArrowRightAltIcon
                    fontSize="large"
                    sx={{ ":hover": { color: "red" } }}
                  />
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default OurServices;
