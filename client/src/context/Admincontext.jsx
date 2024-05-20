import {createContext, useReducer,useEffect} from 'react';
import {authReducer} from '../reducer/authReducer';
import {apiUrl,LOCAL_STORAGE_TOKEN_NAME} from './constants';
import axiosInstance from './constants';
import setAuthToken from '../utils/setAuthToken';

export const AdminContext = createContext();

const AdminContextProvider = ({children}) => {
    const [adminState, dispatch] = useReducer(authReducer, {
        adminLoading: true,
        isAuthenticated: false,
        users: [],
        lawers: [],
        user: null,
        lawyer: null 
    });

    // Authenticate user
    const loadUser = async () => {
        if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
        }

        try {
            const response = await axiosInstance.get(`${apiUrl}/auth`);
            if (response.data.success) {
                dispatch({
                    type: 'SET_AUTH',
                    payload: {isAuthenticated: true, user: response.data.user}
                });
            }
        } catch (error) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
            setAuthToken(null);
            dispatch({
                type: 'SET_AUTH',
                payload: {isAuthenticated: false, user: null}
            });
        }
    };

    useEffect(() => loadUser(), []);

    // get all users
    const getUsers = async () => {
        try {
            const response = await axiosInstance.get(`${apiUrl}/admin/getAllUsers`);
            if (response.data.success) {
                dispatch({
                    type: 'GET_USERS',
                    payload: response.data.users
                });
                console.log(response.data.users);
            }
        } catch (error) {
            console.error(error);
        }
    };

    // get all lawyers
    const getLawyers = async () => {
        try {
            const response = await axiosInstance.get(`${apiUrl}/admin/getAllExperts`);
            if (response.data.success) {
                dispatch({
                    type: 'GET_LAWYERS',
                    payload: response.data.lawyers
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    // add lawyer
    const addLawyer = async (newLawyer) => {
        try {
            const response = await axiosInstance.post(`${apiUrl}/admin/addExpert`, newLawyer);
            if (response.data.success) {
                dispatch({ type: 'ADD_LAWYER', payload: response.data.lawyer });
                return response.data;
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server error' };
        }
    };

    // add user
    const addUser = async (newUser) => {
        try {
            const response = await axiosInstance.post(`${apiUrl}/admin/addUser`, newUser);
            if (response.data.success) {
                dispatch({ type: 'ADD_USER', payload: response.data.user });
                return response.data;
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server error' };
        }
    };

    //get user
    const getUser = async (id) => {
        try {
            const response = await axiosInstance.get(`${apiUrl}/admin/getUser/${id}`);
            if (response.data.success) {
                dispatch({ type: 'GET_USER', payload: response.data.user });
            }
        } catch (error) {
            console.error(error);
        }
    };

    //get lawyer
    const getLawyer = async (id) => {
        try {
            const response = await axiosInstance.get(`${apiUrl}/admin/getExpert/${id}`);
            if (response.data.success) {
                dispatch({ type: 'GET_LAWYER', payload: response.data.lawyer });
            }
        } catch (error) {
            console.error(error);
        }
    };

    // get all appointments
    const getAppointments = async () => {
        try {
            const response = await axiosInstance.get(`${apiUrl}/admin/getAllAppointments`);
            if (response.data.success) {
                dispatch({ type: 'GET_APPOINTMENTS', payload: response.data.appointments });
            }
        } catch (error) {
            console.error(error);
        }
    };

    // delete user
    const deleteUser = async (id) => {
        try {
            const response = await axiosInstance.delete(`${apiUrl}/admin/deleteUser/${id}`);
            if (response.data.success) {
                dispatch({ type: 'DELETE_USER', payload: id });
            }
        } catch (error) {
            console.error(error);
        }
    };

    // delete lawyer
    const deleteLawyer = async (id) => {
        try {
            const response = await axiosInstance.delete(`${apiUrl}/admin/deleteExpert/${id}`);
            if (response.data.success) {
                dispatch({ type: 'DELETE_LAWYER', payload: id });
            }
        } catch (error) {
            console.error(error);
        }
    };

    // delete appointment
    const deleteAppointment = async (id) => {
        try {
            const response = await axiosInstance.delete(`${apiUrl}/admin/deleteAppointment/${id}`);
            if (response.data.success) {
                dispatch({ type: 'DELETE_APPOINTMENT', payload: id });
            }
        } catch (error) {
            console.error(error);
        }
    };

    const adminContextData = {
        adminState,
        getUsers,
        getLawyers,
        addLawyer,
        addUser,
        getUser,
        getLawyer,
        getAppointments,
        deleteUser,
        deleteLawyer,
        deleteAppointment
    };

    return (
        <AdminContext.Provider value={adminContextData}>
            {children}
        </AdminContext.Provider>
    );
}

export default AdminContextProvider;