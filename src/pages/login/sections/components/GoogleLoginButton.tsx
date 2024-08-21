import React from "react";
import { SocialButton } from "../styles/loginStyles";

interface SocialLoginButtonProps {
  loading: boolean;
  onClick: () => void;
  iconUrl: string;
}

const GoogleLoginButton: React.FC<SocialLoginButtonProps> = ({ loading, onClick, iconUrl }) => (
  <SocialButton disabled={loading} onClick={onClick}>
    <img src={iconUrl} alt="Google Icon" />
  </SocialButton>
);

export default GoogleLoginButton;