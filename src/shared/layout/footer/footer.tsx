import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterSectionsContainer,
  FooterSection,
  FooterSectionInsideContainer,
  FooterLogo,
  FooterText,
  FooterForm,
  FooterInput,
  FooterButton,
  FooterTitle,
  FooterList,
  FooterListItem,
} from "./components"; // Ajuste o caminho conforme necessário

import textLogo from '../../../assets/rebook-text-logo-white-2.png'; // Ajuste o caminho conforme necessário

import 'primeicons/primeicons.css';

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
          <FooterText>
            <strong>110,791,448,191 joined us for the Newsletter</strong>
          </FooterText>
          <FooterForm>
            <FooterInput type="email" placeholder="Your E-Mail Address" className="pi-arrow-up-right" />
            <FooterButton type="submit" ><p>Join Us</p><div className="pi pi-angle-right" style={{ fontSize: '18px' }} /></FooterButton>
          </FooterForm>
        </FooterSection>

        <FooterSectionsContainer>
          <FooterSectionInsideContainer>
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
          </FooterSectionInsideContainer>

          <FooterSectionInsideContainer>
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
          </FooterSectionInsideContainer>

          <FooterSectionInsideContainer>
            <FooterTitle>About</FooterTitle>
            <FooterList>
              <FooterListItem>Company</FooterListItem>
              <FooterListItem>Careers</FooterListItem>
              <FooterListItem>Terms of service</FooterListItem>
              <FooterListItem>Privacy policy</FooterListItem>
            </FooterList>
          </FooterSectionInsideContainer>

          <FooterSectionInsideContainer>
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
          </FooterSectionInsideContainer>
        </FooterSectionsContainer>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
