import {
  Container,
  Label,
  InputContainer,
  ErrorText,
  PhoneNumberInput,
} from "./components";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  error: string | undefined;
}

const PhoneInput: React.FC<Props> = ({ id, title, error, ...props }) => {
  return (
    <Container>
      <Label htmlFor={id}>{title}</Label>

      <InputContainer error={Boolean(error)}>
        <PhoneNumberInput {...{ id, ...props }} />
      </InputContainer>

      <ErrorText>{error}</ErrorText>
    </Container>
  );
};

export default PhoneInput;
