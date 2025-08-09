import LoginPage from "@/pages/auth/loginPage";
import RegisterPage from "@/pages/auth/registerPage";
import ProfilePage from "@/pages/profile/profile";
import StartPage from "@/pages/StartPage/StartPage";
import type { ReactElement } from "react";

interface appRoute {
  path: string;
  element: ReactElement;
  name: string;
}

export const appRoutes: appRoute[] = [
  {
    path: "/",
    element: <StartPage />,
    name: "StartPage",
  },
  {
    path: "/login",
    element: <LoginPage />,
    name: "LoginPage",
  },
  {
    path: "/register",
    element: <RegisterPage />,
    name: "RegisterPage",
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    name: "RegisterPage",
  },
];
