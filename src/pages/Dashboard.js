import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("./contrat");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Tableau de bord</h1>
    </div>
  );
};

export default Dashboard;
