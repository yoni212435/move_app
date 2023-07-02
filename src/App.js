import "./App.css"
import SignIn from "./comps/sign/SignIn"
import Movie from "./movie"
import {Route, Routes, useNavigate} from "react-router-dom"
import Profile from "./comps/navBar/Profile"
import SignUp from "./comps/sign/SignUp"
import {createContext, useEffect, useState} from "react"
import {addDoc, collection, doc, getDocs, getFirestore, query, updateDoc, where} from "firebase/firestore"
import {app} from "./firebase"
import MyList from './comps/navBar/MyList'

export const APIContext = createContext()

console.log(app)

function App() {
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const [user, setUser] = useState({})
    const [dataApp, setDataApp] = useState([])
    const [movieList, setMovieList] = useState([])
    const [index, setIndex] = useState(0)
    const [urlMyListAndAllCategories, setUrlMyListAndAllCategories] = useState() // ????
    const db = getFirestore()
    const colUsers = collection(db, "users")


    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(window.innerWidth)
        }
        window.addEventListener("resize", handleWindowResize)

        return () => {
            window.removeEventListener("resize", handleWindowResize)
        }
    }, [])


    async function updateToMyList(arr) {
        try {
            if (user.id) {
                await updateDoc(doc(db, "users", user.docId), {myList: arr})
            }
        } catch (error) {
            console.log(error)
        }
    }


    const navigate = useNavigate()

    useEffect(() => {
        if (!user.id) { //TODO - תוסיף פה אימות נורמלי ברו
            navigate("/signIn")
        }
    }, [user.id])

    useEffect(() => {
        updateMovieList()
    }, [user.myList])

    async function handelUserObjFirebase() {
        if (user.id) {
            const data = await getDocs(query(colUsers, where("id", "==", user.id)))
            if (data.docs[0]) {
                setUser({
                    ...data.docs[0].data(),
                    docId: data.docs[0].id,
                    email: user.email
                })
            } else {
                await addDoc(colUsers, {id: user.id, zhaner: ['Family', 'Crime', 'Drama'], myList: []})
                setUser({id: user.id, zhaner: ['Family', 'Crime', 'Drama'], myList: []})
            }
        }
    }

    function updateMovieList() {
        if (user.id) {
            setMovieList(user.myList)
        }
    }

    function changeIndex(num) { // מה זה עושה??
        return num
    }

    return (
        <APIContext.Provider
            value={{
                dataApp,
                setDataApp,
                setUser,
                handelUserObjFirebase,
                user,
                updateToMyList,
                updateMovieList,
                changeIndex,
                windowSize,
                setIndex,
                index,
                urlMyListAndAllCategories,
                setUrlMyListAndAllCategories
            }}
        >
            <Routes>
                <Route index element={<Movie movieList={movieList}/>}/>
                <Route path="/signIn" element={<SignIn/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/profile/*" element={<Profile/>}/>
                <Route path="/myList/*" element={<MyList/>}/>
                <Route path="*" element={<h1>404 not found</h1>}/>
            </Routes>
        </APIContext.Provider>
    )
}

export default App
