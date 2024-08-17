import React from "react";

import {Button} from "../styles/loginStyles"

interface LoginButtonProps {
  loading: boolean;
  onClick: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ loading, onClick }) => (
  <Button disabled={loading} onClick={onClick}>
    Login
  </Button>
);

export default LoginButton;
