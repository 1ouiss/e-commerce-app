import OrderService from "@/services/order.service";
import { Orders } from "@/types/orders/orders.types";
import Link from "next/link";

const AdminPage = ({ orders }: { orders: Orders }) => {
  return (
    <div>
      <h1>Admin Page</h1>
      <div>
        <Link href="/admin/products">Voir les produits</Link>
        <Link href="/admin/categories">Voir les catégories</Link>
      </div>
      {orders.map((order) => (
        <div key={order.id}>
          <p>{order.id}</p>
          <p>{order.status}</p>
          <p>{order.amount}</p>
          <p>{order.user.username}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminPage;

export const getStaticProps = async () => {
  const orders = await OrderService.getAllOrders();

  return {
    props: {
      orders,
    },
  };
};
