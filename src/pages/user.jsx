import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { userSvg } from "../components/svg/svg";
import "./user.scss";

const User = () => {
  return (
    <>
      <div className="wrapper user-main">
        <Header />
        <div className="user-wrapper">
          <div className="center">{userSvg}</div>
          <div className="card-wrapper">
            <div className="card">
              <h2>Name: </h2>
              <p>Jane</p>
              <h2>Lastname:</h2>
              <p>Doe</p>
              <h3>Email</h3>
              <p>jane@doe.es</p>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <h2>Accounts: </h2>
              <p>CreditCard</p>
            </div>
          </div>
        </div>
        <Footer selected={"user"} />
      </div>
    </>
  );
};

export default User;
