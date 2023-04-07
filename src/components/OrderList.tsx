import { Orders } from "@/types/orders/orders.types";

const OrderList = ({ orders }: { orders: Orders }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Username</th>
          <th scope="col">Nombre de produits</th>
          <th scope="col">Statut</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <th scope="row">{order.id}</th>
            <td>{order.user.username}</td>
            <td>{order.orderItems.length}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderList;
