import { useRoutes } from "react-router-dom";
import { Login } from "../components/Login";
import { Dashboard } from "../pages/dashboard/Dashboard";

export function AppRoutes() {
  const router = useRoutes([
    {
      path: "/",
      element: <Login children={undefined} />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

  return router;
}
