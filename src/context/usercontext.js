
import { Children, createContext, useState } from "react";

const UserContext = createContext();
export const ContextProvider = ({ children }) => {
    
    const [status, setStatus] = useState('unloaded');
    console.log('status', status);

    return (
        <>
            <UserContext.Provider value={{ status, setStatus }}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export default UserContext;
