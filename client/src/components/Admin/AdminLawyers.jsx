import React, { useState, useEffect } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import Loading from "./Loading";
// import { setLoading } from "../redux/reducers/rootSlice";
// import { useDispatch, useSelector } from "react-redux";
// import Empty from "./Empty";
// import fetchData from "../helper/apiCall";
import "./admin.css";
import Sidebar from "./Sidebar";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const AdminLawyers = () => {
// axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
const [isEdit, setIsEdit] = useState(false);
  const [isShowModalAddNewLawyer, setIsShowModalAddNewLawyer] = useState(false);
  const [editingLawyer, setEditingLawyer] = useState(null);
  const [form, setForm] = useState({
    name: "",
    birthday: "",
    email: "",
    phone: "",
    gender: "",
    speciality: "",
    ticketPrice: "",
    bio: "",
  });
  const handleInputChangeAddNewLawyer = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { name, birthday, email, phone, gender, speciality, ticketPrice, bio} = form;

  const [applications, setApplications] = useState ([
    {
      id: "1",
      name: "lawyers",
      birthday: "2004-01-01",
      email: "hdd@gmail.com",
      phone: "1234567890",
      gender: "Male",
      speciality: "Corporate Law",
      ticketPrice: "500",
      bio: "I am the best lawyer",
    },
    {
      id: "2",
      name: "Jane Smith",
      birthday: "1980-01-01",
      email: "janesmith@gmail.com",
      phone: "9876543210",
      gender: "Female",
      speciality: "Corporate Law",
      ticketPrice: "1000",
      bio: "I am the best lawyer",
    },
    {
      id: "3",
      name: "Michael Johnson",
      birthday: "1980-01-01",
      email: "michaeljohnson@gmail.com",
      phone: "1234567890",
      gender: "Other",
      speciality: "Corporate Law",
      ticketPrice: "2000",
      bio: "I am the best lawyer in the cityaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      id: "4",
      name: "Emily Watson",
      birthday: "1995-01-01",
      email: "emilywatson@gmail.com",
      phone: "9876543210",
      gender: "Male",
      speciality: "Criminal Law",
      ticketPrice: "500",
      bio: "I am the best lawyer in this district",
    },
    {
      id: "5",
      name: "David Beckham",
      birthday: "1985-01-01",
      email: "davidBeckham@gmail.com",
      phone: "9876543210",
      gender: "Male",
      speciality: "Corporate Law",
      ticketPrice: "500",
      bio: "I am the best lawyer in this city",
    },
  ]);

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
        setApplications(prev => prev.filter(Lawyer => Lawyer.id !== id));
      },
    });
  }
  
  const onEdit = (id) => {
    setIsEdit(true);
    const Lawyer = applications.find(Lawyer => Lawyer.id === id);
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
      name: "",
      birthday: "",
      email: "",
      phone: "",
      gender: "",
      speciality: "",
      ticketPrice: "",
      bio: "",
    });
  }
  const AddNewLawyer = () => {
    console.log(form);

    setIsShowModalAddNewLawyer(false);
    setApplications(prev => [...prev, { id: prev.length + 1, ...form }]);
    setForm({
      name: "",
      birthday: "",
      email: "",
      phone: "",
      gender: "",
      speciality: "",
      ticketPrice: "",
      bio: "",
    });
  }




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
                {applications?.map((ele, i) => {
                  return (
                    <tr key={ele?.id}>
                      <td>{i + 1}</td>

                      <td>{ele?.name}</td>
                      <td>{ele?.birthday}</td>
                      <td>{ele?.email}</td>
                      <td>{ele?.phone}</td>
                      <td>{ele?.gender}</td>
                      <td>{ele?.speciality}</td>
                      <td>{ele?.ticketPrice}</td>
                      <td className="truncate overflow-ellipsis max-w-[200px]">{ele?.bio}</td>
                     
                      <td className="select">
                        <button
                          className="btnAction user-btnAction accept-btnAction"
                          onClick = {() => onEdit(ele.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btnAction user-btnAction"
                          onClick={() => OnRemove(ele.id)}
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
         Full Name
       </label>
         <input 
         type="text"
         placeholder={'Full name'}
         name="name"
         value={name}
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
          type="text"
         placeholder="Birthday"
         name="birthday"
         value={birthday}
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
              name="ticketPrice"
              value={ticketPrice}
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
                setApplications(prev => prev.map(Lawyer => Lawyer.id === editingLawyer.id ? editingLawyer : Lawyer));
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
         name="name"
         value= {editingLawyer?.name}
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
         value={editingLawyer?.birthday}
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
              name="ticketPrice"
              value={editingLawyer?.ticketPrice}
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
