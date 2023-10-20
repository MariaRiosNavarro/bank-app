import "./NavigationButton.scss";
import PropTypes from "prop-types";

const NavigationButton = ({ svgIcon, onClick }) => {
  return (
    <div className="nav-btn-wrapper" onClick={onClick}>
      {svgIcon}
    </div>
  );
};

export default NavigationButton;

NavigationButton.propTypes = {
  svgIcon: PropTypes.element,
  onClick: PropTypes.func,
};
