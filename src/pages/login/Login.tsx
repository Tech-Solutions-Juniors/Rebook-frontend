import LoginPage from "./sections/pages/loginPage";

import Logo from "@assets/reboock-logo.png";
import LoginTitle from "@assets/login-title.png";
import GoogleIcon from "@assets/Google-icon.png";
import GitHubIcon from "@assets/Github-icon.png";
import FaceBookIcon from "@assets/facebook-icon.png";
import TextLogo from "@assets/rebook-text-logo-white.png";

const Login = () => {
  return (
    <main>
      <LoginPage 
        urlLogo={Logo}
        urlLogin={LoginTitle}
        textFildEmail="Email"
        placeholderEmail="example@email.com"
        textFildSenha="Password"
        placeholderSenha="Password" 
        textForgot="Forgot Password?"
        textSocialLogins="Or continue with"
        urlIconGoogle={GoogleIcon}
        urlIconGithub={GitHubIcon}
        urlIconFacebook={FaceBookIcon}
        textRegister="Don’t have an account yet?"
        textLink=" Register for free"
        textBottonLogin="Log in"
        urlLogoText={TextLogo}
      />
    </main>
  );
};

export default Login;