import styled from "styled-components";

export const MainLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0 80px 0 ;
  box-sizing: border-box; /
`;

export const CardLogin = styled.div`
  width: 425px;
  height: 600px;
  background: #000000;
  border-radius: 10px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter', sans-serif;

  .Forgot {
    font-size: 13px;
    margin: 25px 0 20px 0 ;
  }

  .Link {
    text-decoration: none;
    color: #ffffff;
  }

  .ContinueWith {
    font-size: 16px;
    color: #7B7B7B;
    margin: 0 0 20px 0;
    display: flex;
    align-items: center;
    position: relative;
    padding-right: 20px;
  }

  .ContinueWith::after {
    content: "";
    position: absolute;
    right: 0;
    width: 210px; 
    height: 1px; 
    background-color: #7B7B7B;
  }

  .Register {
    font-style: italic;
    font-size: 13px;
    color: #7B7B7B;
  }

  label {
    font-size: 16px;
  }
`;

export const ImageLogo = styled.div`
  margin: 40px 0 10px 0;
  img {
    width: 50px;
    height: auto;
  }
`;

export const ImageLogin = styled.div`
  img {
    width: 80px;
    height: auto;
  }
`;

export const TextField = styled.div`
  margin: 25px 0 0px 0;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 6px 0px 6px 15px;
`;

export const ContainerInput = styled.div`
  position: relative;
  width: 100%;
`;

export const ToggleIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #7B7B7B;
`;

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const SocialButton = styled.button`
  padding: 12px 37px;
  border-radius: 10px;
  cursor: pointer;
  
  img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: auto;
  }
`;

export const Error = styled.span`
  color: red;
`;

export const Form = styled.form`
  margin: 0px 40px 20px 40px;
  width: 80%;
`;

export const ButtonLogin = styled.button`
  padding: 10px 70px;
  color: white;
  background-color: #ffc107;
  margin: 20px 0 20px 0;
  border-radius: 10px;
  cursor: pointer;
`;

export const ImageLogoText = styled.div`
  margin: 10px 0 10px 0; 
  img {
    width: 60px;
    height: auto;
  }
`;
