import NavigationButton from "../NavigationButton/NavigationButton";
import { homeSvg, addSvg, removeSvg, userSvg } from "../svg/svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Footer.scss";

const Footer = ({ handleAdd, handleRemove }) => {
  return (
    <div className="footer-wrapper">
      <Link to="/overview">
        <NavigationButton svgIcon={homeSvg} />
      </Link>
      <NavigationButton svgIcon={addSvg} onClick={handleAdd} />
      <NavigationButton svgIcon={removeSvg} onClick={handleRemove} />
      <Link to="/user">
        <NavigationButton svgIcon={userSvg} />
      </Link>
    </div>
  );
};

export default Footer;

Footer.propTypes = {
  handleAdd: PropTypes.func,
  handleRemove: PropTypes.func,
};
