import { OrderItems } from "../orderItems/orderItems.types";
import { User } from "../users/users.types";

export type Order = {
  id: number;
  status: string;
  amount: number;
  user: User;
  orderItems: OrderItems;
};

export type Orders = Order[];
