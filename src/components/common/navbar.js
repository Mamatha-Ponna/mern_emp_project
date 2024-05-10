import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { DASHBOARD, EMP_LIST } from "../../utils/routingPath";
import './navbar.css'

export default function Navbar() {
  const navigate = useNavigate();
const userData = localStorage.getItem("userData");

  const handleClickLogout = () => {
    localStorage.removeItem("authStatus");
    window.location.reload();
  };

  return (
    <div className="navbarCotainer">
      <Link to={DASHBOARD}>Home</Link>
      <Link to={EMP_LIST}>EmployeeList</Link>
     {JSON.parse(userData)?.username ?? ""} <Link onClick={handleClickLogout}>
        Logout
      </Link>
    </div>
  );
}
