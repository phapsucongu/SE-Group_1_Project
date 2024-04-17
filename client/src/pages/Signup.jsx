import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';
import {toast} from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
const Signup = () => {

  const [previewURL, setPreviewURL] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password: '',
    gender: '',
    role: 'customer',
  });
  const navigate = useNavigate();

  const handleInputChange = e => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };

  const handleFileInputChange = async event => {
    const file = event.target.files[0]
  }

  const submitHandler = async event => {
    console.log(formData)
    setLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const {message} = await response.json()
      if (!response.ok) {
        throw new Error(message)
      }
      setLoading(false)
      toast.success(message)
      navigate('/login')
    }
    catch (error) {
      setLoading(false)
      toast.error(error.message)
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
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange} 
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
            </div>
            <div className="mb-5">
              <input 
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
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
              value={formData.password}
              onChange={handleInputChange}  
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
            </div>
            <div className='mb-5 flex items-center justify-between'>
             
              <label
               className='text-headingColor font-bold text-[16px] leading-7'
              >
                Gender:
                <select
                  name='gender'
                  value={formData.gender}
                  onChange={handleInputChange} 
                  className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
                >
                  <option value="gay">Gay</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
            </div>
            <div className="mt-7">
              <button
                type="submit"
                className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
                { loading ? <HashLoader size ={35} color = "white" /> : 'Sign Up'}
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