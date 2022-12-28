import React,{useState} from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo-white.png';
import '../../components/style.css';

function Usidebar() {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  return (
    <>
    <div className={`${open? "left-[0px]": "left-[-300px]"} ${close? "left-[-300px]": "left-[0px]"} fixed lg:left-0 z-[60] transition-left duration-1000 m-4 sidebar-cover text-center `}>
      <div className={` rounded-xl border-none flex flex-col sidebar p-5`}>  
        <div className=" bg-transparent relative flex flex-row lg:pt-4 text-center">
          <Link to="/user/user-dashboard" className="flex flex-row  text-center">
            <div className="w-[60px] h-[60px] rounded-[50%] border-solid border-2 border-white text-center">
              <i className="fa-solid fa-user m-2 cursor-pointer text-[35px] text-white"></i>
            </div>
            <div>
              <h4 className="text-white ml-3 flex items-center tracking-widest log text-[20px]">Host & Park</h4>
              <small className='text-white text-left'>(user)</small>
            </div>
          </Link>
            <i className="fa-solid fa-xmark text-white absolute right-1 top-1 text-[20px] lg:hidden" onClick={() => setClose(!close)}></i>
        </div>
        <hr className="hrr" />
        <div className=" text-white flex flex-col justify-around items-center dashboard-link">
          <Link to="/user/user-dashboard" className="bg-transparent hover:bg-gray-600 text-white font-normal flex items-center justify-around w-48 my-1 mx-auto py-2 relative rounded-2xl focus:bg-gradient-to-l from-green-400 via-green-500 to-green-600">
            <i className="fa-solid fa-house w-fit ml-4 mb-1"></i>
            <div className="text-left ml-4 mr-auto">Dashboard</div>
          </Link> 
          <Link to="/user/current-update" className="bg-transparent hover:bg-gray-600 text-white font-normal flex items-center justify-around w-48 my-1 mx-auto py-2 relative rounded-2xl focus:bg-gradient-to-l from-green-400 via-green-500 to-green-600">
            <i className="fa-solid fa-bell w-fit ml-4 mb-1"></i>
            <div className="text-left ml-4 mr-auto">Live Update</div>
          </Link>
          <Link to="/user/user-record" className="bg-transparent hover:bg-gray-600 text-white font-normal flex items-center justify-around w-48 my-1 mx-auto py-2 relative rounded-2xl focus:bg-gradient-to-l from-green-400 via-green-500 to-green-600">
            <i className="fa-regular fa-clipboard w-fit ml-4 mb-1"></i>
            <div className="text-left ml-4 mr-auto">Record</div>
          </Link> 
          <Link to="/user/user-setting" className="bg-transparent hover:bg-gray-600 text-white font-normal flex items-center justify-around w-48 my-1 mx-auto py-2 relative rounded-2xl focus:bg-gradient-to-l from-green-400 via-green-500 to-green-600">
            <i className="fa-solid fa-gear w-fit ml-4 mb-1"></i>
            <div className="text-left ml-4 mr-auto">Settings</div>
          </Link>                
        </div>
        <hr className="hrr" />
        <div className="text-center absolute bottom-4 left-auto translate-x--1/2">
          <img src={logo} alt="logo" className="bg-transparent w-[100%] p-5" />
        </div>
      </div>
    </div>  
    {/* NavBar */}
    <div className="navbar rounded-[18px] bg-opacity-10 backdrop-blur-sm  bg-white/30 w-[-webkit-fill-available] pb-[20px] h-auto fixed z-50 m-5 lg:w-[75%] lg:ml-[300px]">
      <div className=" flex flex-wrap justify-between">
        <div className="flex flex-nowrap m-4 items-center opacity-40 z-50">
          <i className="fa-solid fa-house"></i>
          <i className="fa-solid fa-slash text-[15px] mx-1 rotate-90"></i>
          <span>#section-appears-here</span>
        </div>
        <div className="flex flex-wrap items-center text-gray-500">
          <input type="text" className='border-[1px] border-gray-300 rounded w-28 h-8 bg-transparent mx-3' placeholder='  Search'/>
          <i className="fa-solid fa-user m-2 cursor-pointer"></i>
          <i className="fa-solid fa-bars m-2 cursor-pointer lg:hidden" onClick={() => setOpen(!open)}></i>
          <i className="fa-solid fa-gear m-2 cursor-pointer"></i>
          <i className="fa-solid fa-bell m-2 cursor-pointer"></i>
        </div>
      </div>
    </div>
    </>
  )
}

export default Usidebar