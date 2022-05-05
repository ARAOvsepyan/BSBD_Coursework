import React from "react";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basekt from "./pages/Basket";
import Main from "./pages/Main";
import Registration from "./pages/Registration";
import TourPage from "./pages/TourPage";
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, TOUR_ROUTE } from "./utils/consts";

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Element: <Admin/>
    },
]

export const authRoutes = [
    {
        path: BASKET_ROUTE,
        Element: <Basekt/>
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Element: <Main/>
    },
    {
        path: LOGIN_ROUTE,
        Element: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Element: <Registration />
    },
    {
        path: TOUR_ROUTE + '/:id',
        Element: <TourPage/>
    }
]