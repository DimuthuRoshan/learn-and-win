import styled from "styled-components";
import bg from "../../assets/images/app-background-img.jpg";
import { Dropdown } from "semantic-ui-react";

export const AppContainer = styled.div`
  background: url(${bg});
  height: 100vh;
  background-repeat: round;
  display: flex;
  justify-content: end;
  align-items: center;
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

export const EventDetailsContainer = styled.div`
  text-align: center;
`;

export const LanguageSelection = styled.div`
  display: flex;
  justify-content: center;
`;

export const LanguageDropdown = styled(Dropdown)`
  width: 40% !important;
  margin: 1rem;
`;

export const EventLabel = styled.p`
  color: black;
  margin-left: 1rem;
  text-align: center;
`;

export const GoogleBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const EventDescription = styled.p`
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 1rem;
  font-family: Sinhala Sangam MN !important;
`;

export const EventDtatesSection = styled.div`
  justify-content: center;
  display: flex;
`;