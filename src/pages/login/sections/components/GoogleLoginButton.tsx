import React from "react";
import { SocialButton } from "../styles/loginStyles";


interface SocialLoginButtonProps {
  loading: boolean;
  onClick: () => void;
  url: string;
}

const GoogleLoginButton: React.FC<SocialLoginButtonProps> = ({ loading, onClick,url }) => (
  <SocialButton disabled={loading} onClick={onClick} >
    <img src={url} alt="Google Icon" />
  </SocialButton>
);

export default GoogleLoginButton;
