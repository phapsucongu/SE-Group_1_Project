
import React, { useState ,useContext} from 'react';
import {useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
import { authContext } from '../../../context/AuthContext'
import { BASE_URL } from '../../../utils/config';
import { Select } from 'antd';
import userProfile from '../../../fakedata/userProfile';
import { useEffect } from 'react';

const Profile = () => {
   // const {registerUser} = useContext(authContext);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthday: '',
    phone: '',
    gender: '',
  });
  
  const navigate = useNavigate();
  

  //Đoạn này để fakedata
  useEffect(() => {
    if (userProfile) {
      setFormData({
        name: userProfile.name || '',
        email: userProfile.email || '',
        birthday: userProfile.birthday || '',
        phone: userProfile.phone || '',
        gender: userProfile.gender || '', 
      });
    }
  }, []); 
 

  const {name,email,birthday,phone, gender} = formData;

  const handleInputChange = e => {
    setFormData({...formData,[e.target.name]: e.target.value});
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

export default Profile