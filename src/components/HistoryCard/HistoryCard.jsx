import PropTypes from "prop-types";

const HistoryCard = ({ history }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="row space">
          <span>€</span>
          <p>{history}</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;

HistoryCard.propTypes = {
  history: PropTypes.string,
};
