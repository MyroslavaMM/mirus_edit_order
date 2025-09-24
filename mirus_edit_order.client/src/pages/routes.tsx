import { lazy } from "react";
const DefaultLayout = lazy(() => import("../components/layouts/DefaultLayout"));
const AdminPage = lazy(() => import("./adminPage/index"));
const CustomerPage = lazy(() => import("./customerPage/index"));
const pagesRoutes = [
  {
    path: "",
    element: <DefaultLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminPage />,
      },
      {
        path: "/customer",
        element: <CustomerPage />,
      },
    ],
  },
];

export const routes = () => {
  return pagesRoutes;
};
