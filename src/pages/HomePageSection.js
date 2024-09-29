import React from "react";
import "./HomePageSection.css";
import Carousel from "../components/Carousel";

const HomePageSection = () => {
  return (
    <section className="home-page-section">
      <Carousel />
      <section className="footer-section">
        <div className="textarea-field">
          <b className="label">Hello!</b>
          <div className="description">Description</div>
          <div className="textarea">
            <div className="value">
              <p className="Subtext">
                I am Jake Cranor, and this is my Personal Portfolio Website!
              </p>
              <p className="as-a-computer">
                As a Computer Science major at Georgia Tech, I am pursuing my
                passion for software engineering and developing my skills in
                Object-Oriented Programming and Software Development. My major
                has a focus in People and Intelligence and expect to graduate in
                Spring 2025. I am currently working a part-time internship at
                Cox Enterprises for Intelligent Automation where I can apply my
                knowledge, skills, and passion to real-world projects and
                challenges.
              </p>
            </div>
            <img className="drag-icon" alt="" src="/drag.svg" />
          </div>
          <div className="description">Hint</div>
        </div>
        <footer className="button-list">
          <a
            href="https://github.com/JakeCranor"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="github-icon"
              loading="lazy"
              alt="GitHub"
              src={`${process.env.PUBLIC_URL}/github.svg`}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jakecranor"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="github-icon"
              loading="lazy"
              alt="LinkedIn"
              src={`${process.env.PUBLIC_URL}/linkedin.svg`}
            />
          </a>
        </footer>
      </section>
    </section>
  );
};

export default HomePageSection;
