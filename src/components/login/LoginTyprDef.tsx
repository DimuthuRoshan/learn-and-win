export interface ILoginProps {
  handleLangSelection: Function;
  handleOnSuccess: (credentialResponse: any) => void;
  handleOnError: () => void;
}
