import ThueSimVip from "../pages/ThueSimVip";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import Admin from "../pages/admin/Admin";
import AdminOrder from "../pages/admin/AdminOrder";
import Login from "../pages/admin/Login";
import AdminHome from "../pages/admin/AdminHome";
import PushSim from "../pages/admin/PushSim";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "thuesimvip", element: <ThueSimVip /> },
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
      { path: "push_sim", element: <PushSim /> },
    ],
  },
]);
