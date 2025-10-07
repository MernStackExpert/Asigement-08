import { createBrowserRouter } from "react-router";

import MainLayouts from "../Layouts/MainLayouts";
import Error from "../Pages/Error";
import Home from "../Pages/Home";

export const route = createBrowserRouter([
  {
    path:"/",
    Component:MainLayouts,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        Component:Home
      }
    ]
  }
])