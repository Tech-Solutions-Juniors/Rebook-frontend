import React, { useState } from 'react';
import { Input, ContainerInput, ToggleIcon } from '../styles/loginStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


interface InputPasswordProps {
  value: string;
  onChange: (value: string) => void;
  passwordPlaceholder: string;
}


const InputPassword: React.FC<InputPasswordProps> = ({ value, onChange, passwordPlaceholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ContainerInput>
      <Input
        className="password"
        type={showPassword ? 'text' : 'password'}
        name="password"
        placeholder={passwordPlaceholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <ToggleIcon onClick={handleToggle}>
        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
      </ToggleIcon>
    </ContainerInput>
  );
};

export default InputPassword;