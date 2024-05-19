import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import SubHeader from '../components/Header/SubHeader';
import Empty from '../components/Empty';
import { AppointmentContext } from '../context/AppointmentContext';
import axiosInstance, { apiUrl } from '../context/constants';
import { Modal } from 'antd';
import { Button } from 'antd';

const MyBookings = () => {


  const { appointmentState, getAppointments } = useContext(AppointmentContext);

  if (appointmentState.appointmentsLoading) {
    useEffect(() => {
      getAppointments();
    }, [getAppointments]);
  }
  const appointments = appointmentState.appointments.data || [];
  console.log("Appointments: ", appointments);
  const deleteAppointment = async (id) => {
    try {
      console.log(id);
      const response = await axiosInstance.delete(`${apiUrl}/appointment/delete/${id}`);
      if (response.data.success) {
        getAppointments();
      }
    } catch (error) {
      console.error(error);
    }
  }
 const [isShowModal, setIsShowModal] = useState(false);
  const showModal = (id) => {
    setIsShowModal(true);
    //const Lawyer chỗ này kiếm con lawyer theo id đi
    setLawyerInfo(Lawyer);
  }
  const handleOk = () => {
    setIsShowModal(false);
  }
  const handleCancel = () => {
    setIsShowModal(false);
  }
  const [LawyerInfo, setLawyerInfo] = useState(null);

  return (
    <>
      <SubHeader title='My Booking' subtitle='Check your booking' />
      <section className="w-80vw mt-8 flex items-center justify-center">
        {appointments.length > 0 ? (
          <div className="flex justify-center w-full">
            <div className="overflow-x-auto whitespace-no-wrap">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="text-center">
                    <th className="font-semibold py-3 px-5 bg-blue-200 text-bold border border-black">S.No</th>
                    <th className="font-semibold py-2 px-5 bg-blue-200 text-bold border border-black">Lawyer</th>
                    <th className="font-semibold py-2 px-5 bg-blue-200 text-bold border border-black">Date</th>
                    <th className="font-semibold py-2 px-5 bg-blue-200 text-bold border border-black">Time</th>
                    <th className="font-semibold py-2 px-5 bg-blue-200 text-bold border border-black">Address</th>
                    <th className="font-semibold py-2 px-5 bg-blue-200 text-bold border border-black">Status</th>
                    <th className="font-semibold py-2 px-5 bg-blue-200 text-bold border border-black">Action</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((ele, i) => (
                    <tr className="even:bg-white odd:bg-gray-300" key={ele?._id}>
                      <td className="font-semibold py-5 px-4 border border-black">{i + 1}</td>
                      <td className="font-semibold py-5 px-4 border border-black">{ele?.lawyer} <Button onClick = {showModal} >View</Button>
                          </td>
                      <td className="font-semibold py-5 px-4 border border-black"> {ele?.date} </td>
                      <td className="font-semibold py-5 px-4 border border-black">{ele?.time}</td>
                      <td className="font-semibold py-5 px-4 border border-black">{ele?.address}</td>
                      <td className="font-semibold py-5 px-4 border border-black">{ele?.status}</td>
                      <td className="font-semibold py-5 px-4 border border-black">
                        <button
                          className="bg-red-500 text-white text-sm py-2 px-3 rounded"
                          onClick = {() => deleteAppointment(ele?._id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Modal title="Lawyer Details" open={isShowModal} onOk={handleOk} onCancel={handleOk} >
                <p>Lawyer Name: {LawyerInfo?.fullname} </p>
                <p>Lawyer Email: {LawyerInfo?.email} </p>
                <p>Lawyer Phone: {LawyerInfo?.phone}</p> 
                <p>Lawyer Speciality:{LawyerInfo?.speciality} </p>
                <p>Lawyer Price: {LawyerInfo?.ticketprice} </p>
              </Modal>
            </div>
          </div>
        ) : (
          <Empty />
        )}
      </section>
    </>
  )
};

export default MyBookings;
