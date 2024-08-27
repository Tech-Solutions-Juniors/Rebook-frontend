import React from "react";
import { Link } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Form,
  InputsContainer,
  LoginInsteadText,
  Logo,
  RegisterButton,
  RegistrationMethodsButtonsContainer,
  RegistrationMethodsSeparator,
  Title,
  ToSCheckbox,
  ToSContainer,
  ImageLogo,
} from "./components";

import Input from "@components/Input";
import PhoneNumber from "@components/Input/PhoneNumber";

import rebookLogo from "@assets/rebook-logo.svg";
import googleIcon from "@assets/Google-icon.png";
import gitHubIcon from "@assets/Github-icon.png";
import facebookIcon from "@assets/facebook-icon.png";
import textLogo from "@assets/rebook-text-logo-white.svg";

import GitHubLoginButton from "../login/sections/components/GitHubLoginButton";
import GoogleLoginButton from "../login/sections/components/GoogleLoginButton";
import FacebookLoginButton from "../login/sections/components/FacebookLoginButton";

import { FormInputs, schema } from "./types/inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorText } from "@base/shared/components/Input/components";

const Register: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { isLoading, errors },
  } = useForm<FormInputs>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
      confirm_password: "",
      tos_accepted: false,
    },
    resolver: zodResolver(schema),
  });

  async function handleGoogleLogin() {
    // logic for Google login
  }

  async function handleGitHubLogin() {
    // logic for GitHub login
  }

  async function handleFacebookLogin() {
    // logic for Facebook login
  }

  const onSubmit: SubmitHandler<FormInputs> = () => {
    // TODO: Finish submit
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Logo src={rebookLogo} />

        <Title>Register</Title>

        <InputsContainer>
          <Controller
            control={control}
            name="first_name"
            render={({ field }) => (
              <Input
                title="First Name"
                placeholder="First Name"
                error={errors.first_name?.message}
                {...{ ...field, ref: null, id: field.name }}
              />
            )}
          />

          <Controller
            control={control}
            name="last_name"
            render={({ field }) => (
              <Input
                title="Last Name"
                placeholder="Last Name"
                error={errors.last_name?.message}
                {...{ ...field, ref: null, id: field.name }}
              />
            )}
          />
        </InputsContainer>

        <InputsContainer>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                title="Email"
                placeholder="Email"
                error={errors.email?.message}
                {...{ ...field, ref: null, id: field.name }}
              />
            )}
          />

          <Controller
            control={control}
            name="phone_number"
            render={({ field }) => (
              <PhoneNumber
                title="Phone Number"
                placeholder="Phone Number"
                error={errors.phone_number?.message}
                {...{ ...field, ref: null, id: field.name }}
              />
            )}
          />
        </InputsContainer>

        <InputsContainer>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input
                type="password"
                title="Password"
                placeholder="Password"
                error={errors.password?.message}
                {...{ ...field, ref: null, id: field.name }}
              />
            )}
          />
        </InputsContainer>

        <InputsContainer>
          <Controller
            control={control}
            name="confirm_password"
            render={({ field }) => (
              <Input
                type="password"
                title="Confirm password"
                placeholder="Confirm password"
                error={errors.confirm_password?.message}
                {...{ ...field, ref: null, id: field.name }}
              />
            )}
          />
        </InputsContainer>

        <ToSContainer>
          <Controller
            control={control}
            name="tos_accepted"
            render={({ field }) => (
              <>
                <ToSCheckbox checked={field.value} htmlFor={field.name}>
                  <FontAwesomeIcon icon={faCheck} />
                </ToSCheckbox>

                <input
                  type="checkbox"
                  {...{ ...field, id: field.name, value: undefined }}
                  style={{ display: "none" }}
                />
              </>
            )}
          />

          <span>
            I agree to all the <Link to="/TODO">Terms</Link> and{" "}
            <Link to="/TODO">Privacy Policies</Link>
          </span>
        </ToSContainer>

        <ErrorText>{errors.tos_accepted?.message}</ErrorText>

        <RegistrationMethodsSeparator>
          <span>Or continue with</span>
        </RegistrationMethodsSeparator>

        <RegistrationMethodsButtonsContainer>
          <GoogleLoginButton
            loading={isLoading}
            onClick={handleGoogleLogin}
            iconUrl={googleIcon}
          />
          <GitHubLoginButton
            loading={isLoading}
            onClick={handleGitHubLogin}
            iconUrl={gitHubIcon}
          />
          <FacebookLoginButton
            loading={isLoading}
            onClick={handleFacebookLogin}
            iconUrl={facebookIcon}
          />
        </RegistrationMethodsButtonsContainer>

        <LoginInsteadText>
          Already have an account? <Link to="/login">Login</Link>
        </LoginInsteadText>

        <RegisterButton>Register</RegisterButton>

        <ImageLogo src={textLogo} />
      </Form>
    </Container>
  );
};

export default Register;
