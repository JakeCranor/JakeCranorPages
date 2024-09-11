import React from "react";
import "./HomePageSection.css";
import Carousel from "../components/Carousel";
import CoxProjects from "./CoxProjects";

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
              <p className="as-a-computer">
                As a Computer Science major at Georgia Tech, I am pursuing my
                passion for software engineering and developing my skills in
                Object-Oriented Programming and Software Development. I have a
                focus on People and Intelligence and expect to graduate in
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
          <img
            className="github-icon"
            loading="lazy"
            alt=""
            src="/github.svg"
          />
          <img
            className="github-icon"
            loading="lazy"
            alt=""
            src="/linkedin.svg"
          />
        </footer>
      </section>
    </section>
  );
};

export default HomePageSection;
