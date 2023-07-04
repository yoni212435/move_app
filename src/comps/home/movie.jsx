import {useEffect, useState} from "react"
import axios from "axios"
import MainMovie from "./MainMovie"
import Carousel from "./Carousel"
import "./movie.css"
import {useAPIContext} from '../../contexts/APIContext'
import {MovieDataProvider} from '../../contexts/movieDataContext'
import printErrorMessage from '../../printErrorMessage'

export default function Movie() {
    let [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])
    let {user, index} = useAPIContext()
    const apiUrl = "https://api.tvmaze.com/"
    const [mainMovie, setMainMovie] = useState(movies[0])

    const sendIndex = id => {
        let index = movies.findIndex(element => element.id === id)
        if (index > -1) {
            setJ(index)
        }
    }

    const changeI = num => {
        setI(num)
    }

    const changeJ = num => {
        setJ(num)
    }

    const changeJToIndex = () => {
        setJ(index)
    }

    const getMovieData = () => axios.get(apiUrl + "shows")

    useEffect(() => {
        getMovieData().then(r => {
                setMovies(r.data)
            }
        )
            .catch(e => printErrorMessage(e))
    }, [])

    useEffect(() => {
        if (user.zhaner)
            setGenres(user.zhaner)
    }, [user.zhaner])

    return (
        <MovieDataProvider data={movies}>
            <MainMovie movie={mainMovie}/>

            {genres && genres.map((genre, i) =>
                <Carousel
                    key={i}
                    genre={genre}
                    setMainMovie={setMainMovie}
                />
            )}
        </MovieDataProvider>
    )
}
