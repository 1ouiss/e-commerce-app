import CategoryService from "@/services/categories.service";
import ProductService from "@/services/product.service";
import { Categories } from "@/types/categories/categories.types";
import { ProductCreate } from "@/types/products/products.types";
import { useEffect, useState } from "react";

const Products = () => {
  const [categories, setCategories] = useState<Categories | null>(null);

  const [product, setProduct] = useState<ProductCreate>({
    title: "",
    description: "",
    price: 0,
    category: 0,
  });

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const categories = await CategoryService.getAllCategories();
    setCategories(categories);
  };

  const handleChangeCategory = (
    e: React.ChangeEvent<HTMLInputElement>,
    category: number
  ) => {
    setProduct({ ...product, category: category });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (
      product.title === "" ||
      product.description === "" ||
      product.price === 0 ||
      product.category === 0
    )
      return alert("Veuillez remplir tous les champs");
    else {
      product.price = Number(product.price);
      const productCreated = await ProductService.createProduct(product);
      console.log(productCreated);
    }
  };

  return (
    <>
      <form>
        {categories &&
          categories.map((category) => (
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onChange={(e) => {
                  handleChangeCategory(e, category.id);
                }}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                {category.title}
              </label>
            </div>
          ))}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            onChange={(e) => handleChange(e)}
            name="title"
          />
          <label htmlFor="floatingInput">Nom du produit</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => handleChange(e)}
            name="price"
          />
          <label htmlFor="floatingInput">Prix du produit</label>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            onChange={(e) => handleChange(e)}
            name="description"
          ></textarea>
          <label htmlFor="floatingTextarea2">Description du produit</label>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Products;
