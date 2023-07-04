import "../../App.css"
import {Route, Routes} from "react-router-dom"
import {useEffect, useState} from "react"
import {addDoc, collection, doc, getDocs, getFirestore, query, updateDoc, where} from "firebase/firestore"
import {app} from "../../firebase"
import LogOut from '../auth/LogOut'
import Movie from '../../movie'
import MyList from '../navBar/MyList'
import Profile from '../navBar/Profile'
import {APIProvider} from '../../contexts/APIContext'

function Dashboard() {
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const [user, setUser] = useState({})
    const [dataApp, setDataApp] = useState([])
    const [movieList, setMovieList] = useState([])
    const [index, setIndex] = useState(0)
    const [urlMyListAndAllCategories, setUrlMyListAndAllCategories] = useState() // ????
    const db = getFirestore()
    const colUsers = collection(db, "users")

    useEffect(() => {
        if (app) console.log('app mounted')
    }, [])

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

    return (
        <APIProvider props={{
            windowSize,
            dataApp,
            movieList,
            setMovieList,
            index,
            setIndex,
            urlMyListAndAllCategories,
            setUrlMyListAndAllCategories,
            user,
            setUser,
            handelUserObjFirebase,
            setDataApp
        }}>
            <Routes>
                <Route index element={<Movie movieList={movieList}/>}/>
                <Route path="/logout" element={<LogOut/>}/>
                <Route path="/profile/*" element={<Profile/>}/>
                <Route path="/myList/*" element={<MyList/>}/>
                <Route path="*" element={<h1>404 not found</h1>}/>
            </Routes>
        </APIProvider>
    )
}

export default Dashboard
