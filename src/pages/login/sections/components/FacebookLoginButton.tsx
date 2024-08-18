import React from "react";
import { SocialButton } from "../styles/loginStyles";

interface SocialLoginButtonProps {
  loading: boolean;
  onClick: () => void;
  url: string;
}

const FacebookLoginButton: React.FC<SocialLoginButtonProps> = ({ loading, onClick,url }) => (
  <SocialButton disabled={loading} onClick={onClick}>
    <img src={url} alt="FaceBook Icon" />
    
  </SocialButton>
);

export default FacebookLoginButton;
