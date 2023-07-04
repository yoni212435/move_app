import React, {useContext, useEffect, useState} from "react"
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import {app} from "../db/firebase"

const auth = getAuth(app)
const AuthContext = React.createContext(null)

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        return onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            setLoading(false)
        })
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}