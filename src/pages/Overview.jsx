import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AccountCard from "../components/AccountCard/AccountCard";
import "./overview.scss";

const Overview = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="page-wrapper">
          <h2 className="text-center">Overview</h2>
          <AccountCard />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Overview;
