import React, { createContext, useContext, useState } from 'react';

// UserContext 생성
const UserContext = createContext();

// UserProvider 컴포넌트 생성
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

// useUser 훅 생성
export const useUser = () => {
    return useContext(UserContext);
};
