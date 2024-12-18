import "./ProjectPages.css";

const Resume = () => {
  return (
    <div className="resume-page-section">
      <h1 className="page-title">Resume</h1>
      <iframe
        className="pdf-viewer"
        src="https://drive.google.com/file/d/1nfX9PfkoAdy4M4eoKdEANJWj9z46i3sd/preview"
        width="100%"
        height="600px"
        title="Cox Showcase PDF"
      />
    </div>
  );
};

export default Resume;
