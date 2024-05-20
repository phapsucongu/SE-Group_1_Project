import axios from 'axios'
import axiosInstance, { LOCAL_STORAGE_TOKEN_NAME } from '../context/constants';
import setAuthToken from '../utils/setAuthToken';

const apiUrl = 'http://localhost:5000/api'
export const getAppointments = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
        setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }
   
        const response = await axiosInstance.get(`${apiUrl}/admin/getAllAppointments`);
        if (response.data.success) {
          return response.data;
        }
};

export const deleteAppointment = async (id) => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
        setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }
    try {
        const response = await axiosInstance.delete(`${apiUrl}/admin/deleteAppointment/${id}`);
        if (response.data.success) {
            return response.data;
        }
    } catch (error) {
        console.error(error);
    }
};


export const getAllLawyer = async () => { 
        const response = await axiosInstance.get(`${apiUrl}/expert/getall`);
        if (response.data.success) {
            return response.data;
        }
};

export const getLawyer = async (id) => {
    const response = await axiosInstance.get(`${apiUrl}/expert/get/${id}`);
    if (response.data.success) {
        return response.data;
    }
};

export const getClient = async (id) => {
    const response = await axiosInstance.get(`${apiUrl}/profile/user/${id}`);
    if (response.data.success) {
        return response.data;
    }
};


export const createAppointment = async (form) => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
        setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }
    const response = await axiosInstance.post(`${apiUrl}/appointment/create`,form);
    if (response.data.success) {
        return response.data;
    }
};

export const changePassword = async (form) => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
        setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }
    const response = await axiosInstance.put(`${apiUrl}/profile/changePassword`,form);
    if (response.data.success) {
        return response.data;
    }
}