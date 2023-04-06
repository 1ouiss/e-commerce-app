import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import { useState } from "react";

const Account = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div>
      <h1>Account</h1>
      {isSignIn ? <SignIn /> : <SignUp />}
      {isSignIn ? (
        <button className="btn btn-primary" onClick={() => setIsSignIn(false)}>
          S'inscrire
        </button>
      ) : (
        <button className="btn btn-primary" onClick={() => setIsSignIn(true)}>
          Se connecter
        </button>
      )}
    </div>
  );
};

export default Account;
