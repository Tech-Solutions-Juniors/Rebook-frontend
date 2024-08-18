import React, { useState } from "react";

import { useAuthContext } from "../../../../shared/hook/useAuthContext";

import {
  CardLogin,
  Container,
  Form,
  ImageLogin,
  ImageLogo,
  ImageLogoText,
  MainLogin,
  TextFild,
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
  urlLogo,
  urlLogin,
  textFildEmail,
  placeholderEmail,
  textFildSenha,
  placeholderSenha,
  textForgot,
  textSocialLogins,
  urlIconGoogle,
  urlIconGithub,
  urlIconFacebook,
  textRegister,
  textLink,
  textBottonLogin,
  urlLogoText,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signin, error, loading } = useAuthContext();

  async function handleSubmit() {
    if (!email || !password) return;
    await signin(email, password);
  }

  async function handleGoogleLogin() {
    // lógica para login com Google
  }

  async function handleGitHubLogin() {
    // lógica para login com GitHub
  }

  async function handleFacebookLogin() {
    // lógica para login com Facebook
  }

  return (
    <MainLogin>
      <CardLogin>
        <ImageLogo>
          <img src={urlLogo} alt="Logo REBOOK" />
        </ImageLogo>
        <Form>
          <ImageLogin>
            <img src={urlLogin} alt="Log in" />
          </ImageLogin>

          <TextFild>
            <label htmlFor="Email">{textFildEmail}</label>
            <br />
            <InputEmail
              value={email}
              onChange={setEmail}
              emailPlacehouder={placeholderEmail}
            />
          </TextFild>

          <TextFild>
            <label htmlFor="Senha">{textFildSenha}</label>
            <br />
            <InputPassword
              value={password}
              onChange={setPassword}
              passwordPlaceholder={placeholderSenha}
            />
          </TextFild>
          <p className="Forgot"><a className="Link" href="">{textForgot}</a></p>
          <p className="ContinueWith">{textSocialLogins}</p>

          <Container>
            <GoogleLoginButton
              loading={loading}
              onClick={handleGoogleLogin}
              url={urlIconGoogle}
            />
            <GitHubLoginButton
              loading={loading}
              onClick={handleGitHubLogin}
              url={urlIconGithub}
            />
            <FacebookLoginButton
              loading={loading}
              onClick={handleFacebookLogin}
              url={urlIconFacebook}
            />
          </Container>
        </Form>
        <p className="Register">
          {textRegister}
          <a className="Link" href="">{textLink}</a>
        </p>
        {error && <ErrorMessage message={error} />}
        <LoginButton
          loading={loading}
          onClick={handleSubmit}
          text={textBottonLogin}
        />
        <ImageLogoText>
          <img src={urlLogoText} alt="REBOOK" />
        </ImageLogoText>
      </CardLogin>
    </MainLogin>
  );
};

export default LoginPage;
