import {createContext, useContext, useEffect, useState} from "react"

const UserContext = createContext({})
const SetUserContext = createContext(null)
const SetGenresContext = createContext(null)

const useUser = () => useContext(UserContext)
const useSetUser = () => useContext(SetUserContext)
const useSetUserGenres = () => useContext(SetGenresContext)

const UserProvider = ({children, user}) => {
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState({})

    const setGenres = (genres) => {
        setUserData(user => ({
            ...user,
            zhaner: genres
        }))
    }

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
                <SetGenresContext.Provider value={{setGenres}}>
                    {children}
                </SetGenresContext.Provider>
            </SetUserContext.Provider>
        </UserContext.Provider>
    )
}

export {UserProvider, useUser, useSetUser, useSetUserGenres}