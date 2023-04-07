import ProductCard from "@/components/ProductCard";
import CategoryService from "@/services/categories.service";
import { Categorie } from "@/types/categories/categories.types";
import { Params } from "@/types/params/params.types";

const CategoryDetail = ({ category }: { category: Categorie }) => {
  return (
    <div>
      <div className="d-flex flex-column w-100 align-items-center mb-5">
        <h2>{category.title}</h2>

        <p>{category.description}</p>
      </div>
      <div className="d-flex justify-content-center align-items-center ">
        {category.products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryDetail;

export const getStaticPaths = async () => {
  const categories = await CategoryService.getAllCategories();
  const paths = categories.map((categorie) => ({
    params: { id: categorie.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: Params }) => {
  const category = await CategoryService.getCategory(params.id);
  return {
    props: {
      category,
    },
  };
};
