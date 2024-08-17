import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: ${(props) => props.theme.containerMaxWidth};
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
`;

// Left side
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #000;

  & > * {
    display: flex;
    align-items: center;
  }

  & > .separator {
    width: 1px;
    height: 40%;
    background: #000;
    opacity: 20%;
  }
`;

export const Logo = styled.img``;

export const CartContainer = styled.div`
  position: relative;
  top: 4px;
`;

export const CartItemsAmount = styled.span<{ size: number }>`
  position: absolute;
  top: ${(props) => props.size / -3}px;
  right: ${(props) => props.size / -3}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.size - 6}px;
  font-weight: 800;
  color: #fff;
  background: #000;
  border-radius: 50%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

// Right side
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const SearchInput = styled.input`
  width: 12.5rem;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  border-radius: 0.6rem;
  padding: 0.25rem 0.75rem;
  background-color: #00000050;
  backdrop-filter: blur(0.5rem);
  border: none;
  outline: none;

  &::placeholder {
    color: #ffffff;
  }
`;

export const LinksContainer = styled.nav<{ barPosition: number }>`
  display: flex;
  gap: 1rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: ${(props) => props.barPosition}px;
    width: 20px;
    height: 4px;
    background-color: #fff;
    transition: 0.25s left;
  }
`;

export const LinkItem = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: black;
`;

export const LoginButton = styled(Link)`
  text-decoration: none;
  border-radius: 2rem;
  padding: 0.75rem 1.5rem;
  background: #000;
`;

export const LoginButtonText = styled(Link)`
  font-weight: 700;
  color: #fff;
  text-decoration: none;
`;
