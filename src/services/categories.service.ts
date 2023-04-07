import {
  CategorieCreate,
  Categories,
} from "@/types/categories/categories.types";
import instance from "./api.service";

const endPoint = "/categories";

const getAllCategories = async (): Promise<Categories> => {
  const categories = await instance.get(endPoint);
  return categories.data;
};

const getCategory = async (id: number): Promise<Categories> => {
  const category = await instance.get(`${endPoint}/${id}`);
  return category.data;
};

const createCategory = async (data: CategorieCreate) => {
  const category = await instance.post(endPoint, data);
  return category.data;
};

const deleteCategory = async (id: number) => {
  const category = await instance.delete(`${endPoint}/${id}`);
  return category.data;
};

const CategoryService = {
  getAllCategories,
  createCategory,
  getCategory,
  deleteCategory,
};

export default CategoryService;
