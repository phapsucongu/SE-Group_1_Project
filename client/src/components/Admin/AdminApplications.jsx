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
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import ModalAddNewClient from "./ModalAddNewClient";
// axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const AdminApplications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isShowModalAddNewClient, setIsShowModalAddNewClient] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [form, setForm] = useState({
    name: "",
    birthday: "",
    email: "",
    phone: "",
    gender: "",
  });
  const handleInputChangeAddNewClient = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { name, birthday, email, phone, gender} = form;
  const [applications, setApplications] = useState ([
    {
      id: "1",
      name: "John Doe",
      birthday: "1990-01-01",
      email: "johndoe@",
      phone: "9876543210",
      gender: "Male"
    },
    {
      id: "2",
      name: "Alice Smith",
      birthday: "1992-01-01",
      email: "alicesmith@",
      phone: "9876543210",
      gender: "Female"
    },
    {
      id: "3",
      name: "Michael Johnson",
      birthday: "1980-01-01",
      email: "michaeljohnson@",
      phone: "1234567890",
      gender: "Other"
    },
    {
      id: "4",
      name: "Emily Watson",
      birthday: "1995-01-01",
      email: "emilywatson@",
      phone: "9876543210",
      gender: "Male"
    },
    {
      id: "5",
      name: "David Beckham",
      birthday: "1985-01-01",
      email: "davidBeckham@",
      phone: "9876543210",
      gender: "Male"
    },
    {
      id: "6",
      name: "John Doe",
      birthday: "1990-01-01",
      email: "johndoe@",
      phone: "9876543210",
      gender: "Female"
    },
    {
     id: "7",
      name: "Alice Smith",
      birthday: "1992-01-01",
      email: "alicesmith@",
      phone: "9876543210",
      gender: "Other"
    },

  ]);

  const OnAdd = () => {
    setIsShowModalAddNewClient(true);
  }

  const OnRemove = (id) => {
    Modal.confirm({
      title: 'Sure?',
      icon: <ExclamationCircleOutlined />,
      content: 'Do you want to remove this client?',
      okText: 'Yes',
      cancelText: 'No',
      onOk() {
        setApplications(prev => prev.filter(client => client.id !== id));
      },
    });
  }
  
  const onEdit = (id) => {
    setIsEdit(true);
    const client = applications.find(client => client.id === id);
    console.log(client);
    setEditingClient(client);
  }


  const handleInputChange = (e) => {
    setEditingClient({ ...editingClient, [e.target.name]: e.target.value });
  }

  const resetEditing = () => {
    setIsEdit(false);
    setEditingClient(null);
  }
  const resetAddNewClient = () => {
    setIsShowModalAddNewClient(false);
    setForm({
      name: "",
      birthday: "",
      email: "",
      phone: "",
      gender: "",
    });
  }
  const AddNewClient = () => {
    console.log(form);

    setIsShowModalAddNewClient(false);
    setApplications(prev => [...prev, { id: prev.length + 1, ...form }]);
    setForm({
      name: "",
      birthday: "",
      email: "",
      phone: "",
      gender: "",
    });
  }


  return (
    <div className="adminContainer">
      <h3 className="text-center" style={{fontWeight: 'bold', fontSize: '25px' }}>ALL CLIENTS</h3>
      <button className="btnAction user-btnAction accept-btnAction ml-[750px]"
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
                  {/* <th>Last Name</th> */}
                  <th>Birthday</th>
                  <th>Email</th>
                  <th>Phone</th>
                  {/* <th>Age</th> */}
                  <th>Gender</th>
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
                      {/* <td>{ele?.userId?.lastname}</td> */}
                      <td>{ele?.email}</td>
                      <td>{ele?.phone}</td>
                      {/* <td>{ele?.age}</td> */}
                      <td>{ele?.gender}</td>
                      <td className="select">
                        <button
                          className="btnAction user-btnAction accept-btnAction"
                          onClick={() => onEdit(ele.id)}
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
            title= "Add new client"
            open = {isShowModalAddNewClient}
            onOk = {AddNewClient}
            onCancel={resetAddNewClient}
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
         onChange={handleInputChangeAddNewClient} 
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
         onChange={handleInputChangeAddNewClient}  
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
         onChange={handleInputChangeAddNewClient}  
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
         onChange={handleInputChangeAddNewClient}  
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
           onChange={handleInputChangeAddNewClient}
           className = "form__input-1 py-3.5">
               <option value=""></option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Other">Other</option>
           </select>
           </div>
           
          
       </div>     
</div>
 </Modal>

             <Modal
              title="Edit Client"
              open={isEdit}
              onOk={() => {
                setApplications(prev => prev.map(client => client.id === editingClient.id ? editingClient : client));
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
         value= {editingClient?.name}
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
         value={editingClient?.birthday}
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
         value={editingClient?.email}
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
         value={editingClient?.phone}
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
           value={editingClient?.gender}
           onChange={handleInputChange}
           className = "form__input-1 py-3.5">
               <option value=""></option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Other">Other</option>
           </select>
           </div>
       </div>     
</div>
              </Modal>

          </div>
    </div>
  );
};

export default AdminApplications;
