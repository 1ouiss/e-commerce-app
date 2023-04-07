import { Products } from "../products/products.types";

export type Categorie = {
  id: number;
  title: string;
  description: string;
  products: Products;
};

export type Categories = Categorie[];

export type CategorieCreate = {
  title: string;
  description: string;
};
