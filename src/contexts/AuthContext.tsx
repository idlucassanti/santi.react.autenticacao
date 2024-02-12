import { ReactNode, createContext } from "react";

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
    console.log({ email, password })
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}