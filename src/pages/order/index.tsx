import OrderService from "@/services/order.service";
import { Order } from "@/types/orders/orders.types";

const Cart = ({ order }: { order: Order }) => {
  console.log(order);

  return (
    <section>
      <h1>Cart</h1>
      <p>{order.id}</p>
      <p>{order.status}</p>
      <p>{order.amount}</p>
    </section>
  );
};

export default Cart;

export const getStaticProps = async () => {
  const order = await OrderService.getOrderById(1);

  return {
    props: {
      order,
    },
  };
};
