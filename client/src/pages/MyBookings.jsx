import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import SubHeader from '../components/Header/SubHeader';
import Empty from '../components/Empty';
import { AppointmentContext } from '../context/AppointmentContext';
import axiosInstance, { apiUrl } from '../context/constants';
import moment from 'moment';
import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { getLawyer } from '../service/Apointment';


const MyBookings = () => {
  const { appointmentState, getAppointments } = useContext(AppointmentContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [lawyer, setLawyer] = useState([]);


  useEffect(() => {
    if (appointmentState.appointmentsLoading) {
      getAppointments();
    }
  }, [appointmentState.appointmentsLoading, getAppointments]);

  const handleView = (id) => {
    getLawyer(id)
      .then((res) => {
        console.log("Lawyer", res);
        setLawyer(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
      setIsModalVisible(true);
  };


  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const OnRemove = (id) => {
    console.log(id);
    Modal.confirm({
      title: 'Sure?',
      icon: <ExclamationCircleOutlined />,
      content: 'Do you want to remove ',
      okText: 'Yes',
      cancelText: 'No',
      onOk() {
        deleteAppointment(id);
      },
    });
  };

  const appointments = appointmentState.appointments.data || [];

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
  };

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
                      <td className="font-semibold py-5 px-4 border border-black">
                        {ele?.lawyerName}
                        <Button onClick={() => handleView(ele?.lawyer)}>...</Button>
                      </td>
                      <td className="font-semibold py-5 px-4 border border-black">
                        {ele ? moment(ele.date).format('MM/DD/YYYY') : ''}
                      </td>
                      <td className="font-semibold py-5 px-4 border border-black">{ele?.time}</td>
                      <td className="font-semibold py-5 px-4 border border-black">{ele?.address}</td>
                      <td className="font-semibold py-5 px-4 border border-black">{ele?.status}</td>
                      <td className="font-semibold py-5 px-4 border border-black">
                        <button
                          className="bg-red-500 text-white text-sm py-2 px-3 rounded"
                          onClick={()=> OnRemove(ele._id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Modal title="Lawyer Details" open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <p>Name: {lawyer.fullname}</p>
              <p>Email: {lawyer.email}</p>
              <p>Phone: {lawyer.phone}</p>
              <p>Speciality: {lawyer.speciality}</p>
            </Modal>
          </div>
        ) : (
          <Empty />
        )}
      </section>
    </>
  );
};

export default MyBookings;