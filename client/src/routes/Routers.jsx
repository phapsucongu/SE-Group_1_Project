import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';

import { Route, Routes } from 'react-router-dom';
import MyBookings from '../pages/MyBookings';
import SearchLawyer from '../pages/LawyerSearching/SearchLawyer';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/experts" element={<SearchLawyer />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/mybookings" element={<MyBookings />} />
    </Routes>
  );
};

export default Routers;
