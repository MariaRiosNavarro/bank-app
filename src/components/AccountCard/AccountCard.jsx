import "./AccountCard.scss";
import { useAppContext } from "../../AppContext";

const AccountCard = () => {
  //Future TODO: add the possibility to add more cards to the array

  const { totalCardAmount } = useAppContext();

  const cardsAmounts = [totalCardAmount];
  // Here we reduce all amounts of all cards
  let totalAmount = cardsAmounts.reduce((a, b) => a + b);

  return (
    <>
      <div className="card-wrapper">
        <div className="total-amount">
          <h2>Total Amount</h2>
          <div className="row space">
            <span>€</span>
            <h3 className="amount">{totalAmount}</h3>
          </div>
        </div>
        <div className="card">
          <h3>Credit Card</h3>
          <h4 className="card-number">1234 5678 9012 345</h4>
          <div className="row space">
            <span>€</span>
            <p>{totalCardAmount}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountCard;
