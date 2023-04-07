import { OrderItemCreate, OrderItems } from "../orderItems/orderItems.types";
import { User } from "../users/users.types";

export type Order = {
  id: number;
  status: string;
  amount: number;
  user: User | number | any;
  orderItems: OrderItems | any;
};

export type Orders = Order[];

export type OrderCreate = {
  status: string;
  amount: number;
  user: number;
  orderItems: OrderItemCreate[];
};
