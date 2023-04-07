import CategoryService from "@/services/categories.service";
import { Categorie } from "@/types/categories/categories.types";

const CategoryDetail = ({ category }: { category: Categorie }) => {
  return (
    <div>
      <h1>Category Detail</h1>
      <h2>{category.title}</h2>

      <p>{category.description}</p>

      {category.products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryDetail;

export const getStaticPaths = async () => {
  const categories = await CategoryService.getAllCategories();
  const paths = categories.map((categorie) => ({
    params: { id: categorie.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: any }) => {
  const category = await CategoryService.getCategory(params.id);
  return {
    props: {
      category,
    },
  };
};
