import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";

// LAZY LOADING
const HomeLayout: React.FC = lazy(() => import("@/pages/home/HomeLayout"));
const Login: React.FC = lazy(() => import("@/pages/auth/Login"));
const NotFound: React.FC = lazy(() => import("@/pages/not-found"));

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
