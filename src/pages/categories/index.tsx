import CategoryService from "@/services/categories.service";
import { Categories } from "@/types/categories/categories.types";

const Categories = ({ categories }: { categories: Categories }) => {
  return (
    <section>
      <h1>Categories</h1>
      {categories.map((categorie) => (
        <div key={categorie.id}>
          <h2>{categorie.title}</h2>
          <p>{categorie.description}</p>
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
