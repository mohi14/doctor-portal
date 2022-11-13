import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main";
import Appointment from "../../Appointment/Appointment/Appointment";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import SignUp from "../../SignUp/SignUp";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])