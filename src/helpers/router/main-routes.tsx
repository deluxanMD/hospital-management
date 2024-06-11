import MainLayout from "components/layouts/main-layout/main-layout.component";
import Dashboard from "pages/dashboard/dashboard.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const MainRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRoutes;
