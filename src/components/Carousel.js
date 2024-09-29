import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Carousel.css"; // Import the CSS file

const slides = [
  {
    image: `${process.env.PUBLIC_URL}/MeCarousel.png`, // Correct interpolation
    backgroundColor: "#feca08",
    link: "/JakeCranorPages/personalprojects",
    buttonText: "Personal Projects",
  },
  {
    image: `${process.env.PUBLIC_URL}/CoxCarousel.png`,
    backgroundColor: "#005480",
    link: "/JakeCranorPages/coxprojects",
    buttonText: "Cox Projects",
  },
  {
    image: `${process.env.PUBLIC_URL}/GTCarousel.png`,
    backgroundColor: "#857437",
    link: "/JakeCranorPages/georgiatechprojects",
    buttonText: "Georgia Tech Projects",
  },
  // Add more slides as needed
];

const Carousel = () => {
  const [backgroundColor, setBackgroundColor] = React.useState(
    slides[0].backgroundColor
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setBackgroundColor(slides[next].backgroundColor);
    },
  };

  return (
    <div className="carousel-container" style={{ backgroundColor }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="carousel-overlay">
              <Link to={slide.link}>
                <button className="carousel-button">{slide.buttonText}</button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
