import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import CardDetails from "../components/body/CardDetails";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/:id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch("../data.json"),
      },
      {
        path:"/login",
        element:<Login></Login>

      },
      {
        path:"/register",
        element:<Register></Register>

      },
    ],
  },
]);
