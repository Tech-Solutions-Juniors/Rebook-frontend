import React from "react";

import {Input} from "../styles/loginStyles"

interface InputPasswordProps {
  value: string;
  onChange: (value: string) => void;
}

const InputPassword: React.FC<InputPasswordProps> = ({ value, onChange }) => (
  <Input
    type="password"
    name="password"
    placeholder="******"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default InputPassword;
