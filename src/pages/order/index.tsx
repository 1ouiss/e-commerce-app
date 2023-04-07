import { UserContext } from "@/context/UserContext";
import OrderService from "@/services/order.service";
import { OrderItem } from "@/types/orderItems/orderItems.types";
import { useRouter } from "next/router";
import { useContext } from "react";

const Cart = () => {
  const { order, setOrder, token } = useContext(UserContext);

  const router = useRouter();
  return (
    <section>
      <h1>Panier</h1>
      {order ? (
        <div className="w-75 m-auto">
          <table className="table mt-5">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nom du produit</th>
                <th scope="col">Quantité</th>
                <th scope="col">Prix</th>
              </tr>
            </thead>
            <tbody>
              {order.orderItems.map((item: OrderItem) => (
                <tr key={item.id}>
                  <th scope="row">{item.product.id}</th>
                  <th>{item.product.title}</th>
                  <td>{item.quantity}</td>
                  <td>
                    {item.product.price} x {item.quantity} ={" "}
                    {item.product.price * item.quantity} €
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-5 mb-5">
            <h6>Statut: {order.status}</h6>
            <h3>Total: {order.amount} €</h3>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={async () => {
              const orderUpdated = await OrderService.updateOrder(order.id, {
                ...order,
                status: "paid",
                user: token?.id,
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
