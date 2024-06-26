
import React, { useState ,useContext} from 'react';
import {useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import { authContext } from '../../../context/AuthContext'
import {apiUrl,LOCAL_STORAGE_TOKEN_NAME} from '../../../context/constants.jsx';
import setAuthToken from '../../../utils/setAuthToken';
import { Select } from 'antd';
import { useEffect } from 'react';
import axiosInstance from '../../../context/constants.jsx';
import moment from 'moment';
import {message} from 'antd';


const Profile = () => {
  
  const { authState,loadUser } = useContext(authContext);
  const user = authState.user;
  //console.log(user);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    birthday: "",
    phone: "",
    gender: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setFormData({
        fullname: user.fullname,
        email: user.email,
        birthday: user.birthday,
        phone: user.phone,
        gender: user.gender, 
      });
    }
  }, [user]);


  const { fullname, email, birthday, phone, gender } = formData;

  const handleInputChange = e => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };

 const submitHandler = async (e) => {
    e.preventDefault();
    //console.log(formData);
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }
    const response = await axiosInstance.put(`${apiUrl}/profile/user`,formData);
    loadUser();
    console.log(response);
    if (response.data.success) {
      message.success("Update successfully");
    } else {
      message.error("Update failed")
    }
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
         name="fullname"
         value={fullname}
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
        type="date"
         placeholder="Birthday"
         name="birthday"
         value={moment(birthday).format('YYYY-MM-DD')}
         
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