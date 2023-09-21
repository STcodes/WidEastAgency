import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Home = ({ user }) => {
  const navigate = useNavigate();

  React.useEffect(
    () =>
      user === null || user === undefined || !user
        ? navigate("/login")
        : navigate("/admin"),
    []
  );

  return <Outlet />;
};

export default Home;
