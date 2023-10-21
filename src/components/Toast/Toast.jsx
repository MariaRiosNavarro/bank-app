const Toast = ({ isVisible, value, onChange, onSubmit, buttonText }) => {
  return (
    <div className={isVisible ? "display-block" : "display-none"}>
      <div className="center-toast toast-add">
        <div className="toast">
          <div className="input-wrapper">
            <input type="number" value={value} onChange={onChange} />
            <button onClick={onSubmit}>{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
