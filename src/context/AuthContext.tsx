'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type AuthContextType = {
    isAuthenticated: boolean;
    isLoading: boolean;
    signin: (email: string) => void;
    signout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const stored = localStorage.getItem('auth');

        if (stored === 'true') {
            setIsAuthenticated(true);
        }

        setIsLoading(false);
    }, []);

    const signin = (email: string) => {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('user', email);
        setIsAuthenticated(true);
    }

    const signout = () => {
        localStorage.removeItem('auth');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
}