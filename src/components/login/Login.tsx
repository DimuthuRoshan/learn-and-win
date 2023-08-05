import React, { SyntheticEvent } from "react";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import { GoogleLogin } from "@react-oauth/google";
import {
  AppContainer,
  EventDescription,
  EventDetailsContainer,
  EventDtatesSection,
  EventLabel,
  GoogleBtnContainer,
  LanguageDropdown,
  LanguageSelection,
  LoginContainer,
} from "./Login.styled.components";
import { LANGUAGE } from "../../constant";
import { ILoginProps } from "./LoginTyprDef";

const Login = ({
  handleLangSelection,
  handleOnSuccess,
  handleOnError,
}: ILoginProps) => {
  const { t, i18n } = useTranslation();

  console.log("Language", i18n.language);
  return (
    <AppContainer>
      <LoginContainer>
        <EventDetailsContainer>
          <LanguageSelection>
            <LanguageDropdown
              placeholder="Select Language"
              fluid
              search
              selection
              options={LANGUAGE}
              onChange={(event: SyntheticEvent, data: object) =>
                handleLangSelection(event, data)
              }
              defaultValue={'en'}
            />
          </LanguageSelection>
          <EventDescription>{t("loginPage.event.label")}</EventDescription>
          <EventDtatesSection>
            <EventLabel>
              {t("loginPage.event.start")}
              <strong> 23rd Apr 2023 </strong>
              {t("loginPage.event.end")}
              <strong> 23rd Apr 2023 </strong>
            </EventLabel>
          </EventDtatesSection>
          <GoogleBtnContainer>
            {isMobile ? (
              <GoogleLogin
                onSuccess={handleOnSuccess}
                onError={handleOnError}
                shape="square"
                type="icon"
                size="medium"
              />
            ) : (
              <GoogleLogin
                onSuccess={handleOnSuccess}
                onError={handleOnError}
                shape="square"
                text="signin"
              />
            )}
          </GoogleBtnContainer>
        </EventDetailsContainer>
      </LoginContainer>
    </AppContainer>
  );
};

export default Login;
