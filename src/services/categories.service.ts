import { Categories } from "@/types/categories/categories.types";
import instance from "./api.service";

const endPoint = "/categories";

const getAllCategories = async (): Promise<Categories> => {
  const categories = await instance.get(endPoint);
  return categories.data;
};

const CategoryService = {
  getAllCategories,
};

export default CategoryService;
