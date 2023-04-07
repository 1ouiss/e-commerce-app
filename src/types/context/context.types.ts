import { ReactNode } from "react";
import { User } from "../users/users.types";
import { Order } from "../orders/orders.types";

export type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  token: Token | null;
  setToken: (token: Token | null) => void;
  order: Order | null;
  setOrder: (order: Order) => void;
};

export type Props = {
  children: ReactNode;
};

export type Token = {
  id: number;
  email: string;
  iat: number;
  exp: number;
};
