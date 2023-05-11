import styled from "styled-components";
import bg from "./assets/images/app-background-img.jpg";

export const EventDescription = styled.p`
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 1rem;
`;

export const EventDetailsContainer = styled.div`
  text-align: center;
`;

export const Label = styled.p`
  color: black;
  margin-left: 1rem;
  text-align: center;
`;

export const EventDtatesSection = styled.div`
  justify-content: center;
  display: flex;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
  width: 40%;
  background: rgb(255,255,255,0.2);
  border-radius: 10px;
}
`;

export const AppContainer = styled.div`
  background: url(${bg});
  height: 100vh;
  background-repeat: round;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const GoogleBtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LogOutBtn = styled.button``;
