import { UserContext } from "@/context/UserContext";
import Link from "next/link";
import { useContext } from "react";

const OrderValidate = () => {
  const { token, order } = useContext(UserContext);
  return (
    <div>
      <h1>Votre commande est bien validé</h1>
      <p>
        Vous allez recevoir un mail de confirmation à l'addresse :{" "}
        {order?.user.email}
      </p>
      <Link
        href={{
          pathname: "/",
        }}
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default OrderValidate;
