import CategoryService from "@/services/categories.service";
import { CategorieCreate } from "@/types/categories/categories.types";
import { useState } from "react";

const CreateCategorie = () => {
  const [category, setCategory] = useState<CategorieCreate>({
    title: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const categoryCreated = await CategoryService.createCategory(category);
    console.log(categoryCreated);
  };
  return (
    <div>
      <h1>Créer une catégorie</h1>
      <form>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            onChange={(e) => handleChange(e)}
            name="title"
          />
          <label htmlFor="floatingInput">Nom de la catégorie</label>
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
          <label htmlFor="floatingTextarea2">Description de la catégorie</label>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        >
          Créer
        </button>
      </form>
    </div>
  );
};

export default CreateCategorie;
