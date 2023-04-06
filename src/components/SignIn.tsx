import { UserContext } from "@/context/UserContext";
import AuthService from "@/services/auth.service";
import TokenService from "@/services/token.service";
import { UserConnect } from "@/types/users/users.types";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

const SignIn = () => {
  const [user, setUser] = useState<UserConnect>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const { setToken } = useContext(UserContext);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (user.email === "" || user.password === "") {
      alert("Veuillez remplir tous les champs");
    } else {
      const userConnected = await AuthService.login(user);
      console.log(userConnected.access_token);
      if (userConnected.access_token) {
        setToken(userConnected.access_token);
        TokenService.setTokenInLocalStorage(userConnected.access_token);
        router.push("/");
      }
    }
  };

  return (
    <div>
      <h1>SignIn</h1>
      <form className="d-flex flex-column justify-content-center w-25 m-auto">
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
          <label htmlFor="floatingInput">Mot de passe</label>
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

export default SignIn;
