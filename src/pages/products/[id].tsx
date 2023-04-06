import ProductService from "@/services/product.service";
import { Product } from "@/types/products/products.types";

const Product = ({ product }: { product: Product }) => {
  return (
    <div>
      <h1>Product</h1>
      <h2>{product.title}</h2>
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

export const getStaticProps = async ({ params }: { params: any }) => {
  const product = await ProductService.getProductById(params.id);
  return {
    props: {
      product,
    },
  };
};
