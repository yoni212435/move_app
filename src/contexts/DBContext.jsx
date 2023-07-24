import {createContext, useContext, useEffect, useState} from "react"
import {app} from "../db/firebase"
import {addDoc, collection, doc, getDocs, getFirestore, query, updateDoc, where} from 'firebase/firestore'
import printErrorMessage from '../printErrorMessage'

const DBContext = createContext(null)
const DBFunctionContext = createContext(null)

const useDB = () => useContext(DBContext)
const useDBFunction = () => useContext(DBFunctionContext)

const DBProvider = ({children, currentUser}) => {
    const db = getFirestore()
    const usersRef = collection(db, "users")
    const userDataDoc = doc(db, "users", currentUser.uid)
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        getUserData()
            // .then(r => console.log(r))
            .then(r => setUserData(r))
            .catch(e => printErrorMessage(e.message))
    }, [])

    const createUser = (user) => {
        return addDoc(usersRef, {id: user.uid, email: user.email, zhaner: [], myList: []})
            .then(() => getUserData())
            .catch(e => e)
    }

    const getUserData = () => {
        return getDocs(query(
            usersRef, where("id", "==", currentUser.uid)))
            .then(querySnapshot =>
                querySnapshot.empty ? createUser(currentUser) : querySnapshot.docs[0].data())
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

    const overrideUser = newData => {
        return addDoc(usersRef, {...userData, ...newData}, {merge: true})
    }

    const methods = {
        getUserData,
        addMovie,
        removeMovie,
        updateGenres,
        overrideUser
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