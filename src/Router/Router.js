import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Error from "../componant/Error/Error";
import Home from "../componant/Home/Home";
import Login from "../componant/Login/Login";
import Register from "../componant/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element : <Home></Home>
            },
            {
                path: '/home',
                element : <Home></Home>
            },
            {
                path: '/login',
                element : <Login></Login>
            },
            {
                path: '/register',
                element : <Register></Register>
            }
        ]
    }
])