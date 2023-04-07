import { Categorie } from "@/types/categories/categories.types";
import { useRouter } from "next/router";

const CategoryCard = ({ category }: { category: Categorie }) => {
  const router = useRouter();
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{category.title}</h5>
        <p className="card-text">{category.description}</p>

        <button
          className="btn btn-primary"
          onClick={() => router.push(`/categories/${category.id}`)}
        >
          Voir la catégorie
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
