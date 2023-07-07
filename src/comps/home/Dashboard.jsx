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
import {MoviesProvider} from '../../contexts/moviesContext'
import axios from 'axios'

function Dashboard() {
    const db = getFirestore()
    const usersData = collection(db, "users")
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const [data, setData] = useState([])
    const [user, setUser] = useState({})
    const [movies, setMovies] = useState([])

    const apiUrl = "https://api.tvmaze.com/"
    const getMovieData = () => axios.get(apiUrl + "shows")

    //region useEffect
    /* DB status */
    useEffect(() => {
        if (app) console.log('DB connected')
        else printErrorMessage('DB not connected')
    }, [app])

    /* get movies from API */
    useEffect(() => {
        getMovieData()
            .then(r => setMovies(r.data))
            .catch(e => printErrorMessage(e))
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
            <MoviesProvider props = {{data: movies, mainMovie: movies[0]}}>
                <Routes>
                    <Route index element={<Movie/>}/>
                    <Route path="/logout" element={<LogOut/>}/>
                    <Route path="/profile/*" element={<Profile/>}/>
                    <Route path="/myList/*" element={<MyList/>}/>
                    <Route path="*" element={<h1>404 not found</h1>}/>
                </Routes>
                <Footer/>
            </MoviesProvider>
        </APIProvider>
    )
}

export default Dashboard
