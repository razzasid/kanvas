import { createBrowserRouter } from "react-router";

import RootLayout from "../layouts/RootLayout";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import signInAction from "@/services/signInAction";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
        action: signInAction,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
