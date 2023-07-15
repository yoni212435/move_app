//region import
import axios from 'axios'
import "../../App.css"
import {Route, Routes} from "react-router-dom"
import {useEffect, useState} from "react"
import {app} from "../../db/firebase"
import LogOut from '../auth/LogOut'
import Movie from './Movie'
import MyList from '../navBar/MyList'
import Profile from '../navBar/Profile'
import {APIProvider} from '../../contexts/APIContext'
import Footer from './Footer'
import printErrorMessage from '../../printErrorMessage'
import {MoviesProvider} from '../../contexts/moviesContext'
import {UserProvider} from '../../contexts/userContext'
import Loading from '../info/loading'
import {DBProvider, useDBFunction} from '../../contexts/DBContext'
//endregion

const Dashboard = () => {
    const {getUserData} = useDBFunction()
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const [userData, setUserData] = useState(null)
    const [movies, setMovies] = useState([])

    const apiUrl = "https://api.tvmaze.com/"
    const getMovieData = () => axios.get(apiUrl + "shows")

    //region useEffect
    /* DB status */
    useEffect(() => {
        if (app) console.log('DB connected')
        else printErrorMessage('DB not connected')
    }, [app])

    /* get user data from DB */
    useEffect(() => {
        getUserData()
            .then(data => setUserData(data))
            .catch(e => printErrorMessage(e.message))
    }, [])

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
    //endregion

    return (
        <APIProvider props={{
            windowSize
        }}>
            <>
                {!(userData && movies) && <Loading/>}
                <UserProvider user={userData}>
                    <MoviesProvider props={{data: movies, mainMovie: movies[0]}}>
                        <Routes>
                            <Route index element={<Movie/>}/>
                            <Route path="/logout" element={<LogOut/>}/>
                            <Route path="/profile/*" element={<Profile/>}/>
                            <Route path="/myList/*" element={<MyList/>}/>
                            <Route path="*" element={<h2>404 not found</h2>}/>
                        </Routes>
                        <Footer/>
                    </MoviesProvider>
                </UserProvider>
            </>
        </APIProvider>
    )
}

export default Dashboard
