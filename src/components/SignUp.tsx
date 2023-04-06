import AuthService from "@/services/auth.service";
import { UserCreate } from "@/types/users/users.types";
import { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState<UserCreate>({
    email: "",
    password: "",
    username: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (user.email === "" || user.password === "" || user.username === "")
      return alert("Veuillez remplir tous les champs");
    else {
      const userCreated = await AuthService.register(user);
      console.log(userCreated);
    }
  };

  return (
    <div>
      <h1>SignUp</h1>
      <form className="d-flex flex-column justify-content-center w-25 m-auto">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            onChange={(e) => handleChange(e)}
            name="username"
            value={user.username}
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            onChange={(e) => handleChange(e)}
            name="email"
            value={user.email}
          />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingInput"
            onChange={(e) => handleChange(e)}
            name="password"
            value={user.password}
          />
          <label htmlFor="floatingInput">Password</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            onChange={(e) => handleChange(e)}
            name="address"
            value={user.address}
          />
          <label htmlFor="floatingInput">Addresse</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
