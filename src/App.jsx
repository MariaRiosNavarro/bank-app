import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Account from "./pages/Account";
import Overview from "./pages/Overview";
import User from "./pages/User";

export const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<Login />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/account" element={<Account />} />
      <Route path="/user" element={<User />} />
      {/* TODO: <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default App;
