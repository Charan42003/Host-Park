import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
// import Asidebar from './components/admin-components/Admin-sidebar';
// import Adashboard from "./components/admin-components/Adashboard";
// import Addlots from "./components/admin-components/Add_lots";
// import AddPremium from "./components/admin-components/Add_premium";
// import Adminrecord from "./components/admin-components/Admin_record";
// import Adminsetting from "./components/admin-components/Admin_setting";
// import Usidebar from './components/user-components/User_sidebar';
// import Udashboard from "./components/user-components/Udashboard";
// import Updates from "./components/user-components/Current_status";
// import Userrecord from "./components/user-components/User_records";
// import Usersetting from "./components/user-components/User_setting";
function App() {
  return (
    <div className="App">
      
        <MainPage/>
       {/* <Routes>
         <Route path='/admin' element={<Admin/>}/>
         <Route path='/user' element={<User/>}/>
       </Routes> */}
    </div>
    // <div className="App">
    //     <Asidebar/>
    //   <Routes>
    //     <Route path="/admin-dashboard" element={ <Adashboard/> } />
    //     <Route path="/addlots" element={ <Addlots/> } />
    //     <Route path="/addpremium" element={ <AddPremium/> } />
    //     <Route path="/adminrecord" element={ <Adminrecord/> } />
    //     <Route path="/adminsetting" element={ <Adminsetting/> } />
    //   </Routes>
    // </div>
    // <div className="App">
    //     <Usidebar/>
    //   <Routes>
    //     <Route path="/user-dashboard" element={ <Udashboard/> } />
    //     <Route path="/current-update" element={ <Updates/> } />
    //     <Route path="/user-record" element={ <Userrecord/> } />
    //     <Route path="/user-setting" element={ <Usersetting/> } />
    //   </Routes>
    // </div>
  )
}

export default App