import { IRoute } from "@base/@types/route";
import Login from "@base/pages/login/Login";
import Register from "@base/pages/register";

export default [
  {
    route: "/signin",
    element: <Login />,
  },
  {
    route: "/register",
    element: <Register />,
  },
] as IRoute[];
