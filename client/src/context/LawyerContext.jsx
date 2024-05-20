import {createContext, useReducer,useEffect} from 'react';
import {authReducer} from '../reducer/authReducer';
import {apiUrl,LOCAL_STORAGE_TOKEN_NAME} from './constants';
import axiosInstance from './constants';
import setAuthToken from '../utils/setAuthToken';

export const LawyerContext = createContext();

const LawyerContextProvider = ({children}) => {
    const [lawyerState, dispatch] = useReducer(authReducer, {
        lawyerLoading: true,
        isAuthenticated: false,
        user: null
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

    // accept appointment
    const acceptAppointment = async (id) => {
        try {
            const response = await axiosInstance.put(`${apiUrl}/appointment/accept/${id}`);
            if (response.data.success) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
        }
    };

    // reject appointment

    const rejectAppointment = async (id) => {
        try {
            const response = await axiosInstance.put(`${apiUrl}/appointment/reject/${id}`);
            if (response.data.success) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
        }
    };
};