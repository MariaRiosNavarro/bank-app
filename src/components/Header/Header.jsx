import "./Header.scss";
import { bankSvg, pigSvg } from "../svg/svg";

const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="svg-wrapper">{bankSvg}</div>
        <h3 className="header-headline">PROPS Bank</h3>
        <div className="svg-wrapper">{pigSvg}</div>
      </div>
    </>
  );
};

export default Header;
