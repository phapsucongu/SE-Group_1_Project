import './App.css';
import Layout from './layout/Layout';
import AuthContextProvider from './context/AuthContext';
import AdminView from './components/Admin/AdminView';
import { useContext } from 'react';
import { authContext } from './context/AuthContext';

function App() {
  const { authState: {user} } = useContext(authContext);
  const role = user?.role;
  console.log(role);
  const isAdmin = role === 'admin' ? true : false;
  return (
    <>
      {isAdmin ? <AdminView /> : <Layout />}
    </>
  );
}

export default App;
