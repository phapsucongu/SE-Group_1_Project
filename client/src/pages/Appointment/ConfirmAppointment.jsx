import { Button } from 'antd'
import moment from 'moment';
import { useState } from 'react';
import './index.css'
import { FaBriefcase, FaRegClock, FaLocationArrow, FaLink, FaCalendarAlt } from "react-icons/fa";

const ConfirmAppointment = () => {
    

    return (
        <div style={{ marginTop: '3rem' }}>

            <div className="p-3" style={{ background: '#f8f9fa' }}>
                <div className="flex flex-row">
                <div className="md:w-1/4 sm:w-full mt-3 info-part border-r pr-3">
                        <p className='py-2 border-b info-head-date'>Confirm Date & Time</p>
                        <div className="p-5 rounded-lg shadow-md">
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
                                <p></p>
                            </div>
                            <div className='flex space-x-6'>
                                <FaCalendarAlt className='icon' />
                                <p></p>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    </div>
    )
}

export default ConfirmAppointment;