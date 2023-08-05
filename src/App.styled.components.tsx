import { Dropdown, Menu, Label } from "semantic-ui-react";
import styled from "styled-components";
import bg from "./assets/images/app-background-img.jpg";

export const EventDescription = styled.p`
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 1rem;
  font-family: Sinhala Sangam MN !important;
`;

export const EventDetailsContainer = styled.div`
  text-align: center;
`;

export const EventLabel = styled.p`
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
  margin-bottom: 1rem;
`;

export const HeaderMenu = styled(Menu)`
  margin: 1rem 1rem 0rem 1rem !important;
`;

export const LogOutBtn = styled.button`
  line-height: 1rem;
  margin: 0.25rem;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  border: 0px;
  background-color: initial;
  color: #dbeafe;
`;

export const Container = styled.div`
  background-color: #f1ebeb;
`;

export const LanguageSelection = styled.div`
  display: flex;
  justify-content: center;
`;

export const LanguageDropdown = styled(Dropdown)`
  width: 40% !important;
  margin: 1rem;
`;

export const UserLabel = styled(Label)`
  height: 2.4rem;
`;

export const UserProfileImage = styled.img`
  height: 1.25rem !important;
  margin-right: 0.5rem;
`;
