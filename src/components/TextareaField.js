import PropTypes from "prop-types";
import "./TextareaField.css";

const TextareaField = ({
  className = "",
  hasDescription = false,
  label = "Contact Me:",
  description = "Description",
  hasError = false,
  error = "Hint",
  hasLabel = true,
}) => {
  return (
    <div className={`textarea-field1 ${className}`}>
      {hasLabel && <b className="label1">{label}</b>}
      {hasDescription && <div className="description1">{description}</div>}
      <div className="textarea1">
        <div className="value1">
          <p className="email-jake32mcgmailcom">Phone: (678) 761-9562</p>
          <p className="email-jake32mcgmailcom">Email: jake32mc@gmail.com</p>
        </div>
        <img className="drag-icon1" alt="" src="/drag.svg" />
      </div>
      {hasError && <div className="hint1">{error}</div>}
    </div>
  );
};

TextareaField.propTypes = {
  className: PropTypes.string,
  hasDescription: PropTypes.bool,
  label: PropTypes.string,
  description: PropTypes.string,
  hasError: PropTypes.bool,
  error: PropTypes.string,
  hasLabel: PropTypes.bool,
};

export default TextareaField;
