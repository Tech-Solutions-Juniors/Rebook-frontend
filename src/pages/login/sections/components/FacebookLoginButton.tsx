import React from "react";
import { SocialButton } from "../styles/LoginStyles";

interface SocialLoginButtonProps {
  loading: boolean;
  onClick: () => void;
  iconUrl: string;
}

const FacebookLoginButton: React.FC<SocialLoginButtonProps> = ({ loading, onClick, iconUrl }) => (
  <SocialButton disabled={loading} onClick={onClick}>
    <img src={iconUrl} alt="Facebook Icon" />
  </SocialButton>
);

export default FacebookLoginButton;