import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login/loginPage";
import { HomePage } from "./pages/home/homePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/home",
    element: <HomePage />
  },
]);