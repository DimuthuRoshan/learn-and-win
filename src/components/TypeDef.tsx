export interface IUserLogged {
  iis: string;
  nbf: number;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  jti: string;
  name: string;
  picture: string;
}

export interface IHeaderNavigationBarProps {
  onClickLogOut: Function;
}
