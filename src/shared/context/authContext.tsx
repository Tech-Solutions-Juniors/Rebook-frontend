import { createContext, useEffect, useState } from "react";
import { signinService } from "../../services";
import { TOKEN_KEY } from "../constants";

export interface IAuthContext {
  token: string | null;
  loading: boolean;
  error: string | null;
  signin: (email: string, password: string) => Promise<void>;
}

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: Props) {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const maybeToken = localStorage.getItem(TOKEN_KEY);
    if (maybeToken) {
      setToken(maybeToken);
    }
  }, []);

  async function signin(email: string, password: string) {
    setLoading(() => true);
    try {
      if (error) setError(() => null);
      const data = await signinService(email, password);
      setToken(data.token);
      localStorage.setItem(TOKEN_KEY, data.token);
    } catch (error) {
      console.log(error);
      const { message } = error as Error;
      setError(message);
    }
    setLoading(() => false);
    return;
  }

  return (
    <AuthContext.Provider value={{ token, loading, error, signin }}>
      {children}
    </AuthContext.Provider>
  );
}
