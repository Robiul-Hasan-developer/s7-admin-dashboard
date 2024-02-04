import React, { createContext, useState } from 'react';

export const SidebarContext = createContext(); 

const SidebarProvider = ({ children }) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarClick = () => {
        setSidebarOpen(!sidebarOpen); 
    }

    const [sidebarOpenSmallDevice, setSidebarOpenSmallDevice] = useState(false);

    const handleSidebarSmallDeviceClick = () => {
        setSidebarOpenSmallDevice(!sidebarOpenSmallDevice); 
    }

    return (
        <>
            <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen, handleSidebarClick, sidebarOpenSmallDevice, setSidebarOpenSmallDevice, handleSidebarSmallDeviceClick }}>
                {children}
            </SidebarContext.Provider>
        </>
    );
};

export default SidebarProvider;