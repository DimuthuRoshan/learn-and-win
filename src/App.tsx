import React, { useState } from "react";
import "./App.css";
import {
  EventDescription,
  EventDetailsContainer,
  Label,
  EventDtatesSection,
  LogOutBtn,
} from "./App.styled.components";
import { EVENT_DETAILS, LABLE_TEXT } from "./constant";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

function App() {
  const [logedInUser, setLogedInUser] = useState<any>(
    localStorage.getItem("logedInUser")
      ? JSON.parse(String(localStorage.getItem("logedInUser")))
      : null
  );

  console.log("FFFFFFFFFFFF", process.env.REACT_APP_GOOGLE_CLIENT_ID);

  const handleOnSuccess = (credentialResponse: any) => {
    console.log(credentialResponse);
    console.log(credentialResponse.credential);
    localStorage.setItem("logedInUser", JSON.stringify(credentialResponse));
    setLogedInUser(jwtDecode(credentialResponse.credential));
  };

  const handleOnError = () => {
    console.log("Login Failed");
  };

  const handleOnLogOut = () => {
    localStorage.removeItem("logedInUser");
    googleLogout();
    setLogedInUser(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        {logedInUser ? (
          <React.Fragment>
            <p>{logedInUser.user}</p>
            <LogOutBtn onClick={handleOnLogOut}>Log Out</LogOutBtn>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <EventDetailsContainer>
              <EventDescription>{EVENT_DETAILS}</EventDescription>
              <EventDtatesSection>
                <Label>
                  {`${LABLE_TEXT.eventStartLbl} `}
                  <strong>23rd Apr 2023 </strong>
                  {`${LABLE_TEXT.eventEndsLbl} `}
                  <strong>23rd Apr 2023</strong>
                </Label>
              </EventDtatesSection>
            </EventDetailsContainer>
            <GoogleLogin onSuccess={handleOnSuccess} onError={handleOnError} />
          </React.Fragment>
        )}
      </header>
    </div>
  );
}

export default App;
