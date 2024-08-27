import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhoneInputLibComponent from "react-phone-number-input";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  font-family: Inter;
  font-weight: 400;
  color: #fff;
`;

export const InputContainer = styled.div<{ error: boolean }>`
  width: 100%;
  max-width: 100%;

  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 7.5px;
  margin-top: 7.5px;
  outline: none;

  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => (props.error ? "red" : "transparent")};
  transition: 0.25s border-color;

  &:focus-within {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  padding: 10px;
  outline: none;
`;

export const PhoneNumberInput = styled(PhoneInputLibComponent)`
  width: 100%;
  padding-left: 7.5px;

  input {
    width: 100%;
    padding: 10px;
    padding-left: 0px;
    outline: none;
    background: transparent;
  }
`;

export const ShowPasswordIcon = styled(FontAwesomeIcon)`
  width: 25px;
  font-size: 16px;
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.25);
`;

export const ErrorText = styled.span`
  align-self: start;
  height: auto;
  margin-top: 5px;
  color: red;
  transition: 0.25s height;
`;
