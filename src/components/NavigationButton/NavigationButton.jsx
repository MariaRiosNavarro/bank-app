import "./NavigationButton.scss";

const NavigationButton = (props) => {
  return (
    <>
      <div className="nav-btn-wrapper">
        <button onClick={props}>{props}</button>
      </div>
    </>
  );
};

export default NavigationButton;
