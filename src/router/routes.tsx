import ThueSimVip from "../pages/ThueSimVip";
import DinhGiaSim4 from "../pages/DinhGiaSim4";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import Admin from "../pages/admin/Admin";
import AdminOrder from "../pages/admin/AdminOrder";
import Login from "../pages/admin/Login";
import AdminHome from "../pages/admin/AdminHome";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "thuesimvip", element: <ThueSimVip /> },
      { path: "dinhgiasim4", element: <DinhGiaSim4 /> },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <AdminHome /> },
      { path: "order", element: <AdminOrder /> },
      { path: "login", element: <Login /> },
    ],
  },
]);
