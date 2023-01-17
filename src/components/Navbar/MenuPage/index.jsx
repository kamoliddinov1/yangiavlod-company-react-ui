import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./style.css";
import {NavLink } from "react-router-dom";

export const serdata = [
  { id: 1, title: "Mobile Development", link: "/services/mobiledev" },
  { id: 2, title: "UI/UX Services", path: "/services/UxUi" },
  { id: 3, title: "Marketing Technology", path: "/services/marketing" },
  { id: 4, title: "Web Development", path: "/webdevelopmend" },
  { id: 5, title: "Content Marketing", path: "/contentmarketing" },
  { id: 6, title: "Find sponsors for your project", path: "/findforproject" },
];

const App = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropbtn">{props.title}</div>
      <div className="dropdown-content">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            m: "0px 3%",
            justifyContent: "center",
            backgroundColor: "#fff9f9",
            borderTop: "1px solid gray",
            mt: 3,
            p: 5,
          }}
        >
          <Box>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 1, md: 1 }}
            >
              {props.pagedata.map((ele, id) => (
                <Grid item xs={6} key={id}>
                  <NavLink
                    to={ele.path}
                    style={{
                      textDecoration: "none",
                      textTransform: "unset",
                      color: "black",
                      display: "flex",
                      justifyContent: "start",
                      fontWeight: "500",
                    }}
                  >
                    {ele.title}
                  </NavLink>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ float: "right" }}>
            <Box sx={{ float: "right" }}>
              <img src={props.img} alt="#" />
            </Box>
          </Box>
        </Box>
      </div>
      <div className="shadow" />
    </div>
  );
};

export default App;
