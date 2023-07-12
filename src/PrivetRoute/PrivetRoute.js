import React, { useContext } from 'react';
import { AuthContex } from '../UserContex/UserContex';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { users, loading } = useContext(AuthContex);
    const location = useLocation()
    if (loading) {
        return <div className=' ms-96'>
            {/* <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span> */}
            {/* <span className="loading loading-bars loading-lg"></span> */}
            <span className="  loading loading-infinity loading-lg"></span>
        </div>
    }
    if (users && users.uid) {
        return children;
    }
    return (
        <Navigate to={'/login'} state={{ from: location }} replace > </Navigate>
    );
};

export default PrivetRoute;