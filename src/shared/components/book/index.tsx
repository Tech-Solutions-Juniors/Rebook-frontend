import { IBook } from "@base/@types/book";
import {
  BookAuthor,
  BookContent,
  BookTitle,
  Header,
  Image,
  Price,
} from "./components";

interface Props {
  data: IBook;
}
type ICategories = {
  [index: string]: string;
};

const categories: ICategories = {
  new: "EBOOK NOVO",
  used: "EBOOK USADO",
  exchange: "EBOOK TROCA",
};

const Book = ({ data }: Props) => {
  return (
    <BookContent>
      <Header>{categories[data.category]}</Header>
      <div className="content">
        <Image src={data.image} />
        <div className="titkt">
          <BookTitle>{data.title}</BookTitle>
          <BookAuthor>{data.author}</BookAuthor>
        </div>
        <div className="price">
          <Price>R$ {data.price}</Price>
        </div>
      </div>
    </BookContent>
  );
};

export default Book;
