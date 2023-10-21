import "./AccountCard.scss";
import { useAppContext } from "../../AppContext";
import PropTypes from "prop-types";

const AccountCard = ({ name, cardNumber }) => {
  const { totalCardAmount } = useAppContext();

  return (
    <>
      <div className="card">
        <h3>{name}</h3>
        <h4 className="card-number">{cardNumber}</h4>
        <div className="row space">
          <span>€</span>
          <p>{totalCardAmount}</p>
        </div>
      </div>
    </>
  );
};

export default AccountCard;

AccountCard.propTypes = {
  name: PropTypes.string,
  cardNumber: PropTypes.string,
};
