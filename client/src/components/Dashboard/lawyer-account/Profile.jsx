
import React, { useState ,useContext} from 'react';
import {useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
import { authContext } from '../../../context/AuthContext'
import { BASE_URL } from '../../../utils/config';
import { Select } from 'antd';
import lawyerProfile from '../../../fakedata/lawyerProfile';
import { useEffect } from 'react';


const LawyerProfile = () => {
   // const {registerUser} = useContext(authContext);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthday: '',
    phone: '',
    gender: '',
    speciality: '',
    bio: '',
    ticketPrice: '',
  });


 
  

  //Đoạn này để fakedata
  useEffect(() => {
    if (lawyerProfile) {
      setFormData({
        name: lawyerProfile.name || '',
        email: lawyerProfile.email || '',
        birthday: lawyerProfile.birthday || '',
        phone: lawyerProfile.phone || '',
        gender: lawyerProfile.gender || '', 
        speciality: lawyerProfile.speciality || '',
        bio: lawyerProfile.bio || '',
        ticketPrice: lawyerProfile.ticketPrice || '',
      });
     
    }
  }, []); 


  const {name,email,birthday,gender,phone,speciality, bio, ticketPrice} = formData;

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    // const {data, status} = await registerUser(`${BASE_URL}/user/profile/me`,formData);
    // if(status === 'error'){
    //   toast.error(data.message);
    // }else{
    //   toast.success(data.message);
    //   navigate('/dashboard');
    // }
  }

  return (
    <div>
         <form onSubmit={submitHandler}>
            <div className="mb-5 pt-10">
            <label className='form__label'>
              Full Name
            </label>
              <input 
              type="text"
              placeholder={'Full name'}
              name="name"
              value={name}
              onChange={handleInputChange} 
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
            </div>
            
            <div className="mb-5">
            <label className='form__label'>
              Email
            </label>
              <input 
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleInputChange}  
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
            </div>
            <div className="mb-5">
            <label className='form__label'>
              Birthday
            </label>
              <input 
               type="text"
              placeholder="Birthday"
              name="birthday"
              value={birthday}
              onChange={handleInputChange}  
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
            </div>
            <div className="mb-5">
            <label className='form__label'>
              Phone
            </label>
              <input 
              type="text"
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={handleInputChange}  
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
            </div>
            <div className="mb-5 grid grid-cols-3 gap-5">
                <div>
                <label className="form__label">
                 Gender
                </label>
                <select 
                name="gender"
                value={gender}
                onChange={handleInputChange}
                className = "form__input-1 py-3.5">
                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                </div>
                <div>
                <label className="form__label">
                 Speciality
                </label>
                <select 
                name="speciality"
                value={speciality}
                onChange={handleInputChange}
                className = "form__input-1 py-3.5">
                    <option value=""></option>
                    <option value="Civil Rights Law">Civil Rights Law</option>
                    <option value="Corporate Law">Corporate Law</option>
                    <option value="Criminal Law">Criminal Law</option>
                </select>
                </div>
                <div>
                <label className="form__label">
                 Ticket Price ($)
                </label>
                <input 
              type="text"
              placeholder="Ticket Price"
              name="ticketPrice"
              value={ticketPrice}
              onChange={handleInputChange}  
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
                </div>
            </div>


            <div className="mb-5">
            <label className='form__label'>
              Bio
            </label>
            <textarea
              rows={5}
              id='bio'
              name='bio'
              value ={bio}
            onChange={handleInputChange}
              className='form__input-1 mt-1' />
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

export default LawyerProfile