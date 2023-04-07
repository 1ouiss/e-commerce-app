import CategoryService from "@/services/categories.service";
import { Categorie } from "@/types/categories/categories.types";

const DetailCategorie = ({ categorie }: { categorie: Categorie }) => {
  return (
    <div>
      <h1>Detail Categorie</h1>
      <p>{categorie.title}</p>
      <p>{categorie.description}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={async () => {
          const categoryDeleted = await CategoryService.deleteCategory(
            categorie.id
          );
          console.log(categoryDeleted);
        }}
      >
        Supprimer
      </button>
      <div>
        {categorie.products.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailCategorie;

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
  const categorie = await CategoryService.getCategory(params.id);

  return {
    props: {
      categorie,
    },
  };
};
