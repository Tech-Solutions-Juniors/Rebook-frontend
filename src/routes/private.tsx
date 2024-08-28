import { IRoute } from "@base/@types/route";
import Home from "@base/pages/home/Home";
import { Navigate } from "react-router-dom";

export default [
  {
    route: "/",
    element: <Home />,
  },
  {
    route: "*",
    element: <Navigate to="/" />,
  },
] as IRoute[];
