import NavigationButton from "../NavigationButton/NavigationButton";
import { homeSvg, addSvg, removeSvg, userSvg } from "../svg/svg";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Link to="/overview">
        <NavigationButton svgIcon={homeSvg} />
      </Link>
      <NavigationButton svgIcon={addSvg} />
      <NavigationButton svgIcon={removeSvg} />
      <Link to="/user">
        <NavigationButton svgIcon={userSvg} />
      </Link>
    </div>
  );
};

export default Footer;
