import CategoryService from "@/services/categories.service";
import { Categories } from "@/types/categories/categories.types";
import Link from "next/link";

const CategoriesPageAdmin = ({ categories }: { categories: Categories }) => {
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
          <Link
            href={{
              pathname: `/admin/categories/${category.id}`,
            }}
          >
            <li key={category.id}>{category.title}</li>
          </Link>
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
