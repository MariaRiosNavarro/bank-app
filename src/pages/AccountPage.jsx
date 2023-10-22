import "./AccountPage.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useAppContext } from "../AppContext";
import AccountCard from "../components/AccountCard/AccountCard";
import { useState } from "react";
import HistoryCard from "../components/HistoryCard/HistoryCard";
import Toast from "../components/Toast/Toast";
import { pigSvg } from "../components/svg/svg";
import { addSvg, removeSvg } from "../components/svg/svg";

const AccountPage = () => {
  const { totalCardAmount, setTotalCardAmount } = useAppContext();
  const { history } = useAppContext();
  const [isAddToastVisible, setIsAddToastVisible] = useState(false);
  const [isRemoveToastVisible, setIsRemoveToastVisible] = useState(false);
  const [value, setValue] = useState(0);
  const [isErrorToastVisible, setIsErrorToastVisible] = useState(false);

  const openAddInput = () => {
    //toggle
    setIsAddToastVisible(!isAddToastVisible);
  };

  const openRemoveInput = () => {
    //toggle
    setIsRemoveToastVisible(!isRemoveToastVisible);
  };

  const handleSubmit = (value, isAdding) => {
    // input validation
    const regex = /^[0-9.]+$/;

    if (!regex.test(value)) {
      return window.alert(
        "Please enter a valid number with up to 2 decimal places, using a period (.) as the decimal separator."
      );
    }

    // input calculation
    const valueAsNumber = parseFloat(value);

    if (isAdding) {
      const newTotal = (
        parseFloat(totalCardAmount) + parseFloat(valueAsNumber)
      ).toFixed(2);
      setTotalCardAmount(parseFloat(newTotal));
      history.push(`+${valueAsNumber.toFixed(2)}`);
    } else {
      const newTotal = (
        parseFloat(totalCardAmount) - parseFloat(valueAsNumber)
      ).toFixed(2);
      const numberNewTotal = parseFloat(newTotal);
      if (numberNewTotal < 0) {
        // Error
        return setIsErrorToastVisible(true);
      } else {
        setTotalCardAmount(numberNewTotal);
        history.push(`-${valueAsNumber.toFixed(2)}`);
      }
    }
    // remove other Toast
    setIsAddToastVisible(false);
    setIsRemoveToastVisible(false);

    setValue("");
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="page-wrapper">
          <div className="center">{pigSvg}</div>
          <div className="card-wrapper">
            <AccountCard
              name={"Credit Card"}
              cardNumber={"0123 4567 8901 23"}
              totalCardAmount={totalCardAmount}
            />
          </div>
          {history.map((input, index) => (
            <HistoryCard key={index} history={input} />
          ))}
          <div className="toast-wrapper">
            <Toast
              isVisible={isAddToastVisible}
              value={value}
              onChange={handleInputChange}
              onSubmit={() => handleSubmit(value, true)}
              buttonText="Add"
            />
            <Toast
              isVisible={isRemoveToastVisible}
              value={value}
              onChange={handleInputChange}
              onSubmit={() => handleSubmit(value, false)}
              buttonText="Remove"
            />
            <Toast
              isVisible={isErrorToastVisible}
              alertClass={isErrorToastVisible ? "alert" : ""}
              message="You cannot remove this amount, your total amount is not enough."
              onSubmit={() => setIsErrorToastVisible(false)}
              buttonText="OK"
            />
          </div>
        </div>
        <Footer
          onClickAdd={openAddInput}
          onClickRemove={openRemoveInput}
          svgIconAdd={addSvg}
          svgIconRemove={removeSvg}
        />
      </div>
    </>
  );
};

export default AccountPage;
