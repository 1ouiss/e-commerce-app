import CategoryService from "@/services/categories.service";
import ProductService from "@/services/product.service";
import { Categories } from "@/types/categories/categories.types";
import { Product } from "@/types/products/products.types";
import { useEffect, useState } from "react";

const ProductUpdate = ({ product }: { product: Product }) => {
  const [productState, setProductState] = useState<Product>({
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    category: product.category.id,
  });

  const [categories, setCategories] = useState<Categories | null>(null);

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
    setProductState({ ...productState, category: category });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProductState({ ...productState, [e.target.name]: e.target.value });
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
      productState.price = Number(productState.price);
      const productUpdated = await ProductService.updateProduct(productState);
      console.log(productUpdated);
    }
  };
  return (
    <>
      <h1>Product Update</h1>
      <form>
        {categories &&
          categories.map((category) => (
            <div className="form-check" key={category.id}>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onChange={(e) => {
                  handleChangeCategory(e, category.id);
                }}
                value={category.id}
                checked={productState.category === category.id}
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
            value={productState.title}
          />
          <label htmlFor="floatingInput">Nom du produit</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => handleChange(e)}
            name="price"
            value={productState.price}
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
            value={productState.description}
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

export default ProductUpdate;

export const getStaticPaths = async () => {
  const products = await ProductService.getAllProducts();
  console.log(products);

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }: { params: any }) => {
  const product = await ProductService.getProductById(params.id);
  console.log(product);

  return {
    props: {
      product,
    },
  };
};
