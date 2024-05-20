export const apiUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000/api' : 'https://yourdeployment.com/api';
export const LOCAL_STORAGE_TOKEN_NAME = 'token';     
import axios from 'axios';       
const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
      'Access-Control-Allow-Origin': '*' ,
      //'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Thêm header Authorization hoặc các header khác nếu cần
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "preflightContinue": "false",
      'Content-Type': 'application/json',
    }
  });
export default axiosInstance;  

export const APPOINTMENTS_LOADED_SUCCESS = 'APPOINTMENT_LOADED_SUCCESS'
export const APPOINTMENTS_LOADED_FAIL = 'APPOINTMENT_LOADED_FAIL'
export const ADD_APPOINTMENT = 'ADD_APPOINTMENT'
export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT'
export const FIND_APPOINTMENT = 'FIND_APPOINTMENT'

export const SET_AUTH = 'SET_AUTH'
export const GET_USERS = 'GET_USERS'
export const GET_LAWYERS = 'GET_LAWYERS'
export const ADD_LAWYER = 'ADD_LAWYER'
export const DELETE_LAWYER = 'DELETE_LAWYER'
export const ADD_USER = 'ADD_USER'
export const DELETE_USER = 'DELETE_USER'
export const GET_APPOINTMENTS = 'GET_APPOINTMENTS'
export const GET_USER = 'GET_USER'
export const GET_LAWYER = 'GET_LAWYER'
export const GET_APPOINTMENT = 'GET_APPOINTMENT'