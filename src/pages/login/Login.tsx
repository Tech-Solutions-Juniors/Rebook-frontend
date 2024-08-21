import LoginPage from "./sections/pages/LoginPage";

import Logo from "@assets/rebook-logo.png";
import LoginTitle from "@assets/login-title.png";
import GoogleIcon from "@assets/Google-icon.png";
import GitHubIcon from "@assets/GitHub-icon.png";
import FacebookIcon from "@assets/Facebook-icon.png";
import TextLogo from "@assets/rebook-text-logo-white.png";

const Login = () => {
  return (
    <main>
      <LoginPage 
        logoUrl={Logo}
        loginTitleUrl={LoginTitle}
        emailFieldText="Email"
        emailPlaceholder="example@email.com"
        passwordFieldText="Password"
        passwordPlaceholder="Password"
        forgotPasswordText="Forgot Password?"
        socialLoginsText="Or continue with"
        googleIconUrl={GoogleIcon}
        githubIconUrl={GitHubIcon}
        facebookIconUrl={FacebookIcon}
        registerText="Don’t have an account yet?"
        registerLinkText=" Register for free"
        loginButtonText="Log in"
        textLogoUrl={TextLogo}
      />
    </main>
  );
};

export default Login;