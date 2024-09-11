import "./ProjectPages.css";

const GeorgiaTechProjects = () => {
  return (
    <div className="gt-page-section">
      <h1 className="page-title">Georgia Tech Projects</h1>

      <section className="introduction">
        <b className="page-description">
          I am currently a part-time student at Georgia Tech, set to graduate
          this May. As I prepare for graduation, I am actively seeking a
          full-time position. Below, you'll find a list of the group projects I
          have completed and am currently working on at Georgia Tech.
        </b>
      </section>

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
          https://github.com/JakeCranor/CS2340Group37.
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
