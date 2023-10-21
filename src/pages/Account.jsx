import "./Account.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useAppContext } from "../AppContext";
import AccountCard from "../components/AccountCard/AccountCard";
import { useState } from "react";
import HistoryCard from "../components/HistoryCard/HistoryCard";

const Account = () => {
  const { totalCardAmount, setTotalCardAmount } = useAppContext();
  const [isAddToastVisible, setIsAddToastVisible] = useState(false);
  const [isRemoveToastVisible, setIsRemoveToastVisible] = useState(false);
  const [value, setValue] = useState(0);
  const [history, setHistory] = useState([]);

  const openAddInput = () => {
    setIsAddToastVisible(true);
  };

  const openRemoveInput = () => {
    setIsRemoveToastVisible(true);
  };

  const addValue = () => {
    const valueAsNumber = parseFloat(value);
    setTotalCardAmount(totalCardAmount + valueAsNumber);
    setIsAddToastVisible(false);
    history.push(`+${value}`);
    setValue("");
    console.log(history);
  };

  const removeValue = () => {
    const valueAsNumber = parseFloat(value);
    setTotalCardAmount(totalCardAmount - valueAsNumber);
    setIsRemoveToastVisible(false);
    history.push(`-${value}`);
    setValue("");
    console.log(history);
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
            <div
              className={isAddToastVisible ? "display-block" : "display-none"}
            >
              <div className="center-toast toast-add">
                <div className="toast">
                  <div className="input-wrapper">
                    <input
                      type="number"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <button onClick={addValue}>Add</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                isRemoveToastVisible ? "display-block" : "display-none"
              }
            >
              <div className="center-toast toast-remove">
                <div className="toast">
                  <div className="input-wrapper">
                    <input
                      type="number"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <button onClick={removeValue}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer onClickAdd={openAddInput} onClickRemove={openRemoveInput} />
      </div>
    </>
  );
};

export default Account;
