import React, { useState, useEffect } from "react";
import { LOCAL_STORAGE_TOKEN_NAME } from "../../context/constants";
const AdminHome = () => {
  const handleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    window.location.href = '/login';
}
  return (
    <div className="adminContainer">
      <h3 className="text-center" style={{fontWeight: 'bold', fontSize: '25px' }}>Admin</h3>
      <div className="mt-[50px] md:mt-[20px] ">
         <button 
         onClick={handleLogout}
         className = "w-full bg-[#181A1E] p-3 text-[16px] font-bold leading-7 rounded-md text-white"> Logout </button>
     </div>
   
    </div>
  

     
  );
};

export default AdminHome;
