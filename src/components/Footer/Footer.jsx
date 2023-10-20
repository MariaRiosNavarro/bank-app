import NavigationButton from "../NavigationButton/NavigationButton";
import { homeSvg, addSvg, removeSvg, userSvg } from "../svg/svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Footer.scss";

const Footer = ({ onClick }) => {
  return (
    <div className="footer-wrapper">
      <Link to="/overview">
        <NavigationButton svgIcon={homeSvg} onClick={onClick} />
      </Link>
      <NavigationButton svgIcon={addSvg} onClick={onClick} />
      <NavigationButton svgIcon={removeSvg} onClick={onClick} />
      <Link to="/user">
        <NavigationButton svgIcon={userSvg} onClick={onClick} />
      </Link>
    </div>
  );
};

export default Footer;

Footer.propTypes = {
  onClick: PropTypes.func,
};
