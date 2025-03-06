import react, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("userId", userData.id); // Simpan di localStorage
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("userId");
        localStorage.removeItem("accessToken");
    };
    return (
        <AppContext.Provider value={{user, login, logout}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAuth = () => useContext(AppContext);

export default AppContext;