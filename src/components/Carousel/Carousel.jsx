import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export default function Carousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 600, margin: "0 auto" }}>
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={images?.[activeIndex]}
          alt="main"
          sx={{
            width: "100%",
            height: 350,
            objectFit: "cover",
            borderRadius: "12px",
            transition: "0.3s",
          }}
        />
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 10,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "gold",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.7)",
            },
          }}
        >
          <ArrowBackIos />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 10,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "gold",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.7)",
            },
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          marginTop: 1,
          overflowX: "auto",
        }}
      >
        {images?.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img}
            onClick={() => setActiveIndex(index)}
            sx={{
              width: 80,
              height: 60,
              objectFit: "cover",
              borderRadius: "8px",
              cursor: "pointer",
              border:
                index === activeIndex
                  ? "2px solid gold"
                  : "2px solid transparent",
              opacity: index === activeIndex ? 1 : 0.6,
              transition: "0.2s",
              "&:hover": {
                opacity: 1,
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
