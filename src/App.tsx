import React, { useState, SyntheticEvent, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { googleLogout } from "@react-oauth/google";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

import "./App.css";
import Login from "./components/login/Login";
import { AppContext, ILoggedUser } from "./Utils";
import AppRoutes from "./components/AppRoutes";

import "./assets/images/app-background-img.jpg";
import HeaderNavigationBar from "./components/HeaderNavigationBar";

const App = () => {
  const { i18n } = useTranslation();

  const [selectedLang, setSelectedLang] = useState<string>(
    sessionStorage.getItem("selectedLang")
      ? String(sessionStorage.getItem("selectedLang"))
      : "sl"
  );

  const [logedInUser, setLogedInUser] = useState<ILoggedUser | null>(
    sessionStorage.getItem("logedInUser")
      ? JSON.parse(String(sessionStorage.getItem("logedInUser")))
      : null
  );

  const handleOnSuccess = (credentialResponse: any) => {
    sessionStorage.setItem("logedInUser", JSON.stringify(credentialResponse));
    setLogedInUser(credentialResponse);
  };

  const handleOnError = () => {
    console.log("Login Failed");
  };

  const handleOnLogOut = () => {
    sessionStorage.removeItem("logedInUser");
    googleLogout();
    setLogedInUser(null);
  };

  const handleLangSelection = async (event: SyntheticEvent, data: any) => {
    console.log("Event", event);
    console.log("Data", data.value);
    await i18n
      .changeLanguage(data.value)
      .then(() => {
        sessionStorage.setItem("selectedLang", data.value);
      })
      .catch(() => {
        console.log("Error in language selection");
      });
  };

  const appContextValue = useMemo(
    () => ({ userCredential: logedInUser, selectedlang: i18n.language }),
    [selectedLang, logedInUser]
  );

  return (
    <>
      {console.log("LLLLLLLLLL", logedInUser)}
      {console.log("CCCCCCCCC", i18n)}
      {console.log("appContextValue", appContextValue)}
      {logedInUser ? (
        <AppContext.Provider value={appContextValue}>
          <HeaderNavigationBar
            onClickLogOut={handleOnLogOut}
          ></HeaderNavigationBar>
          <MemoryRouter>
            <AppRoutes />
          </MemoryRouter>
        </AppContext.Provider>
      ) : (
        <Login
          handleLangSelection={handleLangSelection}
          handleOnSuccess={handleOnSuccess}
          handleOnError={handleOnError}
        />
      )}
    </>
  );
};

export default App;
