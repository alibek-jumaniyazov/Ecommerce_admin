import { createContext } from "react";

export const UserContext = createContext()


const UserProvider = ({ children }) => {


    const values = {}
    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;