import {useState} from "react"
import "./Allcategory.css"
import genres from '../../genres'
import {useMovieData} from '../../contexts/movieDataContext'
import MovieList from '../home/MovieList'

const AllCategories = ({setMainMovie}) => {
    const [filteredData, setFilteredData] = useState([])
    const movieData = useMovieData()
    const [toggleGenreMovieList, setToggleGenreMovieList] = useState(false)

    const handleGenreClick = genre => {
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
                                setMainMovie={setMainMovie} // todo context
                            />
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllCategories