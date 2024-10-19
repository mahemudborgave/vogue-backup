import React, { useState, useEffect } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Set up an interval to automatically scroll every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Move to the next slide
    }, 5000); // 2000 ms = 2 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]); // Dependency array includes slides.length to reset interval if slides change

  return (
    <div className="relative overflow-hidden w-full h-full flex items-center">
      <div
        className="flex transition-transform ease-out duration-1000"
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex justify-center flex-shrink-0 items-center" // Center each image horizontally
          >
            <img
              src={slide}
              alt={`Slide ${index}`}
              className="w-full object-contain h-96"
            />
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-5 text-dark-green text-4xl">
        <button onClick={previousSlide}>
          <FaArrowCircleLeft className="opacity-80" />
        </button>
        <button onClick={nextSlide}>
          <FaArrowCircleRight className="opacity-80" />
        </button>
      </div>
    </div>
  );
}
