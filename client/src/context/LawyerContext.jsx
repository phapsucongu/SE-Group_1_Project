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
};