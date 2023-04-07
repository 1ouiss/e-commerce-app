import CategoryService from "@/services/categories.service";
import { Categories } from "@/types/categories/categories.types";
import Link from "next/link";

const Categories = ({ categories }: { categories: Categories }) => {
  return (
    <section>
      <h1>Categories</h1>
      {categories.map((categorie) => (
        <div key={categorie.id}>
          <h2>{categorie.title}</h2>
          <p>{categorie.description}</p>
          <Link
            href={{
              pathname: "/categories/[id]",
              query: { id: categorie.id },
            }}
          >
            Voir le détail de la catégorie
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Categories;

export const getStaticProps = async () => {
  const categories = await CategoryService.getAllCategories();

  return {
    props: {
      categories,
    },
  };
};
