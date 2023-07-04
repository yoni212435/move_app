import {useSetMainMovie} from '../../contexts/moviesContext'

const MovieList = ({movies}) => {
    const setMainMovie = useSetMainMovie()

    return (
        <div className="movie-list">
            {movies.map(movie => (
                <div className="movie-entry"
                     onClick={() => setMainMovie(movie)}>
                    <div>{movie.name}</div>
                    <img src={movie.image.medium} alt="movie-cover" className="movie-image"/>
                </div>
            ))}
        </div>
    )
}

export default MovieList