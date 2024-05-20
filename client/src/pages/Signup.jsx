import React, { useState ,useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
import { authContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';
import { Select } from 'antd';
import { message } from 'antd';

const Signup = () => {

  const {registerUser} = useContext(authContext);
  
  const [formData, setFormData] = useState({
    username:'',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const {username, password, confirmPassword} = formData;

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
        message.success("Signup successfully!");
      } else {
        message.error("Signup failed");
      }
    }
    catch (error) {
      toast.error(error.response.data.message);
      message.error("Signup failed");
    }
  }

  return (
    <section className='px-5 xl:px-0'>
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
              Create An <span className='text-primaryColor'>Account</span>
            </h3>
            
          <form onSubmit={submitHandler}>
            <div className="mb-5">
              <input 
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleInputChange} 
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
            </div>
            
            <div className="mb-5">
              <input 
              type="password"
              placeholder="Password"
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
              placeholder="Confirm password"
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
                Register
              </button>
            </div>
            <p className="mt-5 text-textColor text-center">
              Already have an account? 
                <Link to='/login' className='text-primaryColor font-medium ml-1'>
                  Login
                </Link>
            </p>
          </form>

          </div>
    </section>
  )
}

export default Signup