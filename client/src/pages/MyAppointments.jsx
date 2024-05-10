import  React from 'react';
import SubHeader from '../components/Header/SubHeader';
import Empty from '../components/Empty';
import { useState } from 'react';
import { appointment } from '../fakedata/appointment'; //cai nay la data fake


const MyAppointments= () => {

  const [appointments, setAppointments] = useState(appointment);

  const handleClick = (id, st) => {
    const newAppointments = appointments.map((ele) => {
      if (ele.id === id) {
        return { ...ele, status: st };
      }
      return ele;
    });
    setAppointments(newAppointments);
    console.log(newAppointments);
  }
    
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
                    <th className="font-semibold py-2 px-4 bg-blue-200 text-bold border border-black">Client</th>
                    <th className="font-semibold py-2 px-4 bg-blue-200 text-bold  border border-black">Date</th>
                    <th className="font-semibold py-2 px-4 bg-blue-200 text-bold  border border-black" >Time</th>
                    <th className="font-semibold py-2 px-4 bg-blue-200 text-bold  border border-black">Status</th>
                    <th className="font-semibold py-2 px-4 bg-blue-200 text-bold  border border-black">_____</th>
                  </tr>
                </thead>
                {<tbody>
                  {appointments?.map((ele, i) => {
                    return (
                      <tr className="even:bg-white odd:bg-gray-300" key={ele?.id}>
                        <td className="font-semibold py-5 px-4   border border-black" >{i + 1}</td>
                        <td  className="font-semibold py-5 px-4  border border-black" >{ele?.client}</td>
                        <td  className="font-semibold py-5 px-4  border border-black" >{ele?.date}</td>
                        <td  className="font-semibold py-5 px-4  border border-black" >{ele?.time}</td>
                        <td  className="font-semibold py-5 px-4  border border-black" >{ele?.status}</td>
                        <td  className="font-semibold py-5 px-4  border border-black">
                        <button
                             className="mr-1 bg-green-500 text-white text-sm py-2 px-3 rounded"
                            onClick={() => {
                              handleClick(ele?.id, "Accept");
                            }}
                          >
                            Accept
                          </button>
                          
                          <button
                             className="bg-red-500 text-white text-sm py-2 px-3 rounded"
                            onClick={() => {
                              handleClick(ele?.id, "Reject");
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
