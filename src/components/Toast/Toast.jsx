import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import "./Toast.scss";

const Toast = ({
  isVisible,
  value,
  onChange,
  onSubmit,
  buttonText,
  message,
  alertClass,
}) => {
  const inputRef = useRef(null);

  // Wenn the input is visible we put the focus inside with this input
  useEffect(() => {
    if (isVisible && !message) {
      inputRef.current.focus();
      inputRef.current.value = "";
    }
  }, [isVisible, message]);

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && isVisible && !message) {
      onSubmit();
    }
  };

  return (
    <div className={isVisible ? "display-block" : "display-none"}>
      <div className="center-toast">
        <div className={`toast ${alertClass}`}>
          <div className="input-wrapper">
            {message ? (
              <h3>{message}</h3>
            ) : (
              <input
                type="text"
                ref={inputRef}
                value={value}
                onChange={onChange}
                step={0.01}
                // Add the posibility to add/Remove values with enter key
                onKeyDown={handleInputKeyDown}
              />
            )}
            <button className="btn" onClick={onSubmit}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Toast.propTypes = {
  isVisible: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  buttonText: PropTypes.string,
  message: PropTypes.string,
  alertClass: PropTypes.string,
};

export default Toast;
