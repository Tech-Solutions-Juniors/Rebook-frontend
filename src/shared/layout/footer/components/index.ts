import styled from 'styled-components';

// Componente <footer>
export const FooterContainer = styled.footer`
  background-color: #FFC107;
  padding: 2rem 5rem;
  display: flex;
  margin: 50px 0 0 0;
  flex-direction: row;
  justify-content: space-between;
`;

// Container principal do footer
export const FooterContent = styled.div`
  
  display: flex; /* Usar flexbox para colocar as divs lado a lado */
  gap: 2rem; /* Espaçamento entre as divs */
`;

// Container das seções do footer
export const FooterSectionsContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Seção interna do footer (cada coluna)
export const FooterSection = styled.div`
  display: flex;
  flex-direction: column; /* Organiza os elementos verticalmente */
  align-items: flex-start;
  min-width: 200px;
`;

// Outros componentes continuam os mesmos...
export const FooterLogo = styled.img`
  max-width: 150px;
  margin-bottom: 1rem;
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 0.5rem;
`;

export const FooterForm = styled.form`
  display: flex;
  flex-direction: column;  /* Organiza os elementos verticalmente */
  gap: 0.5rem;             /* Espaçamento entre o input e o button */
  width: 100%;             /* Garante que o formulário ocupe a largura total do contêiner */
  margin-top: 1rem;
`;

export const FooterInput = styled.input`
  ppadding: 0.5rem;
  width: 100%;             /* Garante que o input ocupe a largura total do contêiner */
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-sizing: border-box;  /* Inclui padding e border no cálculo da largura total */
  
`;

export const FooterButton = styled.button`
  padding: 0.5rem 1rem;
  width: 100%;             /* Garante que o botão ocupe a largura total do contêiner */
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const FooterTitle = styled.h4`
  font-size: 1.2rem;
  color: #343a40;
  margin-bottom: 1rem;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FooterListItem = styled.li`
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 0.5rem;

  &:hover {
    color: #007bff;
    cursor: pointer;
  }
`;