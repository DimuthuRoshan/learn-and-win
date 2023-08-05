import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "semantic-ui-react";
import {
  HeaderMenu,
  UserLabel,
  UserProfileImage,
} from "../App.styled.components";
import useLoggedInUser from "../hooks/useLoggedInUser";
import { IHeaderNavigationBarProps } from "./TypeDef";

const HeaderNavigationBar = ({ onClickLogOut }: IHeaderNavigationBarProps) => {
  const [logedInUser] = useLoggedInUser();

  const { t } = useTranslation();

  return (
    <HeaderMenu size="small">
      <HeaderMenu.Menu position="right">
        <HeaderMenu.Item>
          {logedInUser && (
            <UserLabel>
              <UserProfileImage src={logedInUser.picture} />
              {logedInUser.name}
            </UserLabel>
          )}
        </HeaderMenu.Item>
        <HeaderMenu.Item>
          <Button primary onClick={() => onClickLogOut()}>
            {t("homePage.logOutButton")}
          </Button>
        </HeaderMenu.Item>
      </HeaderMenu.Menu>
    </HeaderMenu>
  );
};

export default HeaderNavigationBar;
