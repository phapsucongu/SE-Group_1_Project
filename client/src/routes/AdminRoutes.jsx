import { Route, Routes, Navigate } from 'react-router-dom';
import AdminApplications from '../components/Admin/AdminApplications';
import AdminLawyers from '../components/Admin/AdminLawyers';
import AdminAppointments from '../components/Admin/AdminAppointment';
import AdminHome from '../components/Admin/AdminHome';

const AdminRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/clients" element={<AdminApplications />} />
      <Route path="/lawyers" element={<AdminLawyers />} />
      <Route path="/appointments" element={<AdminAppointments />} />
    </Routes>
  );
};

export default AdminRouters;
