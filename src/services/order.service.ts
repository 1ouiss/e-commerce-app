import { Order, Orders } from "@/types/orders/orders.types";
import instance from "./api.service";

const endPoint = "/orders";

const getAllOrders = async (): Promise<Orders> => {
  const orders = await instance.get(endPoint);
  return orders.data;
};

const getOrderById = async (id: number): Promise<Order> => {
  const order = await instance.get(`${endPoint}/${id}`);
  return order.data;
};

const createOrder = async (order: Order): Promise<Order> => {
  const newOrder = await instance.post(endPoint, order);
  return newOrder.data;
};

const addNewItemToOrder = async ({ id, item }: { id: number; item: any }) => {
  if (!id) {
    const order = await instance.post(`${endPoint}/${id}/items`, item);
    return order.data;
  } else {
    const order = await instance.post(`${endPoint}/items`, item);
    return order.data;
  }
};

const OrderService = {
  getAllOrders,
  getOrderById,
  createOrder,
  addNewItemToOrder,
};

export default OrderService;
