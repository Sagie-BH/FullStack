import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext({
    currentUser: null,
    login: async() => { },
    logout: () => { },
    register: async () => { }
});

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const setUserHeader = userId => {
        axios.defaults.headers.common['x-user-id'] = userId;
    }

    const removeUserHeader = () => {
        delete axios.defaults.headers.common['x-user-id'];
    }

    const login = async (loginObj) => {
        const response = await axios.post(
            `http://localhost:3300/users/login`,
            { loginObj }
        );
        setCurrentUser(response.data.userId);
        setUserHeader(response.data.userId);
        return response.data;
    }

    const logout = () => {
        removeUserHeader();
        setCurrentUser(null);
    }

    const register = async (loginObj) => {
        const response = await axios.post(
            `http://localhost:3300/users/register`,
            { loginObj }
        );
        setCurrentUser(response.data.userId);
        setUserHeader(response.data.userId);
        return response.data;
    }

    const value = {
        currentUser,
        login,
        logout,
        register
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}