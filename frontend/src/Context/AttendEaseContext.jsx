import { createContext, useState } from "react";

const AttendEaseContext = createContext();

const AttendEaseContextProvider = ({children})=>{
    const [day, setDay] = useState(new Date().toLocaleString("en-US", {weekday: "short"}));

    const object = {
        setDay, day
    }

    return (
        <AttendEaseContext.Provider value={{object}}>
            {children}
        </AttendEaseContext.Provider>
    )
}

export {AttendEaseContext, AttendEaseContextProvider}