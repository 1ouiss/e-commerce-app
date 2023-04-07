import CategoryCard from "@/components/CategoryCard";
import CategoryService from "@/services/categories.service";
import { Categories } from "@/types/categories/categories.types";

const Categories = ({ categories }: { categories: Categories }) => {
  return (
    <section>
      <h1>Categories</h1>
      {categories.map((categorie) => (
        <CategoryCard key={categorie.id} category={categorie} />
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
