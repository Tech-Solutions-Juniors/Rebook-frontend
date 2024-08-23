import React from "react";
import { ButtonLogin } from "../styles/LoginStyles";

interface LoginButtonProps {
  loading: boolean;
  onClick: () => void;
  text: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ loading, onClick, text }) => (
  <ButtonLogin disabled={loading} onClick={onClick}>
    {text}
  </ButtonLogin>
);

export default LoginButton;