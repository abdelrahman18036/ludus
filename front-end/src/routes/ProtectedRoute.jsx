import React from "react";
import { useQuery } from "react-query";
import { Navigate } from "react-router-dom";
import axios from 'axios';
import { baseURL } from "../Components/Auth/API";
const checkAuthStatus = async () => {
    try {
        const response = await axios.get(`${baseURL}/api/users/verify`, {
            headers: {
                'x-access-token': localStorage.getItem('userToken')
            }
        });
        return response.data.message;

    } catch (error) {
        console.error('Error checking auth status:', error.response.data);
        return false;
    }
};



const ProtectedRoute = ({ children }) => {
    const { data: isAuthenticated, isLoading } = useQuery(
        "authStatus",
        checkAuthStatus,
        {
            staleTime: 60000,
            cacheTime: 0,
        }
    );

    if (isLoading) {
        return (
            <div className="flex flex-grow items-center justify-center">
                <span>Loading...</span>
            </div>
        );
    }

    if (!isLoading && !isAuthenticated) {
        return <Navigate to="/login" replace={true} />;
    }

    return children;
};

export default ProtectedRoute;
