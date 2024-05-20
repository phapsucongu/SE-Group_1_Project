import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { AuthContextProvider } from './context/AuthContext.jsx';
import AppointmentContextProvider from './context/AppointmentContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>

        <AppointmentContextProvider>
        <ToastContainer 
        theme='dark'
        position='top-right'
        autoClose={3000}
        closeOnClick
        pauseOnHover={false} />
        <App /> 
        </AppointmentContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);