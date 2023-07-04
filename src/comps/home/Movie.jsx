import {useEffect, useState} from "react"
import MainMovie from "./MainMovie"
import Carousel from "./Carousel"
import "./movie.css"

const Movie = () => {
    const [genres, setGenres] = useState([])

    useEffect(() => {
        if (user.zhaner)
            setGenres(user.zhaner)
    }, [user.zhaner]) // todo genre context

    return (
        <>
            <MainMovie/>

            {genres && genres.map((genre, i) =>
                <Carousel
                    key={i}
                    genre={genre}
                />
            )}
        </>
    )
}
export default Movie
