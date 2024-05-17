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
import AppointmentPage from "../Appointment/AppointmentPage";

// axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const AdminAppointments = () => {
  const onEdit = (id) => {
    setIsEdit(true);
    const Appointment = applications.find(Appointment => Appointment.id === id);
    console.log(Appointment);
    setEditingAppointment(Appointment);
  }
  const OnRemove = (id) => {
    Modal.confirm({
      title: 'Sure?',
      icon: <ExclamationCircleOutlined />,
      content: 'Do you want to remove this Appointment?',
      okText: 'Yes',
      cancelText: 'No',
      onOk() {
        setApplications(prev => prev.filter(Appointment => Appointment.id !== id));
      },
    });
  }
  const [isEdit, setIsEdit] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleInputChange = (e) => {
    setEditingAppointment({ ...editingAppointment, [e.target.name]: e.target.value });
  }
  

  const [applications, setApplications] = useState ([
    {
      id: "1",
      lawyerID: "101",
      clientID: "101",
      date: "2021-09-01",
      time: "10:00 AM",
      address: "Online",
      status: "Pending",
      description: "This is a description of the appointment."
    },
    {
      id: "2",
      lawyerID: "102",
      clientID: "102",
      date: "2021-09-01",
      time: "11:00 AM",
      address: "Online",
      status: "Pending",
      description: "i want more information about the case."
    },
    {
      id: "3",
      lawyerID: "103",
      clientID: "103",
      date: "2021-09-01",
      time: "12:00 PM",
      address: "Facility no. 1",
      status: "Accept",
      description: "I want to know more about the case."
    },
    {
     id: "4",
     lawyerID: "104",
      clientID: "104",
      date: "2021-09-01",
      time: "01:00 PM",
      address: "Facility no. 2",
      status: "Reject", 
      description: "I want to know about you"
    },
    {
      id: "5",
      lawyerID: "105",
      clientID: "105",
      date: "2021-09-01",
      time: "02:00 PM",
      address: "Facility no. 2",
      status: "Pending",
      description: "hi there!"
    },
    {
      id: "6",
      lawyerID: "106",
      clientID: "106",
      date: "2021-09-01",
      time: "03:00 PM",
      address: "Facility no. 1",
      status: "Pending",
      description: "I want to know more about the case."
    },
    {
      id: "7",
      lawyerID: "107",
      clientID: "107",
      date: "2021-09-01",
      time: "04:00 PM",
      address: "Facility no. 2",
      status: "Pending",
      description: "I want say his."
    },
    
  ]);

  const resetEditing = () => {
    setIsEdit(false);
    setEditingAppointment(null);
  }

  return (
    <div className="adminContainer">
      <h3 className="text-center" style={{fontWeight: 'bold', fontSize: '25px' }}>APPOINTMENTS</h3>
          <div className="user-container">
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  {/* <th>Pic</th> */}
                  <th>Lawyer ID</th>
                  <th>User ID</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Address</th>     
                  <th>Status</th> 
                  <th>Description</th>            
                  <th>Action</th>
                  
                </tr>
              </thead>
              <tbody>
                {applications?.map((ele, i) => {
                  return (
                    <tr key={ele?.id}>
                      <td>{i + 1}</td>
                      
                      <td>{ele?.lawyerID}</td>
                      <td>{ele?.clientID}</td>
                      <td>{ele?.date}</td>
                      <td>{ele?.time}</td>
                      <td>{ele?.address}</td>
                      <td>{ele?.status}</td>
                      <td className="truncate overflow-ellipsis max-w-[200px]">{ele?.description}</td>


                      <td className="select">
                        <button
                          className="btnAction user-btnAction accept-btnAction"
                          onClick={() => onEdit(ele.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btnAction user-btnAction"
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
              title="Edit Appointment"
              open={isEdit}
              onOk={() => {
                setApplications(prev => prev.map(Appointment => Appointment.id === editingAppointment.id ? editingAppointment : Appointment));
                resetEditing();
              }}
              onCancel={() => setIsEdit(false)}
              cancelText="Cancel"
              >
        <div>
       <div className="mb-5 pt-10">
       <label className='form__label'>
         Lawyer ID
       </label>
         <input 
         type="text"
         placeholder={'Lawyer ID'}
         name="lawyerID"
         value= {editingAppointment?.lawyerID}
         onChange={handleInputChange} 
         className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
         required
       />
       </div>
       <div className="mb-5">
       <label className='form__label'>
          Client ID
       </label>
         <input 
          type="text"
         placeholder="Client ID"
         name="clientID"
         value={editingAppointment?.clientID}
         onChange={handleInputChange}  
         className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
         required
       />
       </div>
       <div className="mb-5">
       <label className='form__label'>
         Date
       </label>
         <input 
         type="date"
         placeholder="Date"
         name="date"
         value={editingAppointment?.date}
         onChange={handleInputChange}  
         className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
         required
       />
       </div>
       <div className="mb-5">
       <label className='form__label'>
         Time
       </label>
         <input 
         type="text"
         placeholder="Time"
         name="time"
         value={editingAppointment?.time}
         onChange={handleInputChange}  
         className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
         required
       />
       </div>
       <div className="mb-5 grid grid-cols-3 gap-5">
           <div>
           <label className="form__label">
            Address
           </label>
           <select 
           name="address"
           value={editingAppointment?.address}
           onChange={handleInputChange}
           className = "form__input-1 py-3.5">
               <option value=""></option>
               <option value="Online">Online</option>
               <option value="Facility no. 1">Facility no. 1</option>
               <option value="Facility no. 2">Facility no. 2</option>
           </select>
           </div>
           <div>
                <label className="form__label">
                 Status
                </label>
                <select 
                name="status"
                value={editingAppointment?.status}
                onChange={handleInputChange}
                className = "form__input-1 py-3.5">
                    <option value="Pending">Pending</option>
                    <option value="Accept">Accept</option>
                    <option value="Reject">Reject</option>
                </select>
            </div>
       </div>     
       <div className="mb-5">
            <label className='form__label'>
              Description
            </label>
            <textarea
              rows={3}
              id='description'
              name='description'
              value ={editingAppointment?.description}
            onChange={handleInputChange}
              className='form__input-1 mt-1' />
          </div>   
</div>
              </Modal>
          </div>
    </div>
  );
};

export default AdminAppointments;
