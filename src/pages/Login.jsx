import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

const Login = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Link to="/overview" className="text-center">
          <h2 className="center">Login</h2>
        </Link>
      </div>
    </>
  );
};

export default Login;
