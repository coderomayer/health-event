
import { createBrowserRouter } from "react-router-dom";
import RootElement from "./RootElement";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/serviceDetails";
import ServicePage from "../Pages/servicePage";
import Registraition from "../Pages/Registraition";
import Login from "../Pages/Login";
import PrivetRout from "../Layout/PrivetRout";
import Event from "../Pages/event";

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

          path: '/registration',
          element: <Registraition></Registraition>

        },

        {
          path: '/login',
          element: <Login></Login>
        },

        {
          path: '/event',
          element: <PrivetRout><Event></Event></PrivetRout>
        },

        {
          path: '/services/:id',
          element:<PrivetRout> <ServiceDetails></ServiceDetails></PrivetRout>,
          loader: () => fetch('services.json')
          
        }

      ]

    }


  ]);

export default router;