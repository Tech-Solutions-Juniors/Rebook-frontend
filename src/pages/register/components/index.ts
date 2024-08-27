import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.background};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 30px;
  width: 60%;
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 10px;
`;

export const Logo = styled.img`
  width: 64px;
  height: 64px;
`;

export const Title = styled.h2`
  color: #fff;
  align-self: flex-start;
  margin-top: 10px;

  &::first-letter {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const InputsContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  gap: 20px;
`;

export const ToSContainer = styled.div`
  align-self: self-start;
  display: flex;
  align-items: center;
  margin-top: 15px;
  gap: 5px;

  span {
    color: rgba(255, 255, 255, 0.5);

    a {
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const ToSCheckbox = styled.label<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 5px;
  transition: 0.15s;

  background-color: ${(props) =>
    props.checked ? props.theme.colors.primary : "transparent"};
  color: ${(props) => (props.checked ? "#FFF" : "transparent")};
`;

export const RegistrationMethodsSeparator = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  color: rgba(255, 255, 255, 0.25);

  span {
    width: 180px;
  }

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.25);
  }
`;

export const RegistrationMethodsButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
`;

export const LoginInsteadText = styled.span`
  margin-top: 15px;
  color: rgba(255, 255, 255, 0.25);

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const RegisterButton = styled.button`
  width: 60%;
  padding: 12.5px;
  transition: 0.5s background-color;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  margin-top: 15px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
`;

export const ImageLogo = styled.img`
  height: 15px;
  margin-top: 15px;
`;
