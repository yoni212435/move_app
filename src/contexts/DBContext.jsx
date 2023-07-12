import {createContext, useContext, useEffect, useState} from "react"
import {app} from "../db/firebase"
import {collection, doc, getDoc, getFirestore, updateDoc} from 'firebase/firestore'
import printErrorMessage from '../printErrorMessage'

const DBContext = createContext(null)
const DBFunctionContext = createContext(null)

const useDB = () => useContext(DBContext)
const useDBFunction = () => useContext(DBFunctionContext)

const DBProvider = ({children, currentUser}) => {
    const db = getFirestore()
    const usersRef = collection(db, "users")
    const userDataDoc = doc(db, "users", currentUser.uid)
    const [userData, setUserData] = useState(null) // todo update to state after change in db

    useEffect(() => {
        getUserData()
            .then(r => setUserData(r))
            .catch(e => printErrorMessage(e.message))
    }, [])

    const getUserData = () => {
        // getDocs(query(
        //     usersRef, where("id", "==", currentUser.uid)))
        return getDoc(userDataDoc)
            .then(r => r.data())
            .catch(e => e)
    }

    const addMovie = (movie) => {
        return updateDoc(userDataDoc, {myList: [...userData.myList, movie]})
    }

    const removeMovie = (movie) => {
        return updateDoc(userDataDoc, {myList: userData.myList.filter(_movie => _movie !== movie)})
    }

    const updateGenres = (genres) => {
        return updateDoc(userDataDoc, {zhaner: genres})
    }

    const methods = {
        getUserData,
        addMovie,
        removeMovie,
        updateGenres
    }

    return (
        <DBContext.Provider value={app}>
            <DBFunctionContext.Provider value={methods}>
                {currentUser && children}
            </DBFunctionContext.Provider>
        </DBContext.Provider>
    )
}

export {DBProvider, useDB, useDBFunction}