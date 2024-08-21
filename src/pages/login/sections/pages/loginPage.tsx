import React, { useState } from "react";
import { useAuthContext } from "../../../../shared/hook/useAuthContext"; // Ajuste o caminho conforme necessário
import {
  CardLogin,
  Container,
  Form,
  ImageLogin,
  ImageLogo,
  ImageLogoText,
  MainLogin,
  TextField,
} from "../styles/loginStyles";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import LoginButton from "../components/LoginButton";
import ErrorMessage from "../components/ErrorMessage";
import GoogleLoginButton from "../components/GoogleLoginButton";
import GitHubLoginButton from "../components/GitHubLoginButton";
import FacebookLoginButton from "../components/FacebookLoginButton";
import { Props } from "../types/props";

const LoginPage: React.FC<Props> = ({
  logoUrl,
  loginTitleUrl,
  emailFieldText,
  emailPlaceholder,
  passwordFieldText,
  passwordPlaceholder,
  forgotPasswordText,
  socialLoginsText,
  googleIconUrl,
  githubIconUrl,
  facebookIconUrl,
  registerText,
  registerLinkText,
  loginButtonText,
  textLogoUrl,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signin, error, loading } = useAuthContext();

  async function handleSubmit() {
    if (!email || !password) return;
    await signin(email, password);
  }

  async function handleGoogleLogin() {
    // logic for Google login
  }

  async function handleGitHubLogin() {
    // logic for GitHub login
  }

  async function handleFacebookLogin() {
    // logic for Facebook login
  }

  return (
    <MainLogin>
      <CardLogin>
        <ImageLogo>
          <img src={logoUrl} alt="Logo REBOOK" />
        </ImageLogo>
        <Form>
          <ImageLogin>
            <img src={loginTitleUrl} alt="Log in" />
          </ImageLogin>

          <TextField>
            <label htmlFor="Email">{emailFieldText}</label>
            <br />
            <InputEmail
              value={email}
              onChange={setEmail}
              placeholder={emailPlaceholder}
            />
          </TextField>

          <TextField>
            <label htmlFor="Password">{passwordFieldText}</label>
            <br />
            <InputPassword
              value={password}
              onChange={setPassword}
              placeholder={passwordPlaceholder}
            />
          </TextField>
          <p className="Forgot"><a className="Link" href="">{forgotPasswordText}</a></p>
          <p className="ContinueWith">{socialLoginsText}</p>

          <Container>
            <GoogleLoginButton
              loading={loading}
              onClick={handleGoogleLogin}
              iconUrl={googleIconUrl}
            />
            <GitHubLoginButton
              loading={loading}
              onClick={handleGitHubLogin}
              iconUrl={githubIconUrl}
            />
            <FacebookLoginButton
              loading={loading}
              onClick={handleFacebookLogin}
              iconUrl={facebookIconUrl}
            />
          </Container>
        </Form>
        <p className="Register">
          {registerText}
          <a className="Link" href="">{registerLinkText}</a>
        </p>
        {error && <ErrorMessage message={error} />}
        <LoginButton
          loading={loading}
          onClick={handleSubmit}
          text={loginButtonText}
        />
        <ImageLogoText>
        <img src={textLogoUrl} alt="Text Logo" />
        </ImageLogoText>
      </CardLogin>
      
    </MainLogin>
  );
};

export default LoginPage;