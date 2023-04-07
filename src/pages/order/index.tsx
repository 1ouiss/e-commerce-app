import { UserContext } from "@/context/UserContext";
import OrderService from "@/services/order.service";
import { OrderItem } from "@/types/orderItems/orderItems.types";
import { useRouter } from "next/router";
import { useContext } from "react";

const Cart = () => {
  const { order, setOrder } = useContext(UserContext);

  const router = useRouter();
  return (
    <section>
      <h1>Panier</h1>
      {order ? (
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

          <button
            type="button"
            className="btn btn-primary"
            onClick={async () => {
              const orderUpdated = await OrderService.updateOrder(order.id, {
                ...order,
                status: "paid",
              });
              setOrder(orderUpdated);
              router.push("/order/validate");
            }}
          >
            Valider
          </button>
        </div>
      ) : (
        <p>Pas de panier</p>
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
