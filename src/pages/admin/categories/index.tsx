import CategoryService from "@/services/categories.service";
import { Categories } from "@/types/categories/categories.types";
import Link from "next/link";
import { useRouter } from "next/router";

const CategoriesPageAdmin = ({ categories }: { categories: Categories }) => {
  const router = useRouter();
  return (
    <>
      <h1>Categories Admin</h1>
      <Link
        href={{
          pathname: "/admin/categories/create",
        }}
      >
        Create Category
      </Link>
      <p>Categories :</p>
      <ul>
        {categories.map((category) => (
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{category.title}</h5>
              <p className="card-text">{category.description}</p>

              <button
                className="btn btn-primary"
                onClick={() => router.push(`/admin/categories/${category.id}`)}
              >
                Modifier la catégorie
              </button>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};

export default CategoriesPageAdmin;

export const getStaticProps = async () => {
  const categories = await CategoryService.getAllCategories();
  return {
    props: {
      categories,
    },
  };
};
