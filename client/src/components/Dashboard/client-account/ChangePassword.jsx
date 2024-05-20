
import React, { useState ,useContext} from 'react';
import {useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import { authContext } from '../../../context/AuthContext'
import { Select } from 'antd';
import {message} from 'antd';
import {changePassword} from '../../../service/Apointment';
const ChangePassword= () => {
    const {registerUser} = useContext(authContext);
  
  const [formData, setFormData] = useState({
    CurrentPassword:'',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const {CurrentPassword, password, confirmPassword} = formData;

  const handleInputChange = e => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };
  

  const submitHandler = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      message.error("Password do not match");
    }

    try {
      const res = await changePassword(formData);
      if(res.success){
        navigate('/login');
        message.success("Password changed successfully");
      }
    }
    catch (error) {
      console.error(error);
    }
  };



  return (
    <div>
         <form onSubmit={submitHandler}>
            <div className="mb-5 pt-10">
              <input 
              type="password"
              placeholder="Current Password"
              name="CurrentPassword"
              value={CurrentPassword}
              onChange={handleInputChange} 
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
            </div>
            
            <div className="mb-5">
              <input 
              type="password"
              placeholder="New Password"
              name="password"
              value={password}
              onChange={handleInputChange}  
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
            </div>
            <div className="mb-5">
              <input 
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}  
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
            </div>
        
            <div className="mt-7">
              <button
              //disabled={loading && true}
                type="submit"
                className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
                Update
              </button>
            </div>
           
          </form>
    </div>
  )
}

export default ChangePassword