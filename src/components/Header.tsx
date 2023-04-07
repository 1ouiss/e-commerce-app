import { UserContext } from "@/context/UserContext";
import Link from "next/link";
import { useContext } from "react";

const Header = () => {
  const { order } = useContext(UserContext);

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
              {order && order.orderItems.length > 0
                ? order.orderItems.length
                : 0}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
