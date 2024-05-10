import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {  DASHBOARD, EMP_LIST, LOGIN_PAGE } from "../utils/routingPath";
import { DashBoardPage } from "../components/pages/DashBoard/dashboard";
import Navbar from "../components/common/navbar";
import EmployeesList from "../components/pages/empList";
import Login from "../components/pages/LogIn/emp_LogIn";

export default function PrivateRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={DASHBOARD} Component={DashBoardPage} />
        <Route path={EMP_LIST} Component={EmployeesList} />
        <Route path="/*" element={<Navigate to={DASHBOARD} />} />
      </Routes>
    </>
  );
}
