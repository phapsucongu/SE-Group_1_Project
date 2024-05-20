import  React from 'react';
import SubHeader from '../components/Header/SubHeader';
const MyBookings = ({appointments}) => {
  return (
    <>
    <SubHeader title='My Booking' subtitle='Check your booking'/>
    <div className="pt-10 pb-10 flex justify-center items-center screen">
    <table className="textleft text-sm text-gray-500 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr className="text-center"> 
          <th scope ="col" className="px-5 py-3">No</th>
          <th scope ="col" className="px-12 py-3">Booking ID</th>
          <th scope ="col" className="px-12 py-3">Date</th>
          <th scope ="col" className="px-12 py-3">Time</th>
          <th scope ="col" className="px-12 py-3">Status</th>
        </tr>
        </thead> 
        <tbody>
            <tr className="text-center">
              <td className="px-5 py-3">1</td>
              <td className="px-12 py-3">01</td>
              <td className="px-12 py-3">25/12/2024</td>
              <td className="px-12 py-3">9:00 am</td>
              <td className="px-12 py-3">Pending</td>
            </tr>
          </tbody>
    </table>
    </div>
    </>
  )
};

export default MyBookings;
