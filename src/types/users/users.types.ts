import { Orders } from "../orders/orders.types";

export type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  address: string;
  orders: Orders;
};

export type Users = User[];

export type UserCreate = {
  username: string;
  email: string;
  password: string;
  address: string;
};

export type UserConnect = {
  email: string;
  password: string;
};
