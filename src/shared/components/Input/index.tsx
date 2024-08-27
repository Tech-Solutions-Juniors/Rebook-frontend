import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Label,
  Input as HTMLInput,
  InputContainer,
  ShowPasswordIcon,
  ErrorText,
} from "./components";
import { useState } from "react";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  error: string | undefined;
}

const Input: React.FC<Props> = ({ id, title, error, ...props }) => {
  const isPasswordInput = props.type === "password";

  const [showingText, setShowingTextState] = useState(!isPasswordInput);

  return (
    <Container>
      <Label htmlFor={id}>{title}</Label>

      <InputContainer error={Boolean(error)}>
        <HTMLInput
          {...{ id, ...props }}
          type={showingText && isPasswordInput ? "text" : props.type}
        />

        {isPasswordInput && (
          <ShowPasswordIcon
            icon={showingText ? faEyeSlash : faEye}
            onClick={() => setShowingTextState(!showingText)}
          />
        )}
      </InputContainer>

      <ErrorText>{error}</ErrorText>
    </Container>
  );
};

export default Input;
