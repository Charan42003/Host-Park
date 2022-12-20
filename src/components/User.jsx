import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Usidebar from './components/user-components/User_sidebar';
import Udashboard from "./components/user-components/Udashboard";
import Updates from "./components/user-components/Current_status";
import Userrecord from "./components/user-components/User_records";
import Usersetting from "./components/user-components/User_setting";

function User() {
  return (
    <div className="User">
        <Usidebar/>
      <Routes>
        <Route path="/user-dashboard" element={ <Udashboard/> } />
        <Route path="/current-update" element={ <Updates/> } />
        <Route path="/user-record" element={ <Userrecord/> } />
        <Route path="/user-setting" element={ <Usersetting/> } />
      </Routes>
    </div>
  )
}

export default User