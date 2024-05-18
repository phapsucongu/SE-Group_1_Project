import { Button } from 'antd'
import moment from 'moment';
import { useState } from 'react';
import './index.css'
import { FaBriefcase, FaRegClock, FaLocationArrow, FaLink, FaCalendarAlt } from "react-icons/fa";

const SelectApppointment = ({ selectedDate, handleDateChange, selectTime, setSelectTime, address, setAddress, description, setDescription }) => {
    const handleSelectTime = (time) => { setSelectTime(time) }

    const handleChangeAddress = (e) => {
        setAddress(e.target.value);
    }
    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    }
    


    const timeSlot = [
        '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '11:00 AM', , // Morning time slot
        '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '6:00 PM', // Afternoon time slot
    ];


    const amTimeSlot = timeSlot.filter((item) => item.includes('AM'));
    const pmTimeSlot = timeSlot.filter((item) => item.includes('PM'));

    const next7Days = Array.from({ length: 8 }, (_, index) =>
        moment().clone().add(index + 1, 'days')
    )

    return (
        <div style={{ marginTop: '3rem' }}>

            <div className="p-3" style={{ background: '#f8f9fa' }}>
                <div className="flex flex-row">
                    <div className="pl-5 md:w-1/4 sm:w-full mt-3 border-r pr-5">
                        <p className='py-2 border-b info-head-date'>Selected information</p>
                        <div className="p-5 rounded-lg shadow-md  mt-4">
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
                                <p>{(selectedDate && selectTime) && moment(selectedDate).format('MM/DD/YYYY') + ' ' + selectTime}</p>
                            </div>
                        </div>
                    </div>

                    <div className="pl-3 pr-3 md:w-1/3 sm:w-full mt-3 border-r">
                        <p className='py-2 border-b info-head-date'>
                            {selectedDate ? `Selected - ${moment(selectedDate).format('MM/DD/YYYY')}` : 'Pick a Time'}
                        </p>
                        <div className='pt-2'>
                            <label className="text-l font-bold">
                                Date
                            </label>
                        </div>
                        <div className="pt-2 pb-2 boder-b">
                            <input
                                type="date"
                                name="date"
                                value={moment(selectedDate).format('YYYY-MM-DD')}
                                onChange={(e) => handleDateChange(e.target.value)}
                                className="form__input py-4"
                            />
                        </div>


                        <label className="text-l font-bold">
                            Address
                        </label>
                        <div className="pt-2 pb-2 boder-b">
                            <select
                                name="address"
                                value={address}
                                onChange={handleChangeAddress}
                                className="form__input py-4 bg-white">
                                <option value=""></option>
                                <option value="Online">Online</option>
                                <option value="Facility no. 1">Facility no. 1 </option>
                                <option value="Facility no. 2">Facility no. 2 </option>
                            </select>
                        </div>
                        <label className="text-l font-bold">
                            Description
                        </label>
                        <div className="pt-2 pb-2 boder-b">
                            <textarea
                                name="description"
                                value={description}
                                onChange={handleChangeDescription}
                                className="form__input-1 py-4"
                            />
                        </div>
                    </div>




                    <div className="pr-5 pl-5 md:w-2/5 sm:w-full mt-3 ">
                        <p className='py-2 border-b info-head-date'>
                            {selectTime ? `Selected -  ${selectTime} To ${moment(selectTime, 'hh:mm A').add(60, 'minutes').format('hh:mm A')}` : 'Pick a Time'}
                        </p>

                        <div className='select-time-div'>
                            <h4 className='text-xl font-bold'>Morning Time <span className='text-gray-600'>(7AM - 11AM)</span></h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
                                {
                                    amTimeSlot.map((item, id) => (
                                        <button key={id + 155} className={`py-2 px-4 rounded-lg focus:outline-none ${item === selectTime ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => handleSelectTime(item)}>{item}</button>
                                    ))
                                }
                            </div>
                        </div>

                        <div className='select-time-div'>
                            <h4 className='text-xl font-bold'>Afternoon Time <span className='text-gray-600'>(2PM - 6PM)</span></h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 pb-3">
                                {
                                    pmTimeSlot.map((item, id) => (
                                        <button key={id + 155} className={`py-2 px-4 rounded-lg focus:outline-none ${item === selectTime ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => handleSelectTime(item)}>{item}</button>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectApppointment;