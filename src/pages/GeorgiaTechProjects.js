import "./ProjectPages.css";
import Typography from "@mui/material/Typography";
const GeorgiaTechProjects = () => {
  return (
    <div className="gt-page-section">
      <div className="header-container">
        <img
          src={`${process.env.PUBLIC_URL}/GaTech.png`}
          alt="Georgia Tech"
          className="page-header-image"
        />
        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textShadow: "5px 5px 10px rgba(0, 0, 0, 0.9)",
            fontWeight: "bold",
            textAlign: "center",
          }}>
          Georgia Tech Projects
        </Typography>
      </div>

      <section className="introduction">
        <b className="page-description">
          I am currently a part-time student at Georgia Tech, set to graduate
          this May. As I prepare for graduation, I am actively seeking a
          full-time position. Below, you'll find a list of the group projects I
          have completed at Georgia Tech.
        </b>
      </section>

      <section className="project-title">
        <b className="project-title-text">Junior Design (CS 3311 & 3312)</b>
      </section>
      <section className="project-description">
        <b className="project-description-text">
          The following PDF showcases the group project that I completed for my
          Computer Science Capstone. The project won 1st place for the 2024 Fall
          Computer Science Capstone -{" "}
          <a
            href="https://tinyurl.com/GTCSWinner"
            target="_blank"
            rel="noopener noreferrer">
            Fall 2024 Expo Winners
          </a>
          .
        </b>
        <b className="project-description-text">
          The website is currently live at{" "}
          <a
            href="https://CourtScience.app"
            target="_blank"
            rel="noopener noreferrer">
            CourtScience.app
          </a>
          .
        </b>
        <b className="project-description-text">
          A demo of the project can be found at
          <a
            href="https://www.youtube.com/watch?v=DUdrdL_eDWg"
            target="_blank"
            rel="noopener noreferrer">
            {" "}
            Final Demo
          </a>
          .
        </b>
        <b className="project-description-text">
          More on the project can be found at
          <a
            href="https://tinyurl.com/linkedinCourtScience"
            target="_blank"
            rel="noopener noreferrer">
            {" "}
            Court Science LinkedIn Post
          </a>
        </b>
      </section>
      <iframe
        className="pdf-viewer"
        src="https://drive.google.com/file/d/1b9jHwj4BhfSkEYAM-1xI2vs6elkZaCdK/preview"
        width="100%"
        height="600px"
        title="ML Final Project"
      />

      <section className="project-title">
        <b className="project-title-text">Machine Learning (CS 4641)</b>
      </section>
      <section className="project-description">
        <b className="project-description-text">
          The following PDF showcases the group project that I completed for my
          machine learning class. You can find a link to the final presentation
          and the github witin the PDF.
        </b>
      </section>
      <iframe
        className="pdf-viewer"
        src="https://drive.google.com/file/d/1EL4oWPhGjRvqiowo3wxyQJmWntb-eLpO/preview"
        width="100%"
        height="600px"
        title="ML Final Project"
      />
      <section className="project-title">
        <b className="project-title-text">App Development (CS 2340)</b>
      </section>
      <section className="project-description">
        <b className="project-description-text">
          The following video demonstrates the app my team developed for CS
          2340. Although the app had a few bugs by the end, it was a valuable
          first experience working with mobile applications. You can find the
          project's code on my github at
          <a
            href="https://github.com/JakeCranor/CS2340Group37"
            target="_blank"
            rel="noopener noreferrer">
            {" "}
            Final Project Code
          </a>
          .
        </b>
      </section>
      <iframe
        className="youtube-video"
        src="https://www.youtube.com/embed/QoVjMTfapdQ"
        title="CS 2340"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
      <section className="project-title">
        <b className="project-title-text">UI/UX Design (CS 3751)</b>
      </section>
      <section className="project-description">
        <b className="project-description-text">
          The following PDF showcases the final group presentation that I
          completed for my UI/UX class. A link to the final figma can be found
          within the presentation.
        </b>
      </section>
      <iframe
        className="pdf-viewer"
        src="https://drive.google.com/file/d/1aQshK52UVCwg3Vd2hUj13D_nQ7A9PupO/preview"
        width="100%"
        height="600px"
        title="PSYC 3751 Final Project"
      />
    </div>
  );
};

export default GeorgiaTechProjects;
