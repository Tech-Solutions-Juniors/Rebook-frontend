import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-size: 1.87em;
  text-transform: uppercase;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 5.7%;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.containerMaxWidth};
`;

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CategoryList = styled.ul`
  display: flex;
  gap: 2.4em;
`;

export const CategoryItem = styled.li`
  list-style: none;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.9em;
  cursor: pointer;

  &:hover {
  }
`;

export const BookList = styled.ul`
  margin-top: 5em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5em;
`;
