import NavigationButton from "../NavigationButton/NavigationButton";
import { homeSvg, addSvg, removeSvg, userSvg } from "../svg/svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Footer.scss";

const Footer = ({
  onClickAdd,
  onClickRemove,
  selected,
  svgIconAdd,
  svgIconRemove,
}) => {
  return (
    <div className="footer-wrapper">
      <Link to="/overview">
        <NavigationButton
          svgIcon={homeSvg}
          selected={selected === "overview"}
        />
      </Link>
      <NavigationButton svgIcon={svgIconAdd} onClick={onClickAdd} />
      <NavigationButton svgIcon={svgIconRemove} onClick={onClickRemove} />
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
  svgIconAdd: PropTypes.element,
  svgIconRemove: PropTypes.element,
};
