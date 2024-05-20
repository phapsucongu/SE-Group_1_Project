import React, { useState, useEffect, useContext } from "react";
import "./admin.css";
import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { addUser, deleteUser, getUser, getUsers, updateUser } from "../../service/AdminAplicationService";
import moment from 'moment';
// axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
import { AdminContext } from "../../context/Admincontext";

const AdminApplications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isShowModalAddNewClient, setIsShowModalAddNewClient] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [form, setForm] = useState({
    username:"",
    password:"",
    fullname: "",
    birthday: "",
    email: "",
    phone: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleInputChangeAddNewClient = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { username, password, fullname, birthday, email, phone, gender} = form;
  
  const OnAdd = () => {
    setIsShowModalAddNewClient(true);
  }

  const OnRemove = (id) => {
    console.log(id);
    Modal.confirm({
      title: 'Sure?',
      icon: <ExclamationCircleOutlined />,
      content: 'Do you want to remove this client?',
      okText: 'Yes',
      cancelText: 'No',
      onOk() {
        deleteUser(id);
        window.location.reload();
      },
    });
  }
  
  const onEdit = (id) => {
    setIsEdit(true);
    const client = listUser.users.find(client => client._id === id);
    console.log(client);
    setEditingClient(client);
  }


  const handleInputChange = (e) => {
    setEditingClient({ ...editingClient, [e.target.name]: e.target.value });
    console.log(editingClient);
  }


  const resetAddNewClient = () => {
    setIsShowModalAddNewClient(false);
    setForm({
      username:"",
      password:"",
      fullname: "",
      birthday: "",
      email: "",
      phone: "",
      gender: "",
    });
  }
  const AddNewClient = () => {
    console.log(form);
    setIsShowModalAddNewClient(false);
    addUser(form).then((res)=>{
      console.log(res.data);
    })
    setForm({
      username:"",
      password:"",
      fullname: "",
      birthday: "",
      email: "",
      phone: "",
      gender: "",
    });
    window.location.reload();
  } 

  const updateClient = (id) => {
  
    setIsEdit(false);
    updateUser(id, editingClient).then((res)=>{
      console.log(res.data);
    })
    setForm({
      fullname: "",
      birthday: "",
      email: "",
      phone: "",
      gender: "",
    });
    window.location.reload();
  }

  const [ listUser, setListUser ] = useState([]);
   
  function getAll() {
    getUsers().then((res)=>{
      console.log("listUser", res.data);
      setListUser(res.data)
    }).catch(error =>{
      console.error(error);
    })
  }
  useEffect(() => { getAll(); }, []);
  
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
                  <th>Username</th>
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
                {listUser.users?.map((ele, i) => {
                  return (
                    <tr key={ele?._id}>
                      <td>{i + 1}</td>
                      <td>{ele?.username}</td>
                      <td>{ele?.fullname}</td>
                      <td>{moment(ele?.birthday).format('MM-DD-YYYY')}</td>
                      {/* <td>{ele?.userId?.lastname}</td> */}
                      <td>{ele?.email}</td>
                      <td>{ele?.phone}</td>
                      {/* <td>{ele?.age}</td> */}
                      <td>{ele?.gender}</td>
                      <td className="select">
                        <button
                          className="btnAction user-btnAction accept-btnAction"
                          onClick={() => onEdit(ele._id)}
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
            title= "Add new client"
            open = {isShowModalAddNewClient}
            onOk = {AddNewClient}
            onCancel={resetAddNewClient}
            >
               <div>
               <div className="mb-5">
       <label className='form__label'>
         Username
       </label>
         <input 
         type="text"
         placeholder={"Username"}
         name= "username"
         value={username}
         onChange={handleInputChangeAddNewClient} 
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
         onChange={handleInputChangeAddNewClient} 
         className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
         required
       />
       </div>
       <div className="mb-5">
       <label className='form__label'>
         Full Name
       </label>
         <input 
         type="text"
         placeholder={'Fullname'}
         name="fullname"
         value={fullname}
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
        type="date"
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
                updateClient(editingClient._id);
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
         placeholder={'Fullname'}
         name="fullname"
         value= {editingClient?.fullname}
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
         value={moment(editingClient?.birthday).format('YYYY-MM-DD')}
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
               <option value="male">Male</option>
               <option value="female">Female</option>
               <option value="other">Other</option>
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
