import {createContext, useReducer} from 'react';
import {authReducer} from '../reducer/authReducer';
import {apiUrl} from './constants';
import axios from 'axios';

export const authContext = createContext();

const AuthContextProvider = ({children}) => {
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null
    });
    const loginUser = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, userForm);
            if (response.data.success) {
                localStorage.setItem('token', response.data.accessToken);
            }
            return response.data;
        } catch (error) {
            return error.response.data ? error.response.data : {success: false, message:error.message};
        }
    }

    const authContextData = {loginUser, authState};

    return (
        <authContext.Provider value={authContextData}>
            {children}
        </authContext.Provider>
    );
};
export default AuthContextProvider;