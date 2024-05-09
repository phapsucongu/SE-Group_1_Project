
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
    oldPassword:'',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const {oldPassword, password, confirmPassword} = formData;

  const handleInputChange = e => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };
  const submitHandler = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setFormData({...formData, password: '', confirmPassword: ''});
      return toast.error('Passwords do not match');
      
    }
    try {
      const registerData = await registerUser(formData);
      if (registerData.success) {
        navigate('/');
        toast.success('Registered successfully');
      } else {
        toast.error(registerData.message);
      }
    }
    catch (error) {
      toast.error(error.response.data.message);
    }
  }



  return (
    <div>
         <form onSubmit={submitHandler}>
            <div className="mb-5 pt-10">
              <input 
              type="text"
              placeholder="Old Password"
              name="oldPassword"
              value={oldPassword}
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