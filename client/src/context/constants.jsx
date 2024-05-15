export const apiUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000/api' : 'https://yourdeployment.com/api';
export const LOCAL_STORAGE_TOKEN_NAME = 'token';     
import axios from 'axios';       
const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
      'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Thêm header Authorization hoặc các header khác nếu cần
      'Content-Type': 'application/json',
    }
  });
export default axiosInstance;  

export const APPOINTMENTS_LOADED_SUCCESS = 'APPOINTMENT_LOADED_SUCCESS'
export const APPOINTMENTS_LOADED_FAIL = 'APPOINTMENT_LOADED_FAIL'
export const ADD_APPOINTMENT = 'ADD_APPOINTMENT'
export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT'
export const FIND_APPOINTMENT = 'FIND_APPOINTMENT'
