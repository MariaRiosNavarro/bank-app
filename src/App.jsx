import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import UserPage from "./pages/UserPage";
import OverviewPage from "./pages/OverviewPage";
import { AppProvider } from "./AppContext";

export const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<LoginPage />} />

          <Route path="/OverviewPage" element={<OverviewPage />} />

          <Route path="/AccountPage" element={<AccountPage />} />

          <Route path="/UserPage" element={<UserPage />} />

          {/* TODO: <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
