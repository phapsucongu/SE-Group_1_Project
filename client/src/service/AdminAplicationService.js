import axios from 'axios'
import axiosInstance, { LOCAL_STORAGE_TOKEN_NAME } from '../context/constants';
import setAuthToken from '../utils/setAuthToken';

const apiUrl = 'http://localhost:5000/api'

export const getUsers = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
        setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }
    const data = await axiosInstance.get(`${apiUrl}/admin/getAllUsers`);
    return data;
};

export const addUser = async (newUser) => {

    const response = await axiosInstance.post(`${apiUrl}/admin/addUser`, newUser);
        if (response.data.success) {
            return response.data;
        }
    
};

export const deleteUser = async (id) => {
        const response = await axiosInstance.delete(`${apiUrl}/admin/deleteUser/${id}`);

};

export const getUser = async (id) => {
        const response = await axiosInstance.get(`${apiUrl}/admin/getUser/${id}`);
        if (response.data.success) {
            return response.data;
        }

}

export const updateUser = async (id,update) => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
        setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }
    const response = await axiosInstance.put(`${apiUrl}/admin/updateUser/${id}`,update);
    if (response.data.success) {
        return response.data;
    }
};
