import ProductService from "@/services/product.service";
import { Products } from "@/types/products/products.types";

const Products = ({ products }: { products: Products }) => {
  const addToCart = (id: number) => {
    console.log(id);
  };
  return (
    <section>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              console.log(product.id);
            }}
          >
            AddToCart
          </button>
        </div>
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
