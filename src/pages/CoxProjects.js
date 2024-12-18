import "./ProjectPages.css";
import Typography from "@mui/material/Typography";

const CoxProjects = () => {
  return (
    <div className="Cox-page-section">
      <div className="header-container">
        <img
          src={`${process.env.PUBLIC_URL}/CoxHeader.jpg`}
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
          Cox Projects
        </Typography>
      </div>
      <section className="introduction">
        <b className="page-description">
          I'm excited to continue my journey as a part-time Intelligent
          Automation Intern at Cox Enterprises this Spring! Over the past two
          semesters (Summer 2024 and Fall 2024), I've had the amazing
          opportunity to contribute to Cox's innovative projects. On this page,
          you'll find an overview of the impactful projects I completed during
          my first semester as part of Cox's 2024 Summer Internship program.
          Can't wait to see what this Spring holds!
        </b>
      </section>

      <section className="project-title">
        <b className="project-title-text">2024 Summer Final Presentation</b>
      </section>
      <section className="project-description">
        <b className="project-description-text">
          This PDF showcases the impactful projects I completed during my summer
          internship, marking the culmination of a highly rewarding experience.
          It served as my final presentation required for all Cox interns.
        </b>
      </section>
      <iframe
        className="pdf-viewer"
        src="https://drive.google.com/file/d/1xzXeHZmKOsrJiNYxBrvdHXSJ6lNxSbHL/preview"
        width="100%"
        height="600px"
        title="Cox Showcase PDF"
      />
      <section className="project-title">
        <b className="project-title-text">IBT Interns Racecycle Project Demo</b>
      </section>
      <section className="project-description">
        <b className="project-description-text">
          The following video showcases the demo of the project developed by the
          2024 Cox IBT interns called Racecycle. This video is part of an
          hour-long presentation given to Cox employees. Racecycle is a
          recycling companion application built using Flask, React, and Python
          to determine if an uploaded image contains recyclable material. We
          utilized the Earth911 API, Google Maps API, and Microsoft Azure’s
          Computer Vision model to identify whether a material is recyclable and
          return the three closest recycling locations.
        </b>
      </section>
      <iframe
        className="youtube-video"
        src="https://www.youtube.com/embed/83VgKH_QKoc"
        title="Bootcamp 2024 Demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>

      <section className="project-title">
        <b className="project-title-text">SharePoint Summarization Project</b>
      </section>
      <section className="project-description">
        <b className="project-description-text">
          The following video is a demo of the SharePoint Summarization Project.
          A project overview can be found in the final presentation PDF above.
        </b>
      </section>
      <iframe
        className="youtube-video"
        src="https://www.youtube.com/embed/gLQEZBo9xpM"
        title="SharePoint Summarization Projects"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
      <section className="project-title">
        <b className="project-title-text">Work Items ACME Project</b>
      </section>
      <section className="project-description">
        <b className="project-description-text">
          The following video is a demo of a training project I completed to
          evaluate my skills prior to being assigned the SharePoint
          Summarization Project. This project focuses solely on UI automation,
          showcasing a bot navigating through the ACME website to complete a
          series of tasks.
        </b>
      </section>
      <iframe
        className="youtube-video"
        src="https://www.youtube.com/embed/UCyvzPvfaaI"
        title="Work Items Project"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </div>
  );
};

export default CoxProjects;
