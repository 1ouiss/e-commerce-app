import OrderList from "@/components/OrderList";
import OrderService from "@/services/order.service";
import { Orders } from "@/types/orders/orders.types";
import Link from "next/link";
import { useRouter } from "next/router";

const AdminPage = ({ orders }: { orders: Orders }) => {
  const router = useRouter();
  return (
    <div>
      <h1>Admin Page</h1>
      <div>
        <button
          type="button"
          className="btn btn-outline-primary m-5"
          onClick={() => router.push("/admin/products")}
        >
          Voir les produits
        </button>
        <button
          type="button"
          className="btn btn-outline-primary m-5"
          onClick={() => router.push("/admin/categories")}
        >
          Voir les catégories
        </button>
      </div>
      <div>
        <h2>Les commandes</h2>
        <OrderList orders={orders} />
      </div>
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
