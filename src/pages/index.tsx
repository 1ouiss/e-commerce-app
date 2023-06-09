import Head from "next/head";
import { Inter } from "next/font/google";
import ProductService from "@/services/product.service";
import { Product, Products } from "@/types/products/products.types";
import { useContext, useEffect } from "react";
import TokenService from "@/services/token.service";
import { UserContext } from "@/context/UserContext";
import UserService from "@/services/user.service";
import { Order } from "@/types/orders/orders.types";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import CategoryService from "@/services/categories.service";
import { Categories } from "@/types/categories/categories.types";
import { useRouter } from "next/router";
import CategoryCard from "@/components/CategoryCard";

export default function Home({
  products,
  categories,
}: {
  products: Products;
  categories: Categories;
}) {
  const router = useRouter();
  const { setToken, token, setOrder } = useContext(UserContext);

  useEffect(() => {
    const tokenLocal: any = TokenService.getUserFromLocalToken();
    if (tokenLocal) {
      console.log("token", tokenLocal);
      setToken(tokenLocal);
    }
  }, []);

  const getOrderInUser = async () => {
    if (token) {
      console.log("token", token);
      const user = await UserService.getOneUser(token.id);
      if (user) {
        console.log("user", user);
        const orderActive = user.orders.find(
          (order: Order) => order.status === "pending"
        );
        if (orderActive) {
          setOrder(orderActive);
        }
      }
    }
  };

  useEffect(() => {
    getOrderInUser();
  }, [token]);

  return (
    <>
      <Head>
        <title>Louis Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <h5>Les 3 derniers produits</h5>
          <div className="d-flex justify-content-around">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button
              className="btn btn-primary m-auto"
              onClick={() => {
                router.push("/products");
              }}
            >
              Voir tous les produits
            </button>
          </div>
        </section>

        <section>
          <h5>Les 3 dernières catégories</h5>
          <div className="d-flex justify-content-around">
            {categories.slice(0, 3).map((categorie) => (
              <CategoryCard key={categorie.id} category={categorie} />
            ))}
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button
              className="btn btn-primary m-auto"
              onClick={() => {
                router.push("/categories");
              }}
            >
              Voir toutes les catégories
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const products = await ProductService.getLastProducts();
  const categories = await CategoryService.getAllCategories();

  return {
    props: {
      products: products,
      categories: categories,
      revalidate: 60,
    },
  };
};
