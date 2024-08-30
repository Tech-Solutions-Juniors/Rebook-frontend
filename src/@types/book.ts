export type ICategory = "new" | "used" | "exchange";

export type IBook = {
  id: number;
  category: ICategory;
  price: number;
  name: string;
  author: string;
  image: string;
  title: string;
};
