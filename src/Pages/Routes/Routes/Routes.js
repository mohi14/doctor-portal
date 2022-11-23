import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../../layout/DashboardLayout";
import Main from "../../../layout/Main";
import Appointment from "../../Appointment/Appointment/Appointment";
import AddDoctor from "../../Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import ManageDoctors from "../../Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../Dashboard/MyAppointment/MyAppointment";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import Payment from "../../Payment/Payment";
import DIsplayError from "../../Shared/DisplayError/DIsplayError";
import SignUp from "../../SignUp/SignUp";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DIsplayError></DIsplayError>,
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
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        errorElement: <DIsplayError></DIsplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: '/dashboard/add-doctor',
                element: <AdminRoutes><AddDoctor></AddDoctor></AdminRoutes>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoutes><ManageDoctors></ManageDoctors></AdminRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoutes><Payment></Payment></AdminRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]
    }
])