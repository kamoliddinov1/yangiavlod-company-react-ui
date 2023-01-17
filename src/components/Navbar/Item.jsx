import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { NavLink } from 'react-router-dom'

const Pages = (props) => {
  return (
    <div>
      <Accordion
        sx={{
          background: "none",
          boxShadow: "none",
          border: "none",
          width:'100%'
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white",}} />}
          sx={{
            background: "none",
            boxShadow: "none",
            border: "none",
            textAlign: "start",
          }}
        >
          <Typography
            sx={{
              fontWeight: "550",
              fontSize: "34px",
              lineHeight: "42px",
              color: "white",
              ml:"-15px"
            }}
          >
            {props.title}
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          {props.pagedata.map((ele, id) => (
            <Box key={id} sx={{ mt: 1 }}>
              <NavLink
                to={ele.path}
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "550",
                  fontSize: "10px",
                  display:'flex'
                }}
              >
                {ele.title}
              </NavLink>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Pages;