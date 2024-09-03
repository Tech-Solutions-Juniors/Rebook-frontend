import styled from 'styled-components';

// Container do footer
export const FooterContainer = styled.footer`
  background-color: #FFC107;
  padding: 2rem 7rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 2rem 3rem;
  }

  @media (max-width: 992px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

// Container principal do footer
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column; /* Altere para coluna em telas menores */
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

// Container das seções do footer
export const FooterSectionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  background-color: black;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 1rem;
    justify-content: center; /* Centraliza em telas menores */
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Seção interna do footer (primeira coluna fora do container)
export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;

  &:first-child {
    width: 310px;
    margin: 0 150px 0 20px;
    flex: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 1rem 0;
  }
`;

// Seção interna do footer (colunas dentro do container)
export const FooterSectionInsideContainer = styled.div`
  flex: 1;
  box-sizing: border-box;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

// Outros componentes continuam os mesmos...
export const FooterLogo = styled.img`
  max-width: 150px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    max-width: 120px;
  }
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  color: #ffffff;
  margin-bottom: 0.5rem;

  
`;

export const FooterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  margin-top: 1rem;
`;

// Seção interna do footer (campo de entrada)
export const FooterInput = styled.input`
  padding: 0.5rem 2rem 0.25rem 0.25rem;
  width: 80%;
  border: none;
  background: transparent;
  border-bottom: 1px solid #ffffff;
  outline: none;
  font-size: 1rem;
  color: #ffffff;
  position: relative;
  background-image: url('src/assets/arrow-icon.png');
  background-repeat: no-repeat;
  background-position: right top;
  transition: background-image 0.5s ease, opacity 0.5s ease;

  &::placeholder {
    color: #ffffff;
    opacity: 0.7;
    transform: translate(-3px, -13px);
    transition: opacity 0.5s ease;
  }

  &:focus {
    background: rgba(255, 255, 255, 0.2);
    background-image: none;
    opacity: 0.5;

    &::placeholder {
      opacity: 0;
    }
  }

  
`;

export const FooterButton = styled.button`
  padding: 0.75rem 0.75rem;
  width: 35%;
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 0.50rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 5px;
  transition: color 0.3s ease;

  p {
    margin-right: 8px;
  }

  &:hover {
    color: #FFC107;
  }

  

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const FooterTitle = styled.h4`
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FooterListItem = styled.li`
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #FFC107;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;