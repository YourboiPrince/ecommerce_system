import React, { useState, createContext } from "react";

// Create context
export const SidebarContext = createContext();

// Use a different name for the context provider component
const SidebarProvider = ({ children }) => {
    // sidebar state
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleClose = () => {
        setSidebarOpen(false);
    };

    return (
        <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen, handleClose }}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;
