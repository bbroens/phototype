import "./app.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Aside from "./components/aside/Aside";
import { ReactNode, useContext } from "react";
import { ThemeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  const AppLayout = () => {
    return (
      <div className={`theme-${theme}`}>
        <Header />
        <div data-testid="layout" className="layoutContainer">
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
    if (!currentUser.user_id) {
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
        {
          path: "/profile/:id",
          element: <Profile />,
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
