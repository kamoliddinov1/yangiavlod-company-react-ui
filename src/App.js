import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import OurWork from "./components/OurWork";
import Footer from "./components/Footer";
import MobileDev from "./components/MobileDev";
import ServicesUx from "./components/Services_UX";
import ServicesMarketing from "./components/ServicesMarketing";
import { Navigate } from "react-router-dom";
import { IconButton, Box } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function App() {
  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  });
  return (
    <div className="App" id="scrollPage">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/ourwork" />} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/services/mobiledev" element={<MobileDev />} />
        <Route path="/services/UxUi" element={<ServicesUx />} />
        <Route path="/services/marketing" element={<ServicesMarketing />} />
      </Routes>
      {scroll && (
        <IconButton
          href="#scrollPage"
          sx={{
            backgroundColor:'white',
            color:'black',
            position: "fixed",
            top: "80%",
            left: "95%",
            transition: "0.5s",
            border:'1px solid black',
            scrollBehavior:'smooth'
          }}
          variant="contained"
        >
          <ExpandLessIcon />
        </IconButton>
      )}
      <Footer />
    </div>
  );
}

export default App;
