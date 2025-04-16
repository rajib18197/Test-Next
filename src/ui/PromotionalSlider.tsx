"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Box, styled } from "@mui/material";

// Custom styled components
const SliderContainer = styled(Box)({
  width: "100%",
  position: "relative",
  overflow: "hidden",
  borderRadius: "8px",
  padding: 0,
});

const SliderTrack = styled(Box)({
  display: "flex",
  transition: "transform 0.5s ease-in-out",
});

const Slide = styled(Box)({
  minWidth: "100%",
  height: "220px",
  position: "relative",
});

const DotsContainer = styled(Box)({
  position: "absolute",
  bottom: "20px",
  right: "40px",
  display: "flex",
  gap: "8px",
});

const Dot = styled(Box)({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  cursor: "pointer",
});

// interface Slide {
//   id: string;
//   backgroundImage: string;
//   title: string;
//   subtitle: string;
//   backgroundColor?: string;
//   titleColor?: string;
//   subtitleColor?: string;
// }

// interface PromotionalSliderProps {
//   slides: Slide[];
//   autoPlay?: boolean;
//   interval?: number;
// }

const PromotionalSlider: React.FC<any> = ({
  slides,
  autoPlay = true,
  interval = 5000,
}: {
  slides: { id: string; backgroundImage: string }[];
  autoPlay?: boolean;
  interval: number;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<any>(null);

  // Auto-advance slides
  useEffect(() => {
    if (autoPlay && !isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, interval);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, interval, slides.length, isPaused]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    // Reset interval when manually changing slides
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      if (autoPlay) {
        intervalRef.current = setInterval(() => {
          setCurrentSlide((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
          );
        }, interval);
      }
    }
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <SliderContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SliderTrack
        sx={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <Slide
            key={slide.id}
            sx={{
              // background:
              //   slide.backgroundColor ||
              //   "linear-gradient(90deg, #F9A826 0%, #F8B049 100%)",
              backgroundImage: slide.backgroundImage
                ? `url(${slide.backgroundImage})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Slide>
        ))}
      </SliderTrack>

      <DotsContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            onClick={() => handleDotClick(index)}
            // Fixed: Using sx prop instead of a custom boolean prop
            sx={{
              backgroundColor: index === currentSlide ? "#5d5a6f" : "white",
              opacity: index === currentSlide ? 1 : 0.7,
            }}
          />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};

export default PromotionalSlider;
