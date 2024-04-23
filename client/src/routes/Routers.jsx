import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import ChatPage from '../pages/Chat';
import Profile from '../pages/Profile';

import { Route, Routes } from 'react-router-dom';
import MyBookings from '../pages/MyBookings';
import SearchLawyer from '../pages/LawyerSearching/SearchLawyer';
import LawyerDesc from '../pages/LawyerSearching/LawyerDesc';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/experts" element={<SearchLawyer />} />
      <Route path="/expertInf" element={<LawyerDesc />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/mybookings" element={<MyBookings />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Routers;
