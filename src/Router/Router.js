import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Error from "../componant/Error/Error";
import Home from "../componant/Home/Home";
import Login from "../componant/Login/Login";
import Register from "../componant/Register/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Profile from "../Profile/Profile";

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
            },
            {
                path: '/profile',
                element : <PrivetRoute><Profile></Profile></PrivetRoute>
            }
        ]
    }
])