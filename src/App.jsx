import { Routes, Route } from "react-router-dom";
import Account from "./pages/Account";
import Overview from "./pages/Overview";
import User from "./pages/user";
import Login from "./pages/login";

export const App = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/account" element={<Account />} />
      <Route path="/user" element={<User />} />
      {/* TODO: <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default App;
