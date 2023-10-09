
import { createBrowserRouter } from "react-router-dom";
import RootElement from "./RootElement";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElement></RootElement>,

      children: [

        {
            path: '/',
            element: <Home></Home>
        }

      ]

    }


  ]);

export default router;