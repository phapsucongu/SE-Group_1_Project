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
import { deleteAppointment, getAppointments } from "../../service/Apointment";
import moment from "moment";

// axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const AdminAppointments = () => {
 
  const OnRemove = (id) => {
    Modal.confirm({
      title: 'Sure?',
      icon: <ExclamationCircleOutlined />,
      content: 'Do you want to remove this Appointment?',
      okText: 'Yes',
      cancelText: 'No',
      onOk() {
        deleteAppointment(id)
        window.location.reload();
      },
    });
  }
 
 
 

  const [ listAppointment, setListAppointment ] = useState([]);
   
  function getAll() {
    getAppointments().then((res)=>{
      console.log("listAppointment", res);
      setListAppointment(res)
    }).catch(error =>{
      console.error(error);
    })
  }
  useEffect(() => { getAll(); }, []);


  return (
    <div className="adminContainer">
      <h3 className="text-center" style={{fontWeight: 'bold', fontSize: '25px' }}>APPOINTMENTS</h3>
          <div className="user-container">
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  {/* <th>Pic</th> */}
                  <th>Lawyer </th>
                  <th>User </th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Address</th>     
                  <th>Status</th> 
                  <th>Description</th>            
                  <th>Action</th>
                  
                </tr>
              </thead>
              <tbody>
                {listAppointment.appointments?.map((ele, i) => {
                  return (
                    <tr key={ele?._id}>
                      <td>{i + 1}</td>
                      
                      <td>{ele?.lawyerName}</td>
                      <td>{ele?.userName}</td>
                      <td>{moment(ele?.date).format('YYYY-MM-DD')}</td>
                      <td>{ele?.time}</td>
                      <td>{ele?.address}</td>
                      <td>{ele?.status}</td>
                      <td className="truncate overflow-ellipsis max-w-[200px]">{ele?.description}</td>
                      <td className="select">
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
          </div>
    </div>
  );
};

export default AdminAppointments;
