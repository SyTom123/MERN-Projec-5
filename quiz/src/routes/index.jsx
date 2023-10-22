import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home"
import Login from "../pages/Login/";
import Register from "../pages/Register";
import PrivateRoutes from "../components/PrivateRoutes"
import Topic from "../pages/Topic/index";
import Quiz from "../pages/Quiz";
import Answer from "../pages/Answer";
import Result from "../pages/Result";

export const routes = [
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "register",
                element: <Register/>
            },
            {
                path: "*",
                element: <Navigate to = "/"/>
            },
            {
                element: <PrivateRoutes/>,
                children: [
                    {
                        path: "topic",
                        element:<Topic/>
                    },
                    {
                        path: "quiz",
                        element:<Quiz/>
                    },
                    {
                        path: "answer",
                        element:<Answer/>
                    },
                    {
                        path: "result",
                        element:<Result/>
                    },
                   
                ]
            }
        ],


    }
]