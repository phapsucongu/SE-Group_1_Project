import  React from 'react';
import SubHeader from '../components/Header/SubHeader';
import Empty from '../components/Empty';
import { useState } from 'react';
import { appointment } from '../fakedata/appointment'; //cai nay la data fake


const MyBookings = () => {
  const [appointments, setAppointments] = useState(appointment);

  const deleteUser = (id) => {
    const newAppointments = appointments.filter((ele) => ele.id !== id);
    setAppointments(newAppointments);
  }

    
  return (
    <>
    <SubHeader title='My Booking' subtitle='Check your booking'/>
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
                    <th className="font-semibold py-2 px-5 bg-blue-200 text-bold border border-black">Lawyer</th>
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
                        <td  className="font-semibold py-5 px-4  border border-black" >{ele?.lawyer}</td>
                        <td  className="font-semibold py-5 px-4  border border-black" >{ele?.date}</td>
                        <td  className="font-semibold py-5 px-4  border border-black" >{ele?.time}</td>
                        <td  className="font-semibold py-5 px-4  border border-black" >{ele?.address}</td>
                        <td  className="font-semibold py-5 px-4  border border-black" >{ele?.status}</td>
                        <td  className="font-semibold py-5 px-4  border border-black">
                          <button
                             className="bg-red-500 text-white text-sm py-2 px-3 rounded"
                            onClick={() => {
                              deleteUser(ele?.id);
                              console.log(appointments.length);
                            }}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>}
              </table>
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
