import { IRoute } from "@base/@types/route";
import { Navigate } from "react-router-dom";

export default [
  {
    route: "/private",
    element: <div>privado</div>,
  },
  {
    route: "*",
    element: <Navigate to="/" />,
  },
] as IRoute[];
