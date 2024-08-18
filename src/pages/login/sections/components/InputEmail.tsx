import React from "react";

import {Input} from "../styles/loginStyles"

interface InputEmailProps {
  value: string;
  onChange: (value: string) => void;
  emailPlacehouder: string;
}

const InputEmail: React.FC<InputEmailProps> = ({ value, onChange, emailPlacehouder }) => (
  <Input
    type="text"
    name="email"
    placeholder={emailPlacehouder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default InputEmail;
