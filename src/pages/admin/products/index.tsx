import ProductService from "@/services/product.service";
import { Products } from "@/types/products/products.types";
import Link from "next/link";
import { useRouter } from "next/router";

const ProductPageAdmin = ({ products }: { products: Products }) => {
  const router = useRouter();

  return (
    <>
      <h1>Product Page Admin</h1>
      <button
        type="button"
        className="btn btn-outline-primary m-5"
        onClick={() => router.push("/admin/products/create")}
      >
        Créer un nouveau produit
      </button>
      <p>Products:</p>
      <ul>
        {products.map((product) => (
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>

              <button
                className="btn btn-primary"
                onClick={async () => {
                  await ProductService.deleteProduct(product.id);

                  setTimeout(() => {
                    router.reload();
                  }, 1000);
                }}
              >
                Supprimer le produit
              </button>
            </div>
          </div>
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
