import React from "react";
import "./App.css";
import { GoogleLogin, GoogleOAuthProvider, googleLogout } from "@react-oauth/google";

function App() { 
  console.log("FFFFFFFFFFFF", process.env.REACT_APP_GOOGLE_CLIENT_ID);

  return (
    <div className="App">
      <header className="App-header">
        <p>Google login</p>
        <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </header>
    </div>
  );
}

export default App;
