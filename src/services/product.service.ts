import {
  Product,
  ProductCreate,
  Products,
} from "@/types/products/products.types";
import instance from "./api.service";

const endPoint = "/products";

const getAllProducts = async (): Promise<Products> => {
  const products = await instance.get(endPoint);
  return products.data;
};

const getLastProducts = async (): Promise<Products> => {
  const products = await instance.get(`${endPoint}/last`);
  return products.data;
};

const getProductById = async (id: number): Promise<Product> => {
  const product = await instance.get(`${endPoint}/${id}`);
  console.log(product.data);

  return product.data;
};

const createProduct = async (product: ProductCreate): Promise<Product> => {
  const productDb = await instance.post(endPoint, product);
  return productDb.data;
};

const updateProduct = async (product: Product): Promise<Product> => {
  const productDb = await instance.put(`${endPoint}/${product.id}`, product);
  return productDb.data;
};

const deleteProduct = async (id: number): Promise<Product> => {
  const product = await instance.delete(`${endPoint}/${id}`);
  return product.data;
};

const ProductService = {
  getAllProducts,
  createProduct,
  getLastProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};

export default ProductService;
