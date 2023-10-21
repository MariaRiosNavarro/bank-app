import "./NavigationButton.scss";
import PropTypes from "prop-types";

const NavigationButton = ({ svgIcon, onClick, selected }) => {
  // const buttonStyle = selected ? `border: "2px solid #b98250"` : "";
  const navBtnClasses = selected
    ? "nav-btn-wrapper selected"
    : "nav-btn-wrapper";
  return (
    <div className={navBtnClasses} onClick={onClick} selected={selected}>
      {svgIcon}
    </div>
  );
};

export default NavigationButton;

NavigationButton.propTypes = {
  svgIcon: PropTypes.element,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};
