import React from "react";
import "./app.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Aside from "./components/aside/Aside";
import { ReactNode } from "react";

const App = () => {
  //TODO
  const currentUser = true;

  const AppLayout = () => {
    return (
      <div>
        <Header />
        <div className="layoutContainer">
          <Menu />
          <div className="layoutPage">
            <Outlet />
          </div>
          <Aside />
        </div>
      </div>
    );
  };

  type ProtectRouteProps = {
    children: ReactNode;
  };

  const ProtectedRoute = ({ children }: ProtectRouteProps) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return <>{children}</>;
  };

  // Have everything as protected auth route, except /login.
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
