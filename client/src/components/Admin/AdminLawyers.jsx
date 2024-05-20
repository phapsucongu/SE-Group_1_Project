import React, { useState, useEffect } from "react";
import "./admin.css";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { AdminContext } from "../../context/Admincontext";
import { addUser, deleteUser, getUser, getUsers, updateUser } from "../../service/AdminLawyerService";
import moment from 'moment';
const AdminLawyers = () => {

const [isEdit, setIsEdit] = useState(false);
  const [isShowModalAddNewLawyer, setIsShowModalAddNewLawyer] = useState(false);
  const [editingLawyer, setEditingLawyer] = useState(null);
  const [form, setForm] = useState({
    username: "",
    password: "",
    fullname: "",
    birthday: "",
    email: "",
    phone: "",
    gender: "",
    speciality: "",
    price: "",
    bio: "",
  });
  const navigate = useNavigate();
  const handleInputChangeAddNewLawyer = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const {username,password, fullname, birthday, email, phone, gender, speciality, price, bio} = form;

  
  const OnAdd = () => {
    setIsShowModalAddNewLawyer(true);
  }

  const OnRemove = (id) => {
    Modal.confirm({
      title: 'Sure?',
      icon: <ExclamationCircleOutlined />,
      content: 'Do you want to remove this Lawyer?',
      okText: 'Yes',
      cancelText: 'No',
      onOk() {
        deleteUser(id);
        //setApplications(prev => prev.filter(Lawyer => Lawyer.id !== id));
        window.location.reload();
      },
    });
  }
  
  const onEdit = (id) => {
    setIsEdit(true);
    const Lawyer = listLawyer.experts.find(Lawyer => Lawyer._id === id);
    console.log(Lawyer);
    setEditingLawyer(Lawyer);
  }


  const handleInputChange = (e) => {
    setEditingLawyer({ ...editingLawyer, [e.target.name]: e.target.value });
  }

  const resetEditing = () => {
    setIsEdit(false);
    setEditingLawyer(null);
  }
  const resetAddNewLawyer = () => {
    setIsShowModalAddNewLawyer(false);
    setForm({
      username:"",
      password:"",
      fullname: "",
      birthday: "",
      email: "",
      phone: "",
      gender: "",
      speciality: "",
      price: "",
      bio: "",
    });
  }
  const AddNewLawyer = () => {
    console.log(form);

    setIsShowModalAddNewLawyer(false);
    //setApplications(prev => [...prev, { id: prev.length + 1, ...form }]);
    addUser(form);
    setForm({
      username:"",
      password:"",
      fullname: "",
      birthday: "",
      email: "",
      phone: "",
      gender: "",
      speciality: "",
      price: "",
      bio: "",
    });
    window.location.reload();
  }

  const updateLawyer = (id) => {
    updateUser(id, editingLawyer);
    //setApplications(prev => prev.map(Lawyer => Lawyer.id === id ? editingLawyer : Lawyer));
    resetEditing();
    window.location.reload();
  }

  const [listLawyer, setListLawyer] = useState([]);
  function getLawyer() {
    getUsers().then((res) => {
      console.log(res);
      setListLawyer(res.data);
    });
  }
  useEffect(() => {
    getLawyer();
  }, []);
  console.log(listLawyer);

  return (
    <div className="adminContainer">
      <h3 className="text-center" style={{fontWeight: 'bold', fontSize: '25px' }}>ALL LAWYERS</h3>
      <button className="btnAction user-btnAction accept-btnAction ml-[1300px]"
       onClick = {OnAdd}
      >
        Add
      </button>
          <div className="user-container">
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  {/* <th>Pic</th> */}
                  <th>Username</th>
                  <th>Full Name</th>
                  <th>Birthday</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Gender</th>
                  <th>Specilization</th>     
                  <th>Ticket Price</th>             
                  <th>Bio</th>
                  <th>Action</th>
                  
                </tr>
              </thead>
              <tbody>
                {listLawyer.experts?.map((ele, i) => {
                  return (
                    <tr key={ele?._id}>
                      <td>{i + 1}</td>
                      <td>{ele?.username}</td>
                      <td>{ele?.fullname}</td>
                      <td>{moment(ele?.birthday).format('YYYY-MM-DD')}</td>
                      <td>{ele?.email}</td>
                      <td>{ele?.phone}</td>
                      <td>{ele?.gender}</td>
                      <td>{ele?.speciality}</td>
                      <td>{ele?.price}</td>
                      <td className="truncate overflow-ellipsis max-w-[200px]">{ele?.bio}</td>
                     
                      <td className="select">
                        <button
                          className="btnAction user-btnAction accept-btnAction"
                          onClick = {() => onEdit(ele._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btnAction user-btnAction"
                          onClick={() => OnRemove(ele._id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Modal
            title= "Add new Lawyer"
            open = {isShowModalAddNewLawyer}
            onOk = {AddNewLawyer}
            onCancel={resetAddNewLawyer}
            >
               <div>
       <div className="mb-5 pt-10">
       <label className='form__label'>
         Username
       </label>
         <input 
         type="text"
         placeholder={"Username"}
         name= "username"
         value={username}
         onChange={handleInputChangeAddNewLawyer} 
         className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
         required
       />
       </div>
       <div className="mb-5">
       <label className='form__label'>
         Password
       </label>
         <input 
         type="password"
         placeholder={'Password'}
         name="password"
         value={password}
         onChange={handleInputChangeAddNewLawyer} 
         className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
         required
       />
       <label className='form__label'>
         Full Name
       </label>
         <input 
         type="text"
         placeholder={'Full name'}
         name="fullname"
         value={fullname}
         onChange={handleInputChangeAddNewLawyer} 
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
         onChange={handleInputChangeAddNewLawyer}  
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
         onChange={handleInputChangeAddNewLawyer}  
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
         onChange={handleInputChangeAddNewLawyer}  
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
           onChange={handleInputChangeAddNewLawyer}
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
                onChange={handleInputChangeAddNewLawyer}
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
              type="number"
              placeholder="Ticket Price"
              name="price"
              value={price}
              onChange={handleInputChangeAddNewLawyer}  
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
              rows={3}
              id='bio'
              name='bio'
              value ={bio}
            onChange={handleInputChangeAddNewLawyer}
              className='form__input-1 mt-1' />
          </div>   
</div>
 </Modal>
 <Modal
              title="Edit Lawyer"
              open={isEdit}
              onOk={() => {
                resetEditing();
              }}
              onCancel={() => setIsEdit(false)}
              cancelText="Cancel"
              >
        <div>
       <div className="mb-5 pt-10">
       <label className='form__label'>
         Full Name
       </label>
         <input 
         type="text"
         placeholder={'Full name'}
         name="fullname"
         value= {editingLawyer?.fullname}
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
         value={moment(editingLawyer?.birthday).format('YYYY-MM-DD')}
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
         value={editingLawyer?.email}
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
         value={editingLawyer?.phone}
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
           value={editingLawyer?.gender}
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
                value={editingLawyer?.speciality}
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
              type="number"
              placeholder="Ticket Price"
              name="price"
              value={editingLawyer?.price}
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
              rows={3}
              id='bio'
              name='bio'
              value ={editingLawyer?.bio}
            onChange={handleInputChange}
              className='form__input-1 mt-1' />
          </div>   
</div>
              </Modal>
          </div>
    </div>
  );
};

export default AdminLawyers;
