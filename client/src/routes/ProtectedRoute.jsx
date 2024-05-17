import { Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../context/AuthContext';

const ProtectedRoute = ({children}) => {
    const { authState } = useContext(authContext);

    if (authState.authLoading) {
        <div>Loading...</div>
    }
    if (!authState.isAuthenticated) {
        return <Navigate to='/login' />;
    }
    return children;
};

export default ProtectedRoute;