import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  const doLogin = () => {
    setLogin(true);
  };

  const logout = () => {
    setLogin(false);
  };

  return (
    <AppContext.Provider value={{ login, doLogin, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
