import ThueSimVip from "../pages/ThueSimVip";
import DinhGiaSim4 from "../pages/DinhGiaSim4";
import CamSimDep from "../pages/CamSimDep";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "thuesimvip", element: <ThueSimVip /> },
      { path: "dinhgiasim4", element: <DinhGiaSim4 /> },
      { path: "camsimdep", element: <CamSimDep /> },
    ],
  },
]);
