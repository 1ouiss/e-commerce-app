import { UserContext } from "@/context/UserContext";
import OrderService from "@/services/order.service";
import { Order } from "@/types/orders/orders.types";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const Header = () => {
  const [order, setOrder] = useState<Order | null>(null);
  const [orderId, setOrderId] = useState<number | null>(null);

  const getOrder = async (id: number) => {
    const order = await OrderService.getOrderById(id);
    setOrder(order);
  };

  useEffect(() => {
    if (orderId) {
      getOrder(orderId);
    }
  }, [orderId]);

  const { token } = useContext(UserContext);

  useEffect(() => {
    if (token) {
    }
  }, []);

  return (
    <header>
      <h1>Louis Shop</h1>
      <nav>
        <Link href="/">Acceuil</Link>
        <Link href="/categories">Catégories</Link>
        <Link href="/products">Produits</Link>
        <Link href="/account">Mon compte</Link>
        <Link href="/order">
          <button
            type="button"
            className="btn btn-primary position-relative fs-5"
          >
            <i className="bi bi-cart"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {order && order.orderItems.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
