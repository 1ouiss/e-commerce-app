import ProductService from "@/services/product.service";
import { Products } from "@/types/products/products.types";
import Link from "next/link";

const ProductPageAdmin = ({ products }: { products: Products }) => {
  return (
    <>
      <h1>Product Page Admin</h1>
      <Link
        href={{
          pathname: "/admin/products/create",
        }}
      >
        Create Product
      </Link>
      <p>Products:</p>
      <ul>
        {products.map((product) => (
          <Link
            href={{
              pathname: `/admin/products/${product.id}`,
            }}
          >
            <li key={product.id}>{product.title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default ProductPageAdmin;

export const getStaticProps = async () => {
  const products = await ProductService.getAllProducts();
  return {
    props: {
      products,
    },
  };
};
