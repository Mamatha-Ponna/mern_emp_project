import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login, { LogInPage } from '../components/pages/LogIn/emp_LogIn'
import { LOGIN_PAGE } from '../utils/routingPath'

export default function PublicRoutes() {
  return (
    <Routes>
        <Route path={LOGIN_PAGE} Component={Login} />
        <Route path='/*' element={<Navigate to={LOGIN_PAGE} />} />
    </Routes>
  )
};