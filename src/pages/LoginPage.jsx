import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import { userSvg } from "../components/svg/svg";
import LoginForm from "../components/LoginForm/LoginForm";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="login-wrapper">
          <div className="center">{userSvg}</div>
          <div className="card-wrapper">
            <Link to="/OverviewPage" className="text-center">
              <LoginForm></LoginForm>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
