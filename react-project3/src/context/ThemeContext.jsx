import { Children, createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider =({Children})=> {
    const  [theme,setTheme] = useState('light');
    const toggleTheme =()=> {
        setTheme((prev)=>prev==='light'?'dark':'light')
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {Children}
        </ThemeContext.Provider>
    )
}