import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PrivateRoutes from '../../auth/privateRoutes'
import PublicRoutes from '../../auth/publicRoutes'

export default function Routes() {
let authStatus = localStorage.getItem("authStatus");
console.log("auth", authStatus)
  return (
    <BrowserRouter>
        {authStatus ? <PrivateRoutes /> : <PublicRoutes />}
      </BrowserRouter>
  )
}
