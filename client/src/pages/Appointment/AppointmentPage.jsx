import { Button, Steps, message } from "antd";
import SelectAppointment from './SelectAppointment'
import { useState } from 'react';
import moment from 'moment';

const AppointmentPage = () => {


const handleChange = (e) => { setSelectValue({ ...selectValue, [e.target.name]: e.target.value }) };

const [selectedDate, setSelectedDate] = useState('');
const handleDateChange = (date) => { setSelectedDate(moment(date).format('YYYY-MM-DD HH:mm:ss')) }
const [selectTime, setSelectTime] = useState('');
const [address, setAddress] = useState('');
const [current, setCurrent] = useState(0);


const steps = [
  {
    title: 'Select Appointment Date & Time',
    content: <SelectAppointment
      handleDateChange={handleDateChange}
      selectedDate={selectedDate}
      selectTime={selectTime}
      setSelectTime={setSelectTime}
      address={address}
      setAddress={setAddress}
    />
  }
  ]

return (
    <>
    <div className="container" style={{ marginTop: '8rem', bottom: '5rem' }}>
    <div className="container" style={{ marginBottom: '12rem', marginTop: '8rem' }}>

    <Steps current={current}/>
          <div className='mb-5 mt-3 mx-3'>{steps[current].content}</div>
          <div className='text-end mx-3' >
            Hi
          </div>
  </div>
  </div>
    </>
  )
}
export default AppointmentPage