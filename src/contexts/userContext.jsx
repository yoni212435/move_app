import {createContext, useContext, useState} from "react"

const UserContext = createContext(null)
const SetUserContext = createContext(null)

const useUser = () => useContext(UserContext)
const useSetUser = () => useContext(SetUserContext)

const UserProvider = ({children, user}) => {
    const [userData, setUserData] = useState(user)

    return (
        <UserContext.Provider value={{userData}}>
            <SetUserContext.Provider value={{setUserData}}>
                {children}
            </SetUserContext.Provider>
        </UserContext.Provider>
    )
}

export {UserProvider, useUser}