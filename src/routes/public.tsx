import { IRoute } from "@base/@types/route";
import Home from "@base/pages/home/Home";
import Login from "@base/pages/login/Login";
import Register from "@base/pages/register";

export default [
  {
    route: "/",
    notAcceptLogged: false,
    element: <Home />,
  },
  {
    route: "/signin",
    notAcceptLogged: true,
    element: <Login />,
  },
  {
    route: "/register",
    notAcceptLogged: true,
    element: <Register />,
  },
] as IRoute[];
