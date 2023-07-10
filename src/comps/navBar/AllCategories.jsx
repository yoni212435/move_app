import {useState} from "react"
import "./Allcategory.css"
import genres from '../../genres'
import {useMovies} from '../../contexts/moviesContext'
import MovieList from '../home/MovieList'

const AllCategories = ({}) => {
    const [filteredData, setFilteredData] = useState([])
    const movieData = useMovies()
    const [toggleGenreMovieList, setToggleGenreMovieList] = useState(false)

    const handleGenreClick = genre => {
        // todo fix toggle list behavior
        setToggleGenreMovieList(!toggleGenreMovieList)
        if (toggleGenreMovieList)
            setFilteredData(filterByGenre(genre))
    }
    const filterByGenre = genre => {
        return movieData.filter(movie => movie.genres.includes(genre))
    }

    return (
        <div className="category-menu">
            <ul className="category-list">
                {genres.map((genre, i) => (
                    <li>
                        <button className="category-button"
                                onClick={() => handleGenreClick(genre)}
                        >
                            {genre}
                        </button>
                        {toggleGenreMovieList &&
                            <MovieList
                                movies={filteredData}
                            />
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllCategories