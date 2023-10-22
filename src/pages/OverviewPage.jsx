import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AccountCard from "../components/AccountCard/AccountCard";
import { Link } from "react-router-dom";
import "./OverviewPage.scss";
import { useAppContext } from "../AppContext";
import TotalAmount from "../components/TotalAmount/TotalAmount";
import { bankSvg } from "../components/svg/svg";
import { addCardSvg, removeCardSvg } from "../components/svg/svg";

const OverviewPage = () => {
  const { totalCardAmount } = useAppContext();
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="page-wrapper">
          <div className="center">{bankSvg}</div>
          <div className="card-wrapper">
            <TotalAmount totalCardAmount={totalCardAmount} />
            <Link to="/AccountPage">
              <AccountCard
                className="pointer"
                name={"Credit Card"}
                cardNumber={"0123 4567 8901 23"}
                totalCardAmount={totalCardAmount}
              />
            </Link>
          </div>
        </div>
        <Footer
          selected={"overview"}
          svgIconAdd={addCardSvg}
          svgIconRemove={removeCardSvg}
        />
      </div>
    </>
  );
};

export default OverviewPage;
