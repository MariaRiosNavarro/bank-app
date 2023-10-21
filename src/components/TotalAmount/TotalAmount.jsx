import { useAppContext } from "../../AppContext";
import "./TotalAmount.scss";

const TotalAmount = () => {
  //Future TODO: add the possibility to add more cards to the array
  const { totalCardAmount } = useAppContext();

  const cardsAmounts = [totalCardAmount];
  // Here we reduce all amounts of all cards
  let totalAmount = cardsAmounts.reduce((a, b) => a + b);

  return (
    <>
      <div className="total-amount">
        <h2>Total Amount</h2>
        <div className="row space">
          <span className="euro">€</span>
          <h3 className="amount total">{totalAmount}</h3>
        </div>
      </div>
    </>
  );
};

export default TotalAmount;
