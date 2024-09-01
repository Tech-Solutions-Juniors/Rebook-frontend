import styled from "styled-components";

export const BookContent = styled.li`
  list-style: none;
  width: 1fr;
  height: 20.8em;
  background-color: #f7f7f7;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 10px 2px #cecdcd;
  .content {
    padding: 1.2em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
`;

export const Header = styled.div`
  text-align: center;
  background-color: #000;
  width: 100%;
  font-weight: 700;
  font-size: 0.8em;
  color: #fff;
  border-radius: 5px 5px 0px 0px;
  padding: 0.4em;
`;

export const BookTitle = styled.h3`
  font-size: 1.1em;
`;

export const BookAuthor = styled.span`
  font-size: 0.87em;
  color: #7b7b7b;
`;

export const Image = styled.img`
  width: 78%;
  height: 11em;
  object-fit: cover;
  margin-inline: auto;
  border-radius: 5px;
`;

export const Price = styled.span`
  font-weight: 500;
  font-size: 1.1em;
`;
