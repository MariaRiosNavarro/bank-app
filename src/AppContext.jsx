import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [totalCardAmount, setTotalCardAmount] = useState(0);
  const [history, setHistory] = useState([]);

  return (
    <AppContext.Provider
      value={{ totalCardAmount, setTotalCardAmount, history, setHistory }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};
