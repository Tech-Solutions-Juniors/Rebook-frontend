import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterSectionsContainer,
  FooterSection,
  FooterLogo,
  FooterText,
  FooterForm,
  FooterInput,
  FooterButton,
  FooterTitle,
  FooterList,
  FooterListItem,
} from "./components";

import textLogo from '@assets/rebook-text-logo-white-2.png';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo src={textLogo} alt="Icone REBOOK" />
          <FooterText>
            Discover the latest and greatest in literature with our BOOK STORE,
            featuring hand-picked bestsellers and emerging authors.
          </FooterText>
          <FooterText>110,791,448,191 joined us for the Newsletter</FooterText>
          <FooterForm>
            <FooterInput type="email" placeholder="Your E-Mail Address" />
            <FooterButton type="submit">Join Us</FooterButton>
          </FooterForm>
        </FooterSection>

        <FooterSectionsContainer>
          <FooterSection>
            <FooterTitle>What we offer</FooterTitle>
            <FooterList>
              <FooterListItem>Membership</FooterListItem>
              <FooterListItem>Sale on books</FooterListItem>
              <FooterListItem>Sale on sets</FooterListItem>
              <FooterListItem>Lorem ipsum</FooterListItem>
              <FooterListItem>Lorem ipsum</FooterListItem>
              <FooterListItem>Curriculum</FooterListItem>
              <FooterListItem>Lorem ipsum</FooterListItem>
            </FooterList>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Resources</FooterTitle>
            <FooterList>
              <FooterListItem>Help center</FooterListItem>
              <FooterListItem>User guides</FooterListItem>
              <FooterListItem>Tell us what you want</FooterListItem>
              <FooterListItem>Blog</FooterListItem>
              <FooterListItem>Testimonials</FooterListItem>
              <FooterListItem>Help</FooterListItem>
              <FooterListItem>Contact us</FooterListItem>
            </FooterList>
          </FooterSection>

          <FooterSection>
            <FooterTitle>About</FooterTitle>
            <FooterList>
              <FooterListItem>Company</FooterListItem>
              <FooterListItem>Careers</FooterListItem>
              <FooterListItem>Terms of service</FooterListItem>
              <FooterListItem>Privacy policy</FooterListItem>
            </FooterList>
          </FooterSection>

          <FooterSection>
            <FooterTitle>International</FooterTitle>
            <FooterList>
              <FooterListItem>Pakistan</FooterListItem>
              <FooterListItem>Australia</FooterListItem>
              <FooterListItem>Brazil</FooterListItem>
              <FooterListItem>Canada</FooterListItem>
              <FooterListItem>Deutschland</FooterListItem>
              <FooterListItem>España</FooterListItem>
              <FooterListItem>France</FooterListItem>
              <FooterListItem>India</FooterListItem>
            </FooterList>
          </FooterSection>
        </FooterSectionsContainer>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
