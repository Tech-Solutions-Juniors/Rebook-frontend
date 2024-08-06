import { useState } from "react";
import { useAuthContext } from "../../shared/hook/useAuthContext";

const Login = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const { signin, error, loading } = useAuthContext();

  async function handleSubmit() {
    if (!email || !password) return;
    await signin(email, password);
  }

  return (
    <div>
      <input
        type="text"
        name="email"
        placeholder="example@email.com"
        value={email ?? ""}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="senha"
        placeholder="******"
        value={password ?? ""}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <span className="error">{error}</span>}
      <button disabled={loading} onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export default Login;
