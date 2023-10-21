import "./Account.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useAppContext } from "../AppContext";
import AccountCard from "../components/AccountCard/AccountCard";
import { useState } from "react";
import HistoryCard from "../components/HistoryCard/HistoryCard";
import Toast from "../components/Toast/Toast";

const Account = () => {
  const { totalCardAmount, setTotalCardAmount } = useAppContext();
  const { history } = useAppContext();
  const [isAddToastVisible, setIsAddToastVisible] = useState(false);
  const [isRemoveToastVisible, setIsRemoveToastVisible] = useState(false);
  const [value, setValue] = useState(0);

  const openAddInput = () => {
    setIsAddToastVisible(true);
  };

  const openRemoveInput = () => {
    setIsRemoveToastVisible(true);
  };

  const handleSubmit = (value, isAdding) => {
    const valueAsNumber = parseFloat(value);
    if (isAdding) {
      setTotalCardAmount(totalCardAmount + valueAsNumber);
      history.push(`+${value}`);
    } else {
      setTotalCardAmount(totalCardAmount - valueAsNumber);
      history.push(`-${value}`);
    }
    setIsAddToastVisible(false);
    setIsRemoveToastVisible(false);
    setValue("");
  };

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="page-wrapper">
          <h2>Account</h2>
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
              onChange={(e) => setValue(e.target.value)}
              onSubmit={() => handleSubmit(value, true)}
              buttonText="Add"
            />
            <Toast
              isVisible={isRemoveToastVisible}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onSubmit={() => handleSubmit(value, false)}
              buttonText="Remove"
            />
          </div>
        </div>
        <Footer onClickAdd={openAddInput} onClickRemove={openRemoveInput} />
      </div>
    </>
  );
};

export default Account;
