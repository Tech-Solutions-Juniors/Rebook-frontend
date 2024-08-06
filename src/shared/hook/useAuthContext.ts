import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export function useAuthContext() {
  const data = useContext(AuthContext);
  return data;
}
