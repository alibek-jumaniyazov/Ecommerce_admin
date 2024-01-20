import { createContext, useState } from "react";

export const UserContext = createContext()


const UserProvider = ({ children }) => {


    const initialState = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : {
            isAuth: false,
            tokens: {
                access: "",
                refresh: "",
            },
        };
    const [user, setUser] = useState(initialState);

    // function setData(user) { 
      
    // }

    function setUserData(user) {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
    }


    const values = {
        user, setUserData
    }
    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;