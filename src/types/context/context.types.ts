import { ReactNode } from "react";
import { User } from "../users/users.types";
import { Order } from "../orders/orders.types";

export type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  token: string | null;
  setToken: (token: string | null) => void;
  order: Order | null;
  setOrder: (order: Order) => void;
};

export type Props = {
  children: ReactNode;
};
