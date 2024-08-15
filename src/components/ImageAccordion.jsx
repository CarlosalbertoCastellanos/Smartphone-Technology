import React, { useState, useEffect } from "react";
import "../css/accordion.css";

export const ImageAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: "/src/assets/huawei/Huawei.jpeg", alt: "Image 1", title: "Image 1" },
    { src: "/src/assets/iphone/iphon.jpeg", alt: "Image 2", title: "Image 2" },
    { src: "/src/assets/samsumg/image.png", alt: "Image 3", title: "Image 3" },
    { src: "/src/assets/vivo/vivo2.jpg", alt: "Image 4", title: "Image 3" },
    { src: "/src/assets/Xiaomi/image.png", alt: "Image 5", title: "Image 3" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="accordion-container">
      <div
        className="accordion-slider"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="accordion-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
