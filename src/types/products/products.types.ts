import { Categorie } from "../categories/categories.types";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: Categorie | any;
};

export type Products = Product[];

export type ProductCreate = {
  title: string;
  description: string;
  price: number;
  category: number;
};
