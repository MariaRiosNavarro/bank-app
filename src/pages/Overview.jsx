import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AccountCard from "../components/AccountCard/AccountCard";
import { Link } from "react-router-dom";
import "./overview.scss";
import { useAppContext } from "../AppContext";

const Overview = () => {
  const { totalCardAmount } = useAppContext();
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="page-wrapper">
          <Link to="/account">
            <AccountCard totalCardAmount={totalCardAmount} />
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Overview;
