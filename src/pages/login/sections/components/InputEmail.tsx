import React from "react";

import {Input} from "../styles/loginStyles"

interface InputEmailProps {
  value: string;
  onChange: (value: string) => void;
}

const InputEmail: React.FC<InputEmailProps> = ({ value, onChange }) => (
  <Input
    type="text"
    name="email"
    placeholder="example@email.com"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default InputEmail;
