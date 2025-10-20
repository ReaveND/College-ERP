import React, { useState, useEffect } from "react";
import front from "../assets/HomeIMG/front.jpg";
import gradu from "../assets/HomeIMG/gradu.jpg";
import library from "../assets/HomeIMG/library.jpg";
import inside from "../assets/HomeIMG/inside.jpg";
import audito from "../assets/HomeIMG/audito.jpg";


const images = [front, inside, audito, library, gradu];

export default function AutoSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
  if (!images || images.length === 0) return;

  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, 3000);

  return () => clearInterval(interval);
}, [images]);


  // Manual navigation
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-screen h-170 overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{
          transform: `translateX(-${current * 100}vw)`,
          width: `${images.length * 100}vw`,
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="w-screen h-screen object-cover flex-shrink-0 rounded-none"
          />
        ))}
      </div>

    </div>
  );
}
