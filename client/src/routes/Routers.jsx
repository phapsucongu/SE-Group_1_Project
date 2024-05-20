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
import AdminApplications from '../components/Admin/AdminApplications';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/findalawyer" element={<SearchLawyer />} />
      <Route path="/lawyerInfo/:id" element={<LawyerDesc />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/appointment/:lawyerid" element={
          <ProtectedRoute>
            <AppointmentPage/>
          </ProtectedRoute>
          }/>
      <Route path="/dashboard" element={
          <ProtectedRoute>
            <AdminApplications />
          </ProtectedRoute>
          } 
      />
      <Route path="clientaccount" element={
            <ProtectedRoute>
              <ClientAccount/>
            </ProtectedRoute>
          }
      />
      <Route path="lawyeraccount" element = {
            <ProtectedRoute>
              <LawyerAccount/>
            </ProtectedRoute>  
            }
      />
      <Route path="myappointments" element={
            <ProtectedRoute>
              <MyAppointments/>
            </ProtectedRoute>
              }
      />
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
