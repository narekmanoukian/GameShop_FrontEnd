import { ADMIN_ROUTE, BASKET_ROUTE, GAME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./Utils/Consts"

import Admin from "./Pages/Admin"
import Basket from "./Pages/Basket"
import Shop from "./Pages/Shop"
import Auth from "./Pages/Auth"
import GamePage from "./Pages/GamePage"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: GAME_ROUTE + '/:id',
        Component: GamePage
    },
]