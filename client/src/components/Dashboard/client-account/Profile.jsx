
import React, { useState ,useContext} from 'react';
import {useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import { authContext } from '../../../context/AuthContext'
import {apiUrl,LOCAL_STORAGE_TOKEN_NAME} from '../../../context/constants.jsx';
import setAuthToken from '../../../utils/setAuthToken';
import { Select } from 'antd';
import { useEffect } from 'react';
import axios from 'axios';

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

  const { fullname, email, birthday, phone } = formData;

  const handleInputChange = e => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };

 const submitHandler = async (e) => {
    e.preventDefault();
    //console.log(formData);
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }
    const response = await axios.put(`${apiUrl}/profile/user`,formData);
    loadUser();
    console.log(response);
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  }

  return (
    <div>
         <form onSubmit={submitHandler}>
            <div className="mb-5 pt-10">
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
              <input 
              type="birthday"
              placeholder="Birthday"
              name="birthday"
              value={birthday}
              onChange={handleInputChange}  
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
            </div>
            <div className="mb-5">
              <input 
              type="phone"
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={handleInputChange}  
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
            </div>
            <label className = "text-headingColor font-bold text-[16px] leading-7">
                Gender:
                <Select 
                name = "gender"
                value= {formData.gender}
                onChange = {handleInputChange}
                className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                >
                    <Select.Option value="">Select</Select.Option>
                    <Select.Option value="male">Male</Select.Option>
                    <Select.Option value="female">Female</Select.Option>
                </Select>
            </label>
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