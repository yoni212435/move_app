import './MyList.css'
import {BiTrash} from "react-icons/bi"
import {useMovies, useSetMainMovie} from '../../contexts/moviesContext'
import printErrorMessage from '../../printErrorMessage'
import {useDBFunction} from '../../contexts/DBContext'

const MyList = ({}) => {
    const setMainMovie = useSetMainMovie()
    const movieData = useMovies()
    const {removeMovie} = useDBFunction()

    const removeMovieFromMyList = movie => {
        removeMovie(movie)
            .then(r => console.log(r))
            .catch(e => printErrorMessage(e.message))
    }

    return (
        <div className="list-container">
            <div className="list-row">
                {movieData.map((movie, i) =>
                    <div className="list-item"
                         key={i}
                         onClick={() => setMainMovie(movie)}
                    >
                        <img src={movie.image.medium} alt="movie-cover" height="250px"/>
                        <button onClick={() => removeMovieFromMyList(movie)} className="trash-button">
                            <BiTrash/>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyList
