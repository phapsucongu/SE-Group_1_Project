import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import ClientAccount from '../components/Dashboard/client-account/MyAccount';
import LawyerAccount from '../components/Dashboard/lawyer-account/MyAccount';
import MyBookings from '../pages/MyBookings';
import SearchLawyer from '../pages/LawyerSearching/SearchLawyer';
import LawyerDesc from '../pages/LawyerSearching/LawyerDesc';
import ProtectedRoute from './ProtectedRoute';
import AppointmentPage from '../pages/Appointment/AppointmentPage'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/experts" element={<SearchLawyer />} />
      <Route path="/expertInf" element={<LawyerDesc />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/appointment" element={<AppointmentPage/>}/>
      <Route path="clientaccount" element={<ClientAccount />} />
      <Route path="lawyeraccount" element = {<LawyerAccount/>}/>

      <Route path="/experts" element={
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
            <ProtectedRoute>
              <MyBookings/>
            </ProtectedRoute>
          } 
      />
     
      
    </Routes>
  );
};

export default Routers;
