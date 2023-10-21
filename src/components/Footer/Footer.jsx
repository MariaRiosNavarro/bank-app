import NavigationButton from "../NavigationButton/NavigationButton";
import { homeSvg, addSvg, removeSvg, userSvg } from "../svg/svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Footer.scss";

const Footer = ({ onClickAdd, onClickRemove, selected }) => {
  return (
    <div className="footer-wrapper">
      <Link to="/overview">
        <NavigationButton
          svgIcon={homeSvg}
          selected={selected === "overview"}
        />
      </Link>
      <NavigationButton svgIcon={addSvg} onClick={onClickAdd} />
      <NavigationButton svgIcon={removeSvg} onClick={onClickRemove} />
      <Link to="/user">
        <NavigationButton svgIcon={userSvg} selected={selected === "user"} />
      </Link>
    </div>
  );
};

export default Footer;

Footer.propTypes = {
  onClickAdd: PropTypes.func,
  onClickRemove: PropTypes.func,
  selected: PropTypes.string,
};
