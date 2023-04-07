import ProductService from "@/services/product.service";
import { Products } from "@/types/products/products.types";
import Link from "next/link";

const Products = ({ products }: { products: Products }) => {
  const addToCart = (id: number) => {
    console.log(id);
  };
  return (
    <section>
      <h1>Products</h1>
      {products.map((product) => (
        <Link
          href={{
            pathname: "/products/[id]",
            query: { id: product.id },
          }}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Products;

export const getStaticProps = async () => {
  const products = await ProductService.getAllProducts();
  return {
    props: {
      products,
    },
  };
};
