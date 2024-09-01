import React from "react";
import {
  BookList,
  CategoryItem,
  CategoryList,
  Container,
  ContentContainer,
  Header,
  SectionTitle,
} from "./components";
import { IBook } from "@base/@types/book";
import Book from "@base/shared/components/book";
import { useFetch } from "@base/shared/hook/useFetch";

interface Props {}

const categories = ["todos", "novos", "usados", "trocas"];

const Books: IBook[] = [
  {
    id: 10,
    author: "HG, walles",
    category: "new",
    image:
      "https://th.bing.com/th/id/OIP.LW9ZTVucsqhamFiLK_e1WgHaJ4?rs=1&pid=ImgDetMain",
    name: "The Recullent",
    price: 20.0,
    title: "The Recullent",
  },
  {
    id: 10,
    author: "HG, walles",
    category: "new",
    image:
      "https://th.bing.com/th/id/R.d96debb9dee2a2185935c763c026dde3?rik=P8vyNUVC1byvlQ&riu=http%3a%2f%2fdesignlooter.com%2fimages%2fbook-cover-svg-17.jpg&ehk=6H2hTT47y0jiSSJGG0dVeBIE2Is1SIO7RJ0Qg3vCmjo%3d&risl=&pid=ImgRaw&r=0",
    name: "The Recullent",
    price: 20.0,
    title: "The Recullent",
  },
  {
    id: 10,
    author: "HG, walles",
    category: "new",
    image:
      "https://th.bing.com/th/id/R.d96debb9dee2a2185935c763c026dde3?rik=P8vyNUVC1byvlQ&riu=http%3a%2f%2fdesignlooter.com%2fimages%2fbook-cover-svg-17.jpg&ehk=6H2hTT47y0jiSSJGG0dVeBIE2Is1SIO7RJ0Qg3vCmjo%3d&risl=&pid=ImgRaw&r=0",
    name: "The Recullent",
    price: 20.0,
    title: "The Recullent",
  },
  {
    id: 10,
    author: "HG, walles",
    category: "new",
    image:
      "https://th.bing.com/th/id/R.d96debb9dee2a2185935c763c026dde3?rik=P8vyNUVC1byvlQ&riu=http%3a%2f%2fdesignlooter.com%2fimages%2fbook-cover-svg-17.jpg&ehk=6H2hTT47y0jiSSJGG0dVeBIE2Is1SIO7RJ0Qg3vCmjo%3d&risl=&pid=ImgRaw&r=0",
    name: "The Recullent",
    price: 20.0,
    title: "The Recullent",
  },
  {
    id: 10,
    author: "HG, walles",
    category: "new",
    image:
      "https://th.bing.com/th/id/R.d96debb9dee2a2185935c763c026dde3?rik=P8vyNUVC1byvlQ&riu=http%3a%2f%2fdesignlooter.com%2fimages%2fbook-cover-svg-17.jpg&ehk=6H2hTT47y0jiSSJGG0dVeBIE2Is1SIO7RJ0Qg3vCmjo%3d&risl=&pid=ImgRaw&r=0",
    name: "The Recullent",
    price: 20.0,
    title: "The Recullent",
  },
];

const AllBooks: React.FC<Props> = () => {
  const { data } = useFetch<null, IBook[]>({
    fetcher: async () => Books,
    input: null,
  });

  return (
    <div>
      <Container>
        <ContentContainer>
          <Header>
            <SectionTitle>Todos</SectionTitle>
            <CategoryList>
              {categories.map((e) => (
                <CategoryItem key={e}>{e}</CategoryItem>
              ))}
            </CategoryList>
          </Header>
          <BookList>
            {data && data.map((e) => <Book data={e} key={e.id} />)}
          </BookList>
        </ContentContainer>
      </Container>
    </div>
  );
};

export default AllBooks;
