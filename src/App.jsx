import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CardContrat from "./pages/contrat/CardContrat";
import CodeContrat from "./pages/contrat/CodeContrat";
import ListContrat from "./pages/contrat/ListContrat";
import NewContrat from "./pages/contrat/NewContrat";
import EditContrat from "./pages/contrat/EditContrat";

import CardCustomer from "./pages/customer/CardCustomer";
import CodeCustomer from "./pages/customer/CodeCustomer";
import ListCustomer from "./pages/customer/ListCustomer";
import NewCustomer from "./pages/customer/NewCustomer";
import EditCustomer from "./pages/customer/EditCustomer";

import CardWorker from "./pages/worker/CardWorker";
import CodeWorker from "./pages/worker/CodeWorker";
import ListWorker from "./pages/worker/ListWorker";
import NewWorker from "./pages/worker/NewWorker";
import EditWorker from "./pages/worker/EditWorker";

import ListUser from "./pages/user/ListUser";
import NewUser from "./pages/user/NewUser";
import CardUser from "./pages/user/CardUser";
import EditUser from "./pages/user/EditUser";

import MyProfil from "./pages/profil/MyProfil";
import EditProfil from "./pages/profil/EditProfil";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = React.useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={user} />}>
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="admin" element={<Admin user={user} setUser={setUser} />}>
            <Route index element={<Dashboard />} />

            <Route path="contrat">
              <Route index element={<ListContrat />} />
              <Route path="card" element={<CardContrat />} />
              <Route path="code" element={<CodeContrat />} />
              <Route path="new" element={<NewContrat />} />
              <Route path="edit" element={<EditContrat />} />
            </Route>

            <Route path="customer">
              <Route index element={<ListCustomer />} />
              <Route path="card" element={<CardCustomer />} />
              <Route path="code" element={<CodeCustomer />} />
              <Route path="new" element={<NewCustomer />} />
              <Route path="edit" element={<EditCustomer />} />
            </Route>

            <Route path="worker">
              <Route index element={<ListWorker />} />
              <Route path="card" element={<CardWorker />} />
              <Route path="code" element={<CodeWorker />} />
              <Route path="new" element={<NewWorker />} />
              <Route path="edit" element={<EditWorker />} />
            </Route>

            <Route path="user">
              <Route index element={<ListUser />} />
              <Route path="card" element={<CardUser />} />
              <Route path="new" element={<NewUser />} />
              <Route path="edit" element={<EditUser />} />
            </Route>

            <Route path="profil">
              <Route index element={<MyProfil />} />
              <Route path="edit" element={<EditProfil />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
