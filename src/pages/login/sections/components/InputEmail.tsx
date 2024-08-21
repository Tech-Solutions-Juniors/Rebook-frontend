import React from "react";
import { Input } from "../styles/loginStyles";

interface InputEmailProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const InputEmail: React.FC<InputEmailProps> = ({ value, onChange, placeholder }) => (
  <Input
    type="email"
    name="email"
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default InputEmail;