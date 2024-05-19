import  React from 'react';
import SubHeader from '../components/Header/SubHeader';
import Empty from '../components/Empty';
import { useState,useContext,useEffect } from 'react';
//import { appointment } from '../fakedata/appointment'; //cai nay la data fake
import axiosInstance,{apiUrl} from '../context/constants';
import { AppointmentContext } from '../context/AppointmentContext';

const MyAppointments= () => {

  //const [appointments, setAppointments] = useState(appointment);

  const { appointmentState, getAppointments } = useContext(AppointmentContext);
  if (appointmentState.appointmentsLoading) {
    useEffect(() => {
      getAppointments();
    }, [getAppointments]);
  }
  const appointments = appointmentState.appointments.data || [];
  console.log("Appointments: ", appointments);
  const handleClick = async (id, status) => {
    try {
      console.log(id);
      const response = await axiosInstance.put(`${apiUrl}/appointment/${status}/${id}`);
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
    //const Client chỗ này kiếm con lawyer theo id đi
    setLawyerInfo(Client);
  }
  const handleOk = () => {
    setIsShowModal(false);
  }
  const handleCancel = () => {
    setIsShowModal(false);
  }
  const [ClientInfo, setClientInfo] = useState(null);

    
  return (
    <>
    <SubHeader title='My Appointment' subtitle='Check your appointment'/>
        <section className="w-80vw mt-8 flex items-center justify-center">
          {appointments.length > 0 ? (
            <div className="flex justify-center w-full">
              <div className="overflow-x-auto whitespace-no-wrap">
              <table
              className ="w-full border-collapse border border-gray-300"
              >
                <thead>
                  <tr className = "text-center">
                    <th className=" font-semibold py-3 px-5 bg-blue-200 text-bold border border-black">S.No</th>
                    <th className="font-semibold py-2 px-5 bg-blue-200 text-bold border border-black">Client</th>
                    <th className="font-semibold py-2 px-5 bg-blue-200 text-bold  border border-black">Date</th>
                    <th className="font-semibold py-2 px-5 bg-blue-200 text-bold  border border-black" >Time</th>
                    <th className="font-semibold py-2 px-5 bg-blue-200 text-bold  border border-black" >Address</th>
                    <th className="font-semibold py-2 px-5 bg-blue-200 text-bold  border border-black">Status</th>
                    <th className="font-semibold py-2 px-5 bg-blue-200 text-bold  border border-black">Action</th>
                  </tr>
                </thead>
                {<tbody>
                  {appointments?.map((ele, i) => {
                    return (
                      <tr className="even:bg-white odd:bg-gray-300" key={ele?.id}>
                        <td className="font-semibold py-5 px-4   border border-black" >{i + 1}</td>
                        <td  className="font-semibold py-5 px-4  border border-black" >{ele?.user}<Button onClick = {showModal(ele?.id)} >View</Button></td>
                        <td  className="font-semibold py-5 px-4  border border-black" >{ele?.date}</td>
                        <td  className="font-semibold py-5 px-4  border border-black" >{ele?.time}</td>
                        <td  className="font-semibold py-5 px-4  border border-black" >{ele?.address}</td>
                        <td  className="font-semibold py-5 px-4  border border-black" >{ele?.status}</td>
                        <td  className="font-semibold py-5 px-4  border border-black">
                        <button
                             className="mr-1 bg-green-500 text-white text-sm py-2 px-3 rounded"
                            onClick={() => {
                              handleClick(ele?._id, "ACCEPT");
                            }}
                          >
                            Accept
                          </button>
                          
                          <button
                             className="bg-red-500 text-white text-sm py-2 px-3 rounded"
                            onClick={() => {
                              handleClick(ele?._id, "REJECT");
                            }}
                          >
                            Reject
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>}
              </table>
              <Modal title="Client Details" open={isShowModal} onOk={handleOk} onCancel={handleOk} >
                <p>Name: {Client?.fullname} </p>
                <p>Email: {Client?.email} </p>
                <p>Phone: {Client?.phone}</p> 
               
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

export default MyAppointments;
