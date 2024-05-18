import {createContext, useReducer,useEffect} from 'react';
import {authReducer} from '../reducer/authReducer';
import {apiUrl,LOCAL_STORAGE_TOKEN_NAME} from './constants';
import axiosInstance from './constants';
import setAuthToken from '../utils/setAuthToken';

export const authContext = createContext();

const AuthContextProvider = ({children}) => {
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null
    });

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
    }
    useEffect(() => {
        loadUser();
    }, []);
    


    const loginUser = async userForm => {
        try {
            const response = await axiosInstance.post(`${apiUrl}/auth/login`, userForm);
            if (response.data.success) {
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken);
                //console.log(localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME));
            }
            return response.data;
        } catch (error) {
            return error.response.data ? error.response.data : {success: false, message:error.message};
        }
    }

    const registerUser = async userForm => {
        try {
            const response = await axiosInstance.post(`${apiUrl}/auth/register`, userForm);
            if (response.data.success) {
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken);
            }
            return response.data;
        } catch (error) {
            return error.response.data ? error.response.data : {success: false, message:error.message};
        }
    }

    const authContextData = {loginUser,registerUser,loadUser, authState};
    

    return (
        <authContext.Provider value={authContextData}>
            {children}
        </authContext.Provider>
    );

    
};
export default AuthContextProvider;