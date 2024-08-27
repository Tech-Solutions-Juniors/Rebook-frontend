import React from "react";
import { SocialButton } from "../styles/LoginStyles";

interface SocialLoginButtonProps {
  loading: boolean;
  onClick: () => void;
  iconUrl: string;
}

const GitHubLoginButton: React.FC<SocialLoginButtonProps> = ({ loading, onClick, iconUrl }) => (
  <SocialButton disabled={loading} onClick={onClick}>
    <img src={iconUrl} alt="GitHub Icon" />
  </SocialButton>
);

export default GitHubLoginButton;