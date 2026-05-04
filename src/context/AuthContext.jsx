import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Check if user is already logged in (from localStorage)
    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setIsLoading(false);
    }, []);

    const login = (username) => {
        const userData = { username, loginTime: new Date().toLocaleString() };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const isLoggedIn = () => {
        return user !== null;
    };

    return (
        <AuthContext.Provider value={{
            user,
            login,
            logout,
            isLoggedIn,
            isLoading
        }}>
            {children}
        </AuthContext.Provider>
    );
}
