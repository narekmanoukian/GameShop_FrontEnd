import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import { AuthRoutes, PublicRoutes } from "../Routes";
import { SHOP_ROUTE } from "../Utils/Consts";

const AppRouter = () => {
    const isAuth = false
    return(
        <Routes>
        {isAuth && AuthRoutes.map(({path, Component}) =>
          <Route key={path} path={path} element={<Component/>} exact/>
        )}
        {PublicRoutes.map(({path, Component}) =>
        <Route key={path} path={path} element={<Component/>} exact/>
        )}
         <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
      </Routes>
    )
}

export default AppRouter