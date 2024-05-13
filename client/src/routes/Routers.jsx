import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import ClientAccount from '../components/Dashboard/client-account/MyAccount';
import LawyerAccount from '../components/Dashboard/lawyer-account/MyAccount';
import MyBookings from '../pages/MyBookings';
import SearchLawyer from '../components/LawyerSearching/SearchLawyer';
import LawyerDesc from '../components/LawyerSearching/LawyerDesc';
import ProtectedRoute from './ProtectedRoute';
import AppointmentPage from '../components/Appointment/AppointmentPage'
import MyAppointments from '../pages/MyAppointments';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/findalawyer" element={<SearchLawyer />} />
      <Route path="/lawyerInfo" element={<LawyerDesc />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/appointment" element={<AppointmentPage/>}/>
      <Route path="clientaccount" element={<ClientAccount />} />
      <Route path="lawyeraccount" element = {<LawyerAccount/>}/>
      <Route path="myappointments" element={<MyAppointments/>}/>

      <Route path="/findalawyer" element={
            <ProtectedRoute>
              <SearchLawyer />
            </ProtectedRoute>
          } 
      />
      <Route path="/contact" element={
            <ProtectedRoute>
              <Contact/>
            </ProtectedRoute>
          } 
      />
      <Route path="/mybookings" element={
           
              <MyBookings/>
           
          } 
      />
     
      
    </Routes>
  );
};

export default Routers;
