import { createContext, useEffect, useState } from "react";

const AttendEaseContext = createContext();

const AttendEaseContextProvider = ({children})=>{
    const [day, setDay] = useState(new Date().toLocaleString("en-US", {weekday: "short"}));
    const [openSidebar, setOpenSidebar] = useState(false)
    const [activeTab, setActiveTab] = useState("");

    const object = {
        setDay, day, openSidebar, setOpenSidebar, activeTab, setActiveTab,

    }

    return (
        <AttendEaseContext.Provider value={{object}}>
            {children}
        </AttendEaseContext.Provider>
    )
}

export {AttendEaseContext, AttendEaseContextProvider}