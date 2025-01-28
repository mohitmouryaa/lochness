import React from "react";
import { useRoutes } from "react-router-dom";

// LAZY LOADING
const HomeLayout = React.lazy(() => import("../pages/home/HomeLayout"));

// ROUTES
const routes = [
  {
    path: "/",
    element: <HomeLayout />,
  },
];

export default React.memo(function AppRoutes() {
  const routing = useRoutes(routes);
  return routing;
});
