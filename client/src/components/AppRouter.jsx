import React, { useContext } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { Context } from '../index'
import { authRoutes, publicRoutes, adminRoutes } from '../routes'

const AppRouter = () => {
    const {user} = useContext(Context)
    
    return (
        <Routes>
            {user.isAuth === "ADMIN" && adminRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={Element} exact/>
            )}
            {user.isAuth === "USER" && authRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={Element} exact/>
            )}
            {publicRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={Element} exact/>
            )}
            <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
    )
  }

export default AppRouter;