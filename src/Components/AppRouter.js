import React, { useContext } from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import { AuthRoutes, PublicRoutes } from "../Routes";
import { SHOP_ROUTE } from "../Utils/Consts";
import { Context } from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)

    return(
        <Routes>
        {user.isAuth && AuthRoutes.map(({path, Component}) =>
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