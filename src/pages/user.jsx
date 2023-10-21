import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const User = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <h2 className="text-center">User</h2>
        <Footer selected={"user"} />
      </div>
    </>
  );
};

export default User;
