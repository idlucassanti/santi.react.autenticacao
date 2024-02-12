import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";

// 2°
type AuthContextData = {
  signIn(credentials: SignInCredentails): Promise<boolean>;
  isAuthenticated: boolean;
  user: User | undefined;
}

// 3°
type SignInCredentails = {
  email: string;
  password: string;
}

// 6°
type User = {
  email: string;
  roles: string;
  permissions: string[];
}

// 1°
export const AuthContext = createContext({} as AuthContextData);

// 5°
type AuthProviderProps = {
  children: ReactNode;
}


// 4°
export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInCredentails) {
    try {
      // 5°
      // const response = await api.post('autenticacao', {
      //   email,
      //   password
      // });

      // const { permissions, roles } = response.data;

      var permissions = ["get", "post", "update"];
      var roles = "Adminstrador";

      setUser({
        email,
        permissions,
        roles
      })

      return true;
  
      // console.log(response.data);
    } catch(error) {
      console.log(error)
      return false;
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}