import jwtDecode from "jwt-decode";
import { useState, useEffect } from "react";
import { IApplicationContext, useAppContext } from "../Utils";
import { IUserLogged } from "../components/TypeDef";

const useLoggedInUser = () => {
  const [loggedinUser, setLoggedinUser] = useState<IUserLogged>();

  const appcontext: IApplicationContext = useAppContext();

  useEffect(() => {
    const logedInUser: IUserLogged = jwtDecode<IUserLogged>(
      String(appcontext.userCredential?.credential)
    );
    setLoggedinUser(logedInUser);
  }, [appcontext]);

  return [loggedinUser];
};

export default useLoggedInUser;
