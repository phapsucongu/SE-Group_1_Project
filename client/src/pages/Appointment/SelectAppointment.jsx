import { Button } from 'antd'
import moment from 'moment';
import { useState } from 'react';
import './index.css'
import { FaBriefcase, FaRegClock, FaLocationArrow, FaLink, FaCalendarAlt } from "react-icons/fa";

const SelectApppointment = ({ selectedDate, handleDateChange, selectTime, setSelectTime, address, setAddress}) => {
    const handleSelectTime = (date) => { setSelectTime(date) }

    const handleChange = (e) => {
        setAddress(e.target.value);
        }

    
    const timeSlot = [
        '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', // Morning time slot
        '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', // Afternoon time slot
      ];


    const amTimeSlot = timeSlot.filter((item) => item.includes('AM'));
    const pmTimeSlot = timeSlot.filter((item) => item.includes('PM'));

    const next7Days = Array.from({ length: 8}, (_, index) =>
        moment().clone().add(index, 'days')
    )

    return (
        <div style={{ marginTop: '3rem' }}>

            <div className="p-3" style={{ background: '#f8f9fa' }}>
                <div className="flex flex-row">
                <div className="md:w-1/4 sm:w-full mt-3 info-part border-r pr-3">
                        <p className='py-2 border-b info-head-date'>Would you like to schedule an Interview? Pick a Date & Time</p>
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
                                <p>{address === 'Online' ? 'Online' : 'Offline'}</p>
                            </div>
                            <div className='flex space-x-6'>
                                <FaCalendarAlt className='icon' />
                                <p>{(selectedDate && selectTime) && moment(selectedDate).format('LL') + ' ' + selectTime}</p>
                            </div>
                        </div>
                    </div>

                    <div className="pl-3 pr-3 md:w-2/3 sm:w-full mt-3 border-r">
                        <p className='py-2 border-b info-head-date'>
                            {selectedDate ? `Selected - ${moment(selectedDate).format('LL')}` : 'Pick a Time'}
                        </p>
                        <div className='pt-2 info-date-card grid grid-cols-1 md:grid-cols-2 gap-3'>
                        {
                        next7Days.map((item, index) => (
                        <div key={index + 8} className="mb-3" onClick={() => handleDateChange(item)}>
                        <div className={`p-3 mb-3 rounded text-center select-date ${moment(item).format('LL') === moment(selectedDate).format('LL') ? 'active' : ''}`}>
                        <div className='select-month'>{moment(item).format('MMMM YYYY')}</div>
                        <div className='select-day-num'>{moment(item).format('D')}</div>
                        <div className='select-month'>{moment(item).format('dddd')}</div>
                         </div>
                         </div>
                         ))
                         }
                        </div>
                        </div>




                        <div className="pr-3 pl-3 md:w-1/3 sm:w-full mt-3 ">
                        <p className='py-2 border-b info-head-date'>
                            {selectTime ? `Selected -  ${selectTime} To ${moment(selectTime, 'hh:mm A').add(60, 'minutes').format('hh:mm A')}` : 'Pick a Time'}
                        </p>

                        <div className='select-time-div'>
    <h4 className='text-xl font-bold'>Morning Time <span className='text-gray-600'>(8AM - 12PM)</span></h4>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
        {
            amTimeSlot.map((item, id) => (
                <button key={id + 155} className={`py-2 px-4 rounded-lg focus:outline-none ${item === selectTime ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => handleSelectTime(item)}>{item}</button>
            ))
        }
    </div>
</div>

<div className='select-time-div'>
    <h4 className='text-xl font-bold'>Afternoon Time <span className='text-gray-600'>(1PM - 5PM)</span></h4>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 pb-3">
        {
            pmTimeSlot.map((item, id) => (
                <button key={id + 155} className={`py-2 px-4 rounded-lg focus:outline-none ${item === selectTime ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => handleSelectTime(item)}>{item}</button>
            ))
                            }
                            </div>
                    </div>
                    <div className="mb-5 grid grid-cols-2 gap-5 border-t">
                <div>
                <label className="form__label text-l font-bold">
                 Address
                </label>
                <select 
                name="address"
                value={address}
                onChange={handleChange}
                className = "form__input py-2.5">

                    <option value=""></option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                </select>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectApppointment;