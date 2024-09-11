import "./ProjectPages.css";

const Resume = () => {
  return (
    <div className="resume-page-section">
      <h1 className="page-title">Resume</h1>

      <section className="introduction">
        <b className="page-description">
          Below is my resume and certifications.
        </b>
      </section>
      <section className="project-title">
        <b className="project-title-text">Resume</b>
      </section>
      <section className="project-description">
        <b className="project-description-text"></b>
      </section>
      <iframe
        className="pdf-viewer"
        src="https://drive.google.com/file/d/1EBT4IngAgBeBjI8M-uXhep2Mm_cNpzMI/preview"
        width="100%"
        height="600px"
        title="Cox Showcase PDF"
      />
    </div>
  );
};

export default Resume;
