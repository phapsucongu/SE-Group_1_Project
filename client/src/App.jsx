import './App.css';
import Layout from './layout/Layout';
import AuthContextProvider from './context/AuthContext';
import AdminView from './components/Admin/AdminView';
function App() {
  const isAdmin = false;
  return (
    <>
      {isAdmin ? <AdminView /> : <Layout />}
    </>
  );
}

export default App;
