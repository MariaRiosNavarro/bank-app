import PropTypes from "prop-types";
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
  return (
    <div className={isVisible ? "display-block" : "display-none"}>
      <div className="center-toast">
        <div className={`toast ${alertClass}`}>
          <div className="input-wrapper">
            {message ? (
              <h3>{message}</h3>
            ) : (
              <input type="number" value={value} onChange={onChange} />
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
