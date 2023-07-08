import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Error from "../componant/Error/Error";
import Home from "../componant/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element : <Home></Home>
            }
        ]
    }
])