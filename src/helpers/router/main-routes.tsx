import MainLayout from "components/layouts/main-layout/main-layout.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const MainRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRoutes;
