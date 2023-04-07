import { Props, Token, UserContextType } from "@/types/context/context.types";
import { Order } from "@/types/orders/orders.types";
import { User } from "@/types/users/users.types";
import { FC, useState } from "react";
import { createContext } from "react";

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
  order: null,
  setOrder: () => {},
});

const UserProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<Token | null>(null);
  const [order, setOrder] = useState<Order | null>(null);

  return (
    <UserContext.Provider
      value={{ user, setUser, token, setToken, order, setOrder }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
