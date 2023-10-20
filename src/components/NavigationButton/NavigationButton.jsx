import "./NavigationButton.scss";
import PropTypes from "prop-types";

const NavigationButton = ({ svgIcon, onClick, href }) => {
  //the buttons will either act as a link or will
  //have an add or delete function,
  //so we created a link with a
  //function to use it in both cases.

  // functions

  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <div className="nav-btn-wrapper">
      <a href={href} onClick={handleClick}>
        {svgIcon}
      </a>
    </div>
  );
};

export default NavigationButton;

NavigationButton.propTypes = {
  svgIcon: PropTypes.element,
  href: PropTypes.string,
  onClick: PropTypes.func,
};
