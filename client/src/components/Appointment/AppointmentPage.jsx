import { Button, Steps, message } from "antd";
import SelectAppointment from './SelectAppointment'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ConfirmAppointment from './ConfirmAppointment';


const AppointmentPage = () => {


const handleChange = (e) => { setSelectValue({ ...selectValue, [e.target.name]: e.target.value }) };

const [selectedDate, setSelectedDate] = useState('');
const handleDateChange = (date) => { setSelectedDate(moment(date).format('YYYY-MM-DD')) }
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
  },
  {
    title: 'Confirm Appointment',
    content: (<ConfirmAppointment
    selectedDate={selectedDate}
    selectTime={selectTime}
    address={address}
  />),
  }
  ]



return (
    <>
    <div className="container" style={{ marginTop: '8rem', bottom: '5rem' }}>
    <div className="container" style={{ marginBottom: '12rem', marginTop: '8rem' }}>

    <Steps current={current}/>
          <div className='mb-5 mt-3 mx-3'>{steps[current].content}</div>
          <div className="mt-3">
            {current < steps.length - 1 && (
              <Button className="px-4 py-2 text-lg flex items-center justify-center ml-auto" 
               type="primary" onClick={() => setCurrent(current + 1)}
               disabled={selectedDate === '' || selectTime === '' || address === ''}
               >
                Next
              </Button>
              
            )}
            <div className="px-4 py-2 flex items-center justify-end space-x-4">
            {current > 0 && (
              <Button 
                className="px-4 py-2 text-lg flex items-center justify-center"
              onClick={() => setCurrent(current - 1)}>
                Previous
              </Button>
            )}
            {current === steps.length - 1 && (
              <Link to="/mybookings">
              <Button
                className="px-4 py-2 text-lg flex items-center justify-center"
              type="primary" onClick={() => message.success('Processing complete!')}>
                Done
              </Button>
              </Link>
            )}
            </div>
  </div>
  </div>
  </div>.
    </>

  )
}
export default AppointmentPage