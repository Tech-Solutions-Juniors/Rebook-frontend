import React, { useState } from 'react';
import { Input, ContainerInput, ToggleIcon } from '../styles/loginStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface InputPasswordProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({ value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ContainerInput>
      <Input
        type={showPassword ? 'text' : 'password'}
        name="password"
        placeholder={placeholder}
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