import { Order } from "../orders/orders.types";
import { Product } from "../products/products.types";

export type OrderItem = {
  id: number;
  quantity: number;
  product: Product;
  order: Order;
};

export type OrderItems = OrderItem[];
