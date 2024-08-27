import { useState } from "react";
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
} from "../styles/LoginStyles";

import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import LoginButton from "../components/LoginButton";
import ErrorMessage from "../components/ErrorMessage";
import GoogleLoginButton from "../components/GoogleLoginButton";
import GitHubLoginButton from "../components/GitHubLoginButton";
import FacebookLoginButton from "../components/FacebookLoginButton";

import Logo from "../../../../assets/rebook-logo.png";
import LoginTitle from "../../../../assets/login-title.png";
import GoogleIcon from "../../../../assets/Google-icon.png";
import GitHubIcon from "../../../../assets/Github-icon.png";
import FacebookIcon from "../../../../assets/facebook-icon.png";
import TextLogo from "../../../../assets/rebook-text-logo-white.svg";

const LoginPage = () => {
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
          <img src={Logo} alt="Logo REBOOK" />
        </ImageLogo>
        <Form>
          <ImageLogin>
            <img src={LoginTitle} alt="Log in" />
          </ImageLogin>

          <TextField>
            <label htmlFor="Email">Email</label>
            <br />
            <InputEmail
              value={email}
              onChange={setEmail}
              placeholder="example@email.com"
            />
          </TextField>

          <TextField>
            <label htmlFor="Password">Password</label>
            <br />
            <InputPassword
              value={password}
              onChange={setPassword}
              placeholder="Password"
            />
          </TextField>
          <p className="Forgot">
            <a className="Link" href="">
              Forgot Password?
            </a>
          </p>
          <p className="ContinueWith">Or continue with</p>
          <Container>
            <GoogleLoginButton
              loading={loading}
              onClick={handleGoogleLogin}
              iconUrl={GoogleIcon}
            />
            <GitHubLoginButton
              loading={loading}
              onClick={handleGitHubLogin}
              iconUrl={GitHubIcon}
            />
            <FacebookLoginButton
              loading={loading}
              onClick={handleFacebookLogin}
              iconUrl={FacebookIcon}
            />
          </Container>
        </Form>
        <p className="Register">
          Don’t have an account yet?
          <a className="Link" href="">
            {" "}
            Register for free
          </a>
        </p>
        {error && <ErrorMessage message={error} />}
        <LoginButton loading={loading} onClick={handleSubmit} text="Log in" />
        <ImageLogoText>
          <img src={TextLogo} alt="Text Logo" />
        </ImageLogoText>
      </CardLogin>
    </MainLogin>
  );
};

export default LoginPage;
