import NavigationButton from "../NavigationButton/NavigationButton";
import "./Footer.scss";

import { homeSvg, addSvg, removeSvg, userSvg } from "../svg/svg";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <NavigationButton href={"/overview"} svgIcon={homeSvg} />
        <NavigationButton svgIcon={addSvg} />
        <NavigationButton svgIcon={removeSvg} />
        <NavigationButton href={"/user"} svgIcon={userSvg} />
      </div>
    </>
  );
};

export default Footer;
