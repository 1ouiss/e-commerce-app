import { Product } from "@/types/products/products.types";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="https://placehold.co/400" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <Link
          href={{
            pathname: "/products/[id]",
            query: { id: product.id },
          }}
          className="btn btn-primary"
        >
          Voir le produit
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
