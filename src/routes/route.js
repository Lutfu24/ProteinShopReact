import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Products from "../pages/Admin/Products/Products";
import Home from "../pages/Site/Home/Home";
import Brands from "../pages/Site/Brands/Brands";
import ProductDetail from "../pages/Site/ProductDetail/ProductDetail";
import SiteRoot from "../pages/Site/SiteRoot/SiteRoot";
import AdminRoot from "../pages/Admin/AdminRoot/AdminRoot";

export const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "brands",
        element: <Brands />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
];
