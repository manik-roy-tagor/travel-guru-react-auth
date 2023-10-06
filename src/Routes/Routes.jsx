
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <PrivateRoute><Home></Home></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        // {
        //     path: '/contact',
        //     element: <Home></Home>
        // },
        // {
        //     path: '/login',
        //     element: <Home></Home>
        // },
        // {
        //     path: '/register',
        //     element: <Home></Home>
        // }
      ]
    },
  ]);
  


export default router;