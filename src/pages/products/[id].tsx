import { UserContext } from "@/context/UserContext";
import OrderService from "@/services/order.service";
import ProductService from "@/services/product.service";
import { OrderCreate } from "@/types/orders/orders.types";
import { Product } from "@/types/products/products.types";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { OrderItem } from "@/types/orderItems/orderItems.types";
import { Params } from "@/types/params/params.types";

const Product = ({ product }: { product: Product }) => {
  const { order, setOrder, token } = useContext(UserContext);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const [notLogged, setNotLogged] = useState(false);

  const addToCart = async (id: number) => {
    if (token) {
      if (order) {
        const productInOrder = order.orderItems.find(
          (item: OrderItem) => item.product.id === id
        );
        if (productInOrder) {
          console.log("product in order");
          const newProductUpdated = {
            ...productInOrder,
            quantity: productInOrder.quantity + quantity,
          };

          const orderUpdated = await OrderService.updateOrder(order.id, {
            ...order,
            orderItems: [
              ...order.orderItems.filter(
                (item: OrderItem) => item.product.id !== id
              ),
              newProductUpdated,
            ],
            amount: order.amount + product.price * quantity,
            user: token.id,
          });

          setOrder(orderUpdated);
        } else {
          const orderUpdated = await OrderService.updateOrder(order.id, {
            ...order,
            orderItems: [
              ...order.orderItems,
              {
                product: product,
                quantity,
              },
            ],
            amount: order.amount + product.price * quantity,
            user: token.id,
          });
          setOrder(orderUpdated);
        }
      } else {
        const newOrder: OrderCreate = {
          status: "pending",
          orderItems: [
            {
              product: product,
              quantity,
            },
          ],
          amount: product.price * quantity,
          user: token.id,
        };
        const newOrderCreated = await OrderService.createOrder(newOrder);
        setOrder(newOrderCreated);
      }
    } else {
      console.log("not logged in");
      setNotLogged(true);
    }
  };
  return (
    <div>
      <h1>Product</h1>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          addToCart(product.id);
        }}
      >
        AddToCart
      </button>
      {notLogged && (
        <div>
          <p>Vous devez être connecté pour ajouter un produit au panier</p>
          <button
            className="btn btn-primary"
            onClick={() => router.push("/account")}
          >
            Se connecter
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;

export const getStaticPaths = async () => {
  const products = await ProductService.getAllProducts();
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: Params }) => {
  const product = await ProductService.getProductById(params.id);
  return {
    props: {
      product,
      revalidate: 5,
    },
  };
};
