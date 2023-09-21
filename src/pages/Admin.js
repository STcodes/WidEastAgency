import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import axios from "axios";

const Admin = ({ user, setUser }) => {
  const navigate = useNavigate();
  const logOut = () => {
    axios({
      method: "POST",
      url: "https://wideastagency.camencorp.com//API/AUTH/st_logout.php",
      responseType: "json",
      headers: { "Access-Control-Allow-Origin": "*" },
      data: { id: user.id },
    });
    setUser(null);
    navigate("/login");
  };

  if (user === null || user === undefined || !user) {
    navigate("/login");
  } else {
    return (
      <>
        <Sidebar user={user} />
        <section class="home-section">
          <Navbar user={user} logOut={logOut} />
          <Outlet />
        </section>
      </>
    );
  }
};

export default Admin;
