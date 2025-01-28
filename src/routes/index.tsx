import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Login from "../pages/Auth/Login";

// LAZY LOADING
const HomeLayout: React.FC = lazy(() => import("../pages/home/HomeLayout"));

// ROUTES
const routes = [
  {
    path: "/",
    index: true,
    element: <HomeLayout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default memo(function AppRoutes() {
  const routing = useRoutes(routes);
  return routing;
});
