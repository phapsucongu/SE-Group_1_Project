import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import ChatPage from '../pages/Chat';
import Profile from '../pages/Profile';
import MyBookings from '../pages/MyBookings';
import SearchLawyer from '../pages/LawyerSearching/SearchLawyer';
import ProtectedRoute from './ProtectedRoute';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/chat" element={<ChatPage />} />

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
      <Route path="/profile" element={
            <ProtectedRoute>
              <Profile/>
            </ProtectedRoute>
          }
      />
    </Routes>
  );
};

export default Routers;
