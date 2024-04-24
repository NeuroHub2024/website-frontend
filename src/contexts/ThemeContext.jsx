import React, { createContext, useContext, useEffect, useState } from 'react';

// Create the context
const ThemeContext = createContext();

// Custom hook to consume the theme context
export const useTheme = () => {
    return useContext(ThemeContext);
};

// Theme provider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if(theme === 'light'){
            setTheme('dark')
            document.body.setAttribute('data-theme', 'dark')
            localStorage.setItem('display-theme', 'dark')
        }else{
            setTheme('light')
            document.body.setAttribute('data-theme', 'light')
            localStorage.setItem('display-theme', 'light')
        }
    };

    useEffect(()=>{
        const displayTheme = localStorage.getItem('display-theme')
        if(displayTheme){
            setTheme(displayTheme)
            document.body.setAttribute('data-theme', theme)
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};