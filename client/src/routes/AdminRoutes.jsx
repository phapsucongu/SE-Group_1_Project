import { Route, Routes, Navigate } from 'react-router-dom';
import AdminApplications from '../components/Admin/AdminApplications';
import AdminLawyers from '../components/Admin/AdminLawyers';
import AdminAppointments from '../components/Admin/AdminAppointment';
import AdminAddLawyers from '../components/Admin/AdminAddLawyers';
import AdminHome from '../components/Admin/AdminHome';

const AdminRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/clients" element={<AdminApplications />} />
      <Route path="/lawyers" element={<AdminLawyers />} />
      <Route path="/appointments" element={<AdminAppointments />} />
      <Route path="/addLawyers" element={<AdminAddLawyers />} />
    </Routes>
  );
};

export default AdminRouters;
