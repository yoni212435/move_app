import "../../App.css"
import {Route, Routes} from "react-router-dom"
import {useEffect, useState} from "react"
import {addDoc, collection, doc, getDocs, getFirestore, query, updateDoc, where} from "firebase/firestore"
import {app} from "../../db/firebase"
import LogOut from '../auth/LogOut'
import Movie from './Movie'
import MyList from '../navBar/MyList'
import Profile from '../navBar/Profile'
import {APIProvider} from '../../contexts/APIContext'
import Footer from './Footer'
import printErrorMessage from '../../printErrorMessage'

function Dashboard() {
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const [user, setUser] = useState({})
    const [dataApp, setDataApp] = useState([])
    const [movieList, setMovieList] = useState([])
    const [index, setIndex] = useState(0)
    const [urlMyListAndAllCategories, setUrlMyListAndAllCategories] = useState() // ????
    const db = getFirestore()
    const usersData = collection(db, "users")
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const [data, setData] = useState([])
    const [user, setUser] = useState({})
    const [movies, setMovies] = useState([])

    useEffect(() => {
        if (app) console.log('app mounted')
    }, [])

    /* [todo] This shit needs to be removed */
    useEffect(() => {
        const handleWindowResize = () => setWindowSize(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)

        return () => {
            window.removeEventListener("resize", handleWindowResize)
        }
    }, [])

    /* ???? */
    useEffect(() => {
        updateMovieList()
    }, [user.myList])
    //endregion

    //region methods
    const addMovie = movie => {
        try {
            updateDoc(doc(db, "users", user.docId), {myList: [...user.myList, movie]})
                .then(r => console.log(r)) // todo check if succeeded, then update to state?
        } catch (e) {
            printErrorMessage(e.message)
        }
    }

    async function getUserFromDB() {
        if (user.id) {
            const data = await getDocs(query(usersData, where("id", "==", user.id)))
            if (data.docs[0]) {
                setUser({
                    ...data.docs[0].data(),
                    docId: data.docs[0].id,
                    email: user.email
                })
            } else {
                await addDoc(usersData, {id: user.id, zhaner: ['Family', 'Crime', 'Drama'], myList: []})
                setUser({id: user.id, zhaner: ['Family', 'Crime', 'Drama'], myList: []}) //todo remove hardcoded data
            }
        }
    }

    function updateMovieList() {
        if (user.id) {
            setMovieList(user.myList)
        }
    }
    //endregion

    return (
        <APIProvider props={{
            windowSize,
            user,
            setUser,
            getUserFromDB //todo db context
        }}>
            <Routes>
                <Route index element={<Movie movieList={movieList}/>}/>
                <Route path="/logout" element={<LogOut/>}/>
                <Route path="/profile/*" element={<Profile/>}/>
                <Route path="/myList/*" element={<MyList/>}/>
                <Route path="*" element={<h1>404 not found</h1>}/>
            </Routes>
            <Footer/>
        </APIProvider>
    )
}

export default Dashboard
