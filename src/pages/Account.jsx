import "./Account.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useAppContext } from "../AppContext";

const Account = () => {
  const { totalCardAmount, setTotalCardAmount } = useAppContext();

  const addValue = (value) => {
    setTotalCardAmount(totalCardAmount + value);
  };

  const removeValue = (value) => {
    setTotalCardAmount(totalCardAmount - value);
  };

  const openAddInput = () => {};

  const openRemoveInput = () => {};

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="page-wrapper">
          <h2>Account</h2>
          <input type="number" />
          <button>Add</button>
        </div>
        <Footer onClickAdd={addValue} onClickRemove={removeValue} />
      </div>
    </>
  );
};

export default Account;
