import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Asidebar from './components/admin-components/Admin-sidebar';
import Adashboard from "./components/admin-components/Adashboard";
import Addlots from "./components/admin-components/Add_lots";
import AddPremium from "./components/admin-components/Add_premium";
import Adminrecord from "./components/admin-components/Admin_record";
import Adminsetting from "./components/admin-components/Admin_setting";

function Admin() {
  return (
    <div className="Admin">
        <Asidebar/>
      <Routes>
        <Route path="/admin-dashboard" element={ <Adashboard/> } />
        <Route path="/addlots" element={ <Addlots/> } />
        <Route path="/addpremium" element={ <AddPremium/> } />
        <Route path="/adminrecord" element={ <Adminrecord/> } />
        <Route path="/adminsetting" element={ <Adminsetting/> } />
      </Routes>
    </div>
  )
}

export default Admin