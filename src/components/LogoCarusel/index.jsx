import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper";
import "./style.css";

// import required modules

const data = [
  { id: 1, img: "https://assets.asaxiy.uz/brand/webp//5e15c5de44b63.webp" },
  { id: 2, img: "https://assets.asaxiy.uz/brand/webp//5e15c615d99f8.webp" },
  { id: 3, img: "https://assets.asaxiy.uz/brand/webp//5e15c63e06b95.webp" },
  { id: 4, img: "https://assets.asaxiy.uz/brand/webp//600bc3fa84df8.webp" },
  { id: 5, img: "https://assets.asaxiy.uz/brand/webp//5e15c561deadb.webp" },
  { id: 6, img: "https://assets.asaxiy.uz/brand/webp//6014ffc121fc1.webp" },
  { id: 7, img: "https://assets.asaxiy.uz/brand/webp//6064cdf0ce901.webp" },
  { id: 8, img: "https://assets.asaxiy.uz/brand/webp//5e15c4697e437.webp" },
  { id: 9, img: "https://assets.asaxiy.uz/brand/webp//5e15c51449bd0.webp" },
  { id: 10, img: "https://assets.asaxiy.uz/brand/webp//5ff6f8872a0db.webp" },
  { id: 11, img: "https://assets.asaxiy.uz/brand/webp//6103c3977d54d.webp" },
  { id: 12, img: "https://assets.asaxiy.uz/brand/webp//6014fbfea491a.webp" },
  { id: 13, img: "https://assets.asaxiy.uz/brand/webp//603481675b122.webp" },
  { id: 14, img: "https://assets.asaxiy.uz/brand/webp//605036814c07e.webp" },
  { id: 15, img: "https://assets.asaxiy.uz/brand/webp//6067393b94990.webp" },
  { id: 16, img: "https://assets.asaxiy.uz/brand/webp//6013a8b3bc61c.webp" },
  { id: 17, img: "https://assets.asaxiy.uz/brand//6309b524cec23.png" },
  { id: 18, img: "https://assets.asaxiy.uz/brand//630b04bbdadf4.jpg" },
  { id: 19, img: "https://assets.asaxiy.uz/brand//630b0f0ed1e2b.png" },
  { id: 20, img: "https://assets.asaxiy.uz/brand/webp//5e15c4ec85cf2.webp" },
];

const LogoCarusel = () => {
  return (
    <Box>
    <Box sx={{ display: "flex", ml: 2, mt: 15,}}>
    <Typography
      sx={{ fontWeight: "600", fontSize: { xs: "14px", sm: "30px", md:'35', lg:'40px' } }}
    >
      -- Companies that put their 
    </Typography>
    <Typography
      sx={{
        fontWeight: "600",
        fontSize: { xs: "14px", sm: "30px", md:'35', lg:'40px' },
        color: "#3DB9FF",
      }}
    >
      trust in us!
    </Typography>
  </Box>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        m: "50px 3%",
      }}
    >
      <Swiper
        className="mySwiper"
        slidesPerView={7}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
      >
        {data.map((ele) => (
          <SwiperSlide key={ele.id}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "60%",
                p: "10px 0px",
              }}
            >
              <img sx={{ width: "100%" }} src={ele.img} alt="logo" />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
    </Box>
  );
};

export default LogoCarusel;