import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoNav from "../../assets/Logo.png";
import { Button } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Pages from "./Item";
import CloseIcon from "@mui/icons-material/Close";
import MenuPage from './MenuPage'
import SerPageImage from '../../assets/Servicesdrop.png';
import AboutPageImage from '../../assets/Aboutdrop.png';

export const aboutdata = [
  { id: 1, title: "Overview", path: "/services/mobiledev" },
  { id: 2, title: "Leadership", path: "/services/UxUi" },
  { id: 3, title: "Partners", path: "/services/marketing" },
  { id: 4, title: "Sponsors", path: "/" },
];

export const serdata  = [
  { id: 1, title: "Mobile Development", path: "/services/mobiledev" },
  { id: 2, title: "UI/UX Services", path: "/services/UxUi" },
  { id: 3, title: "Marketing Technology", path: "/services/marketing" },
  { id: 4, title: "Web Development", path: "/services/UxUi" },
  { id: 5, title: "Content Marketing", path: "/services/mobiledev" },
  { id: 6, title: "Find sponsors for your project", path: "/services/marketing" },
];

const Navbar = () => {
  const navigate = useNavigate();
  //////////// fixed navbar color ///////////
  const [isScroll, setIsScroll] = React.useState(false)

  React.useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 200) {
        setIsScroll(true)
      }else {
        setIsScroll(false)
      }
    }
  }, [])
  ////////////////////////////////


  const navdata = [
    { id: 1, title: <MenuPage title="Services" pagedata={serdata} img={SerPageImage}/>,},
    { id: 2, title: <MenuPage title="About Us" pagedata={aboutdata} img={AboutPageImage} />, },
    { id: 3, title: "Our Work", path: "/ourwork" },
    { id: 4, title: "Carees", path: "/services/mobiledev" },
  ];

  const mobiledata = [
    { id: 1, title: "Home", path: "/" },
    {
      id: 2,
      title: <Pages pagedata={serdata} title="Services" />,
      // path: "/services",
    },
    {
      id: 3,
      title: <Pages pagedata={aboutdata} title="About Us" />,
      // path: "/aboutus",
    },
    { id: 4, title: "Our Work", path: "/ourwork" },
    { id: 5, title: "Carees", path: "/" },
  ];

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : "100%",
        background: "#3DB9FF",
        height: "200%",
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ textAlign: "start" }}>
        <IconButton
          onClick={toggleDrawer(anchor, false)}
          size="large"
          sx={{ float: "right", color: "white" }}
        >
          <CloseIcon />
        </IconButton>
        {mobiledata.map((text, id) => (
          <ListItem key={id} disablePadding>
            <ListItemButton
            component={NavLink}
            to={text.path}
              sx={{
                fontWeight: "550",
                fontSize: "34px",
                lineHeight: "42px",
                color: "white",
              }}
            >
              {text.title}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          position: { xs: "static", sm: "static", md: "fixed" },
          background: "none",
          boxShadow: "none",
          backgroundColor: isScroll ? "#828282" : "none",
        }}
      >
        <Box
          sx={{ display: "flex", alignItems:'center', justifyContent: "space-between" }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            href="/"
            sx={{
              width: { xs: "70px", sm: "134px", md: "152px" },
              height: { xs: "30px", sm: "67px", md: "76px" },
              ml: { xs:'7px', md: "10px", lg: "98px" },
            }}
          >
            <img width="100%" src={LogoNav} alt="logo" />
          </IconButton>

          <Box sx={{ display: { xs: "none", md: "flex" }, columnGap: 3 }}>
            {navdata.map((ele, id) => (
              <Button
               key={id}
               component={NavLink}
                path={ele.path}
                to={ele.path}
                sx={{
                  textTransform: "unset",
                  width:'150px',
                  color: "black",
                  fontWeight: "600",
                  lineHeight: "20px",
                  fontSize: '20px',
                  fontStyle: "normal",
                  ":active": { color: "#3DB9FF" },
                }}
              >
                {ele.title}
              </Button>
            ))}
          </Box>

          <div>
            <IconButton
              onClick={toggleDrawer("left", true)}
              size="large"
              edge="start"
              aria-label="open drawer"
              sx={{
                mr: 2,
                fontSize: "100px",
                display: { xs: "flex", md: "none" },
                color: "black",
              }}
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor="left"
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
              onOpen={toggleDrawer("left", true)}
            >
              {list("left")}
            </SwipeableDrawer>
          </div>
          <Button
            onClick={() => navigate("/contactus")}
            sx={{
              textTransform: "unset",
              float: "right",
              backgroundColor: "#3DB9FF",
              color: "white",
              width: "250px",
              lineHeight: "20px",
              fontWeight: "600",
              fontSize: "20px",
              fontStyle: "normal",
              borderTopLeftRadius: "56px",
              borderBottomLeftRadius: "56px",
              height: "45px",
              ":hover": { backgroundColor: "#3DB9FF" },
              display: { xs: "none", md: "flex" },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </AppBar>
    </Box>
  );
};
export default Navbar;
