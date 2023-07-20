import {createContext, useContext, useEffect, useState} from "react"

const UserContext = createContext({})
const UpdateUserContext = createContext(null)
const SetGenresContext = createContext(null)

const useUser = () => useContext(UserContext)
const useUpdateUser = () => useContext(UpdateUserContext)

const UserProvider = ({children, user}) => {
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState({})

    useEffect(() => {
        if (user) {
            setUserData(user)
            setLoading(false)
        }
    }, [user])

    function updateUser (data) {
        setUserData(prevData => {
            return {...prevData, ...data}
        })
    }

    if (loading) {
        // Render a loading state or placeholder while data is being fetched
        return <div>Loading...</div>
    }

    return (
        <UserContext.Provider value={userData}>
            <UpdateUserContext.Provider value={updateUser}>
                    {children}
            </UpdateUserContext.Provider>
        </UserContext.Provider>
    )
}

export {UserProvider, useUser, useUpdateUser}