import "./ProjectPages.css";

const PersonalProjects = () => {
  return (
    <div className="personal-projects-page-section">
      <h1 className="page-title">Personal Projects</h1>
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
