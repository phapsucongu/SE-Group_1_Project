import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Experts from '../pages/Experts';

import { Route, Routes } from 'react-router-dom';
import MyBookings from '../pages/MyBookings';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/experts" element={<Experts />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/mybookings" element={<MyBookings />} />
    </Routes>
  );
};

export default Routers;
