
import React, { useState ,useContext} from 'react';
import {useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
import { authContext } from '../../../context/AuthContext'
import { BASE_URL } from '../../../utils/config';
import { Select } from 'antd';

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

    // Check if new password and confirm new password match
    if (password !== confirmPassword) {
      setErrorMessage('New password and confirm new password do not match');
      return;
    }

    try {
      const response = await fetch('your_change_password_api_endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include any necessary authentication headers
        },
        body: JSON.stringify({
          CurrentPassword,
          password,
        }),
      });

      if (!response.ok) {
        // Handle error response from the server
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      // Password changed successfully
      alert('Password changed successfully!');
     setFormData({
        CurrentPassword:'',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      // Handle error
      setErrorMessage(error.message);
    }
  };



  return (
    <div>
         <form onSubmit={submitHandler}>
            <div className="mb-5 pt-10">
              <input 
              type="text"
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

export default ChangePassword;