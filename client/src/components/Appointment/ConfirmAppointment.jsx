import { Button } from 'antd'
import moment from 'moment';
import { useState } from 'react';
import './index.css'
import { FaBriefcase, FaRegClock, FaLocationArrow, FaMailBulk, FaCalendarAlt, FaInfo, FaPhone, FaBirthdayCake  } from "react-icons/fa";
import userProfile from '../../fakedata/userProfile'
import lawyerProfile from '../../fakedata/lawyerProfile'

const ConfirmAppointment = ({ selectedDate, selectTime, address }) => {
    

    return (
        <div style={{ marginTop: '3rem' }}>

            <div className="p-3" style={{ background: '#f8f9fa' }}>
                <div className="flex flex-row">
                <div className="md:w-1/3 sm:w-full mt-3 border-r pr-5 pl-5">
                        <p className='py-2 border-b info-head-date pl-3'>Confirm Date & Time</p>
                        <div className="p-5 rounded-lg shadow-md mt-4">
                            <div className='flex space-x-6'>
                                <FaBriefcase className='icon' />
                                <p>With Lawyer</p>
                            </div>
                            <div className='flex space-x-6'>
                                <FaRegClock className='icon' />
                                <p>1 hour</p>
                            </div>
                            <div className='flex space-x-6'>
                                <FaLocationArrow className='icon' />
                                <p>{address}</p>
                            </div>
                            <div className='flex space-x-6'>
                                <FaCalendarAlt className='icon' />
                                <p>{selectedDate} {selectTime}</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 sm:w-full mt-3 border-r pl-5 pr-5">
                        <p className='py-2 border-b info-head-date'> Client Information </p>
                        <div className="p-5 rounded-lg shadow-md mt-4">
                            <div className='flex space-x-6'>
                                <FaInfo className='icon' />
                                <p>{userProfile.name}</p>
                            </div>
                            <div className='flex space-x-6'>
                                <FaBirthdayCake className='icon' />
                                <p>{userProfile.birthday}</p>
                            </div>
                            <div className='flex space-x-6'>
                                <FaMailBulk className='icon' />
                                <p>{userProfile.email}</p>
                            </div>
                            <div className='flex space-x-6'>
                                <FaPhone className='icon' />
                                <p>{userProfile.phone}</p>
                            </div>
                           
                        </div>
            </div>
            <div className="pl-5 pr-5 md:w-1/3 sm:w-full mt-3">
                        <p className='py-2 border-b info-head-date'> Lawyer Information </p>
                        <div className="p-5 rounded-lg shadow-md mt-4">
                            <div className='flex space-x-6'>
                                <FaInfo className='icon' />
                                <p>{lawyerProfile.name}</p>
                            </div>
                            <div className='flex space-x-6'>
                                <FaMailBulk className='icon' />
                                <p>{lawyerProfile.email}</p>
                            </div>
                            <div className='flex space-x-6'>
                                <FaPhone className='icon' />
                                <p>{lawyerProfile.ticketPrice}$</p>
                            </div>
                            <div className='flex space-x-6'>
                                <FaBriefcase className='icon' />
                                <p>
                                    {lawyerProfile.speciality}
                                </p>
                            </div>
                        </div>
            </div>
            </div>
        </div>
    </div>
    )
}

export default ConfirmAppointment;