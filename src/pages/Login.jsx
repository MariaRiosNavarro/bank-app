import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

const Login = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Link to="/overview" className="text-center">
          Login
        </Link>
      </div>
    </>
  );
};

export default Login;
