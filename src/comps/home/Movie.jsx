import MainMovie from "./MainMovie"
import Carousel from "./Carousel"
import "./movie.css"
import {useUser} from '../../contexts/userContext'

const Movie = () => {
    const {zhaner: userGenres} = useUser()

    return (
        <>
            <MainMovie/>

            {userGenres && userGenres.map((genre, i) =>
                <Carousel
                    key={i}
                    genre={genre}
                />
            )}
        </>
    )
}
export default Movie
