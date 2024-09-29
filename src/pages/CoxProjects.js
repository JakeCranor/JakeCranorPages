import "./ProjectPages.css";

const CoxProjects = () => {
  return (
    <div className="Cox-page-section">
      <h1 className="page-title">Cox Projects</h1>

      <section className="introduction">
        <b className="page-description">
          I am currently working part-time as an Intelligent Automation Engineer
          at Cox Enterprises for the fall semester. Below are the projects I
          completed during my 2024 Summer Internship.
        </b>
      </section>

      <section className="project-title">
        <b className="project-title-text">Cox Final Presentation</b>
      </section>
      <section className="project-description">
        <b className="project-description-text">
          The following PDF showcases the key projects I completed during my
          summer internship. It was the final presentation required for all Cox
          interns.
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
        <b className="project-title-text">SharePoint Summarization Project</b>
      </section>
      <section className="project-description">
        <b className="project-description-text">
          The following video is a demo of the SharePoint Summarization Project.
        </b>
      </section>
      <iframe
        className="youtube-video"
        src="https://www.youtube.com/embed/gLQEZBo9xpM"
        title="SharePoint Summarization Projects"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
      <section className="project-title">
        <b className="project-title-text">IBT Interns Racecycle Project Demo</b>
      </section>
      <section className="project-description">
        <b className="project-description-text">
          The following video is the demo of the Project created by the 2024 Cox
          IBT interns. The video is part of an hour-long presentation given to
          Cox employees.
        </b>
      </section>
      <iframe
        className="youtube-video"
        src="https://www.youtube.com/embed/83VgKH_QKoc"
        title="Bootcamp 2024 Demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>

      <section className="project-title">
        <b className="project-title-text">Work Items ACME Project</b>
      </section>
      <section className="project-description">
        <b className="project-description-text">
          The following video is a demo of a training project I completed to
          assess my skills before being assigned the SharePoint Summarization
          Project.
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
