import React, { useState } from "react";
import Slider from "react-slick";
import "./Carousel.css";

const Carousel = () => {
  // Define slide data with background color and other properties
  const slides = [
    {
      image: `${process.env.PUBLIC_URL}/CoxCarousel.png`, // Correct interpolation
      backgroundColor: "#005480",
      link: "/coxprojects",
      buttonText: "Cox Projects",
    },
    {
      image: `${process.env.PUBLIC_URL}/GTCarousel.png`, // Correct interpolation
      backgroundColor: "#857437",
      link: "/georgiatechprojects",
      buttonText: "Georgia Tech Projects",
    },
    {
      image: `${process.env.PUBLIC_URL}/MeCarousel.png`, // Correct interpolation
      backgroundColor: "#feca08",
      link: "/personalprojects",
      buttonText: "Personal Projects",
    },
  ];

  // State to store the current background color
  const [backgroundColor, setBackgroundColor] = useState(
    slides[0].backgroundColor
  );

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => {
      // Update the background color when the slide changes
      setBackgroundColor(slides[current].backgroundColor);
    },
  };

  return (
    <div className="carousel-container" style={{ backgroundColor }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="carousel-overlay">
              <a href={slide.link} className="carousel-button">
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
