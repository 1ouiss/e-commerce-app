import { UserContext } from "@/context/UserContext";
import OrderService from "@/services/order.service";
import { OrderItem } from "@/types/orderItems/orderItems.types";
import { Order } from "@/types/orders/orders.types";
import { useContext } from "react";

const Cart = () => {
  const { order, setOrder, token } = useContext(UserContext);

  return (
    <section>
      <h1>Cart</h1>
      {order && (
        <div>
          <p>{order.id}</p>
          <p>{order.status}</p>
          <p>{order.amount}</p>
          {order.orderItems.map((item: OrderItem) => (
            <div key={item.id}>
              <p>{item.product.title}</p>
              <p>{item.quantity}</p>
              <p>
                {item.product.price} x {item.quantity} ={" "}
                {item.product.price * item.quantity}
              </p>
            </div>
          ))}
        </div>
      )}
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
