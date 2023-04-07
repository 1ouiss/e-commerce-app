import ProductCard from "@/components/ProductCard";
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
        <ProductCard key={product.id} product={product} />
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
