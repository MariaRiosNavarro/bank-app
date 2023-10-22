import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import { userSvg } from "../components/svg/svg";
import LoginForm from "../components/LoginForm/LoginForm";
import "./Login.scss";

const Login = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="login-wrapper">
          <div className="center">{userSvg}</div>
          <div className="card-wrapper">
            <Link to="/overview" className="text-center">
              <LoginForm></LoginForm>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
