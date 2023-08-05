import { createContext, useContext } from "react";

export interface ILoggedUser {
  clientId: string;
  credential: string;
  select_by: string;
}

export interface IUserCred {
  userCredential: ILoggedUser | null;
}

export interface IApplicationContext {
  userCredential: ILoggedUser | null;
  selectedlang: string;
}

export const AppContext = createContext<IApplicationContext>({
  userCredential: null,
  selectedlang: "en",
});

export const useAppContext = () => useContext(AppContext);

export const instructionPoints = [
  {optionId:"option1",trnslationKey:"instructionPage.instructionPoint1"},
  {optionId:"option2",trnslationKey:"instructionPage.instructionPoint2"},
  {optionId:"option3",trnslationKey:"instructionPage.instructionPoint3"},
  {optionId:"option4",trnslationKey:"instructionPage.instructionPoint4"},
  {optionId:"option5",trnslationKey:"instructionPage.instructionPoint5"},
  {optionId:"option6",trnslationKey:"instructionPage.instructionPoint6"},
  {optionId:"option7",trnslationKey:"instructionPage.instructionPoint7"},
];