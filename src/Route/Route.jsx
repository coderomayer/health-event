
import { createBrowserRouter } from "react-router-dom";
import RootElement from "./RootElement";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/serviceDetails";
import ServicePage from "../Pages/servicePage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElement></RootElement>,

      children: [

        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('services.json')
            
        },

        {

          path: '/services',
          element:<ServicePage></ServicePage>,
          loader: () => fetch('services.json')

        },

        {
          path: '/services/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: () => fetch('services.json')
          
        }

      ]

    }


  ]);

export default router;