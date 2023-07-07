import {createContext, useContext, useEffect, useState} from "react"

const UserContext = createContext({})
const SetUserContext = createContext(null)

const useUser = () => useContext(UserContext)
const useSetUser = () => useContext(SetUserContext)

const UserProvider = ({children, user}) => {
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState({})

    useEffect(() => {
        if (user) {
            setUserData(user)
            setLoading(false)
        }
    }, [user])

    if (loading) {
        // Render a loading state or placeholder while data is being fetched
        return <div>Loading...</div>
    }

    return (
        <UserContext.Provider value={{userData}}>
            <SetUserContext.Provider value={{setUserData}}>
                {children}
            </SetUserContext.Provider>
        </UserContext.Provider>
    )
}

export {UserProvider, useUser, useSetUser}