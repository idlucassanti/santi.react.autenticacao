import { ReactNode, createContext } from "react";
import { api } from "../services/api";

// 2°
type AuthContextData = {
  signIn(credentials: SignInCredentails): Promise<void>;
  isAuthenticated: boolean;
}

// 3°
type SignInCredentails = {
  email: string;
  password: string;
}

// 1°
export const AuthContext = createContext({} as AuthContextData);

// 5°
type AuthProviderProps = {
  children: ReactNode;
}


// 4°
export function AuthContextProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false;

  async function signIn({ email, password }: SignInCredentails) {
    try {
      const response = await api.post('autenticacao', {
        email,
        password
      });
  
      console.log(response.data);
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}