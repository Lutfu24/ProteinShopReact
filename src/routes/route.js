import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Products from "../pages/Admin/Products/Products";
import Home from "../pages/Site/Home/Home";
import Brands from "../pages/Site/Brands/Brands";
import ProductDetail from "../pages/Site/ProductDetail/ProductDetail";
import Gainer from "../pages/Site/Gainer/Gainer";
import Protein from "../pages/Site/Protein/Protein";
import SportFood from "../pages/Site/SportFood/SportFood";
import Amino from "../pages/Site/Amino/Amino";
import Creatin from "../pages/Site/Creatin/Creatin";
import Vitamin from "../pages/Site/Vitamin/Vitamin";
import Slimm from "../pages/Site/Slimm/Slimm";
import Login from "../pages/Site/Login/Login";
import SiteRoot from "../pages/Site/SiteRoot/SiteRoot";
import AdminRoot from "../pages/Admin/AdminRoot/AdminRoot";
import User from "../pages/Site/Login/User";
import BCAA from "../pages/Site/BCAA/BCAA";
import Cart from "../pages/Site/Cart/Cart";

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
      {
        path: "catalog/gainerlər",
        element: <Gainer />,
      },
      {
        path: "catalog/proteinlər",
        element: <Protein />,
      },
      {
        path: "catalog/idman-qidaları",
        element: <SportFood />,
      },
      {
        path: "catalog/aminoturşular",
        element: <Amino />,
      },
      {
        path: "catalog/kreatinlər",
        element: <Creatin />,
      },
      {
        path: "catalog/vitamins-and-minerals",
        element: <Vitamin />,
      },
      {
        path: "catalog/yağ-yandıranlar",
        element: <Slimm />,
      },
      {
        path: "catalog/bcaa",
        element: <BCAA />,
      },
      {
        path: "user/login",
        element: <Login />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/cart",
        element: <Cart />,
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
