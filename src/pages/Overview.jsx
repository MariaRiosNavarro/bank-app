import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AccountCard from "../components/AccountCard/AccountCard";
import { Link } from "react-router-dom";
import "./overview.scss";
import { useAppContext } from "../AppContext";
import TotalAmount from "../components/TotalAmount/TotalAmount";

const Overview = () => {
  const { totalCardAmount } = useAppContext();
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="page-wrapper">
          <div className="card-wrapper">
            <TotalAmount totalCardAmount={totalCardAmount} />
            <Link to="/account">
              <AccountCard
                className="pointer"
                name={"Credit Card"}
                cardNumber={"0123 4567 8901 23"}
                totalCardAmount={totalCardAmount}
              />
            </Link>
          </div>
        </div>
        <Footer selected={"overview"} />
      </div>
    </>
  );
};

export default Overview;
