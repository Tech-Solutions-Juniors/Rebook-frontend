import styled from "styled-components";

export const BookContent = styled.li`
  list-style: none;
  width: 17em;
  height: 23.88em;
  background-color: #d8d8d8;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  .content {
    padding: 1.5em;
    display: flex;
    flex-direction: column;
    gap: 0.7em;
  }
`;

export const Header = styled.div`
  text-align: center;
  background-color: #000;
  width: 100%;
  font-weight: 700;
  font-size: 0.9em;
  color: #fff;
  border-radius: 5px 5px 0px 0px;
  padding: 0.4em;
`;

export const BookTitle = styled.h3``;

export const BookAuthor = styled.span`
font-size: 0.87em;
`;

export const Image = styled.img`
  width: 78%;
  margin-inline: auto;
  border-radius: 5px;
`;

export const Price = styled.span`
  font-weight: 500;
`;
