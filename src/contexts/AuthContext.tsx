import { ReactNode, createContext, useEffect, useState } from "react";
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
  id: number;
  email: string;
  roles: string;
  name: string;
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
  useEffect(() => {
    var email = localStorage.getItem('auth.email');
    var password = localStorage.getItem('auth.password');

    if(email && password) {
      api.post('Authentication', {
        email,
        password
      }).then(response => {
        const { id, email, name, permissions, roles } = response.data;

        setUser({
          id,
          email,
          name,
          permissions,
          roles
        });
      });
    }
  }, []);

  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInCredentails) {
    try {
      // 5°
      const response = await api.post('Authentication', {
        email,
        password
      });

      const { id, token, name, refreshToken, permissions, roles } = response.data;

      localStorage.setItem('auth.token', token);
      localStorage.setItem('auth.refreshToken', refreshToken);
      localStorage.setItem('auth.email', email);
      localStorage.setItem('auth.password', password);

      setUser({
        id,
        email,
        name,
        permissions,
        roles
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      console.log(user);

      return true;

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