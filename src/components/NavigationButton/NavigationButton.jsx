import "./NavigationButton.scss";
import PropTypes from "prop-types";

const NavigationButton = ({ name, handleClick }) => {
  return (
    <>
      <div className="nav-btn-wrapper">
        <button onClick={handleClick}>{name}</button>
      </div>
    </>
  );
};

export default NavigationButton;

NavigationButton.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
};
