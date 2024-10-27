import React, { useState, useEffect } from "react";

function HeroSection() {
  const images = [
    "images/sample_image_1.jpg",
    "images/sample_image_2.jpg",
    "images/sample_image_3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 minutes (120000 ms)

    return () => clearInterval(interval); // Clean up the interval when component unmounts
  }, [images.length]);

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        backgroundImage: `url('${images[currentImageIndex]}')`,
        transition: "background-image 0.5s ease-in-out", // Smooth transition between images
      }}
    >
      <div className="container text-center">
        <div className="hero-content">
          <h1>Welcome to Bama Spine Care</h1>
          <p>
            Experience comprehensive care and modern treatment solutions for
            your spine health.
          </p>
          <a
            href="#services"
            className="btn btn-primary mt-4 px-2 py-1"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
