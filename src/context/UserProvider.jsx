import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [checkUser, setCheckUserState] = useState(() => {
        const savedCheckUser = localStorage.getItem("user");
        return savedCheckUser ? JSON.parse(savedCheckUser) : null;
    });

    const setCheckUser = (newCheckUser) => {
        setCheckUserState(newCheckUser);
        localStorage.setItem("user", JSON.stringify(newCheckUser));
    };

    const providerValue = {
        checkUser,
        setCheckUser,
    };

    return (
        <UserContext.Provider value={providerValue}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
