import "./ProjectPages.css";
import Typography from "@mui/material/Typography";

const PersonalProjects = () => {
  return (
    <div className="personal-projects-page-section">
      <div className="header-container">
        <img
          src={`${process.env.PUBLIC_URL}/PersonalCode.jpeg`}
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
          Personal Projects
        </Typography>
      </div>
      <section className="introduction">
        <b className="page-description">
          Below are a couple of the computer science projects I have created
          that have helped me in my everyday life.
        </b>
      </section>

      <section className="project-title">
        <b className="project-title-text">SMS Bulk Messaging</b>
      </section>
      <section className="project-description">
        <b className="project-description-text">
          The video below demonstrates the SMS project I developed for my role
          as social chair in my fraternity. To improve communication with
          individual members beyond email, I created a solution that sends a
          text message to each phone number listed in a Google Sheets column.
          The system processes each number sequentially, taking approximately 30
          seconds per message.
        </b>
      </section>
      <iframe
        className="youtube-video"
        src="https://www.youtube.com/embed/pX4OyIbSY_o"
        title="SMS Bulk Project"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </div>
  );
};

export default PersonalProjects;
