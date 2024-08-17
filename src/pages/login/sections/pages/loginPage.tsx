import React, { useState } from "react";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import LoginButton from "../components/LoginButton";
import ErrorMessage from "../components/ErrorMessage";
import { useAuthContext } from "../../../../shared/hook/useAuthContext";

import { Container} from "../styles/loginStyles";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signin, error, loading } = useAuthContext();

  async function handleSubmit() {
    if (!email || !password) return;
    await signin(email, password);
  }

  return (
    <Container>
      <InputEmail value={email} onChange={setEmail} />
      <InputPassword value={password} onChange={setPassword} />
      {error && <ErrorMessage message={error} />}
      <LoginButton loading={loading} onClick={handleSubmit} />
    </Container>
  );
};

export default LoginPage;