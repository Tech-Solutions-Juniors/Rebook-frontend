import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CartContainer,
  CartItemsAmount,
  Container,
  LeftContainer,
  LinkItem,
  LinksContainer,
  LoginButton,
  LoginButtonText,
  Logo,
  RightContainer,
  SearchInput,
  SearchInputContainer,
} from "./components";

// Icons
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

import textLogo from "@assets/rebook-text-logo.png";

const Header: React.FC = () => {
  const [navBarOffset, setNavBarOffset] = useState(0);

  return (
    <Container>
      <LeftContainer>
        <Logo src={textLogo} />

        <div className="separator" />

        <CartContainer>
          <Link to="TODO" data-items-amount={0}>
            <IoCartOutline size={20} color="#000" />
          </Link>

          <CartItemsAmount size={14}>3</CartItemsAmount>
        </CartContainer>
      </LeftContainer>

      <RightContainer>
        <SearchInputContainer>
          <IoIosSearch />

          <SearchInput placeholder="Search book" />
        </SearchInputContainer>

        <LinksContainer barPosition={navBarOffset}>
          <LinkItem
            to="/"
            onClick={(e) => setNavBarOffset(e.currentTarget.offsetLeft)}
          >
            Explorer
          </LinkItem>
          <LinkItem
            to="/"
            onClick={(e) => setNavBarOffset(e.currentTarget.offsetLeft)}
          >
            Shop
          </LinkItem>
          <LinkItem
            to="/"
            onClick={(e) => setNavBarOffset(e.currentTarget.offsetLeft)}
          >
            Blog
          </LinkItem>
        </LinksContainer>

        <LoginButton to="/login">
          <LoginButtonText>Log in</LoginButtonText>
        </LoginButton>
      </RightContainer>
    </Container>
  );
};

export default Header;
