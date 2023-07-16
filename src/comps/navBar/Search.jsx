import {useRef, useState} from "react"
import {useMovies, useSetMainMovie} from '../../contexts/moviesContext'
import './Search.css'

const Search = props => {
    const movies = useMovies()
    const setMainMovie = useSetMainMovie()
    const [filteredData, setFilteredData] = useState([])
    const [toggleSearchView, setToggleSearchView] = useState(false)
    const searchRef = useRef()

    const handleSearch = e => {
        e.preventDefault()
        const {value: searchValue} = searchRef.current

        if (searchValue) {
            setFilteredData(
                movies.filter(movie =>
                    movie.name.toLowerCase().includes(searchValue.toLowerCase())))
            setToggleSearchView(true)
        } else {
            setFilteredData([])
            setToggleSearchView(false)
        }
    }

    const handleMoviePick = movie => {
        setMainMovie(movie)
        setToggleSearchView(false)
        searchRef.current.value = ''
        setFilteredData([])
    }

    return (
        <div className="search-container">
            <input
                className="search-input"
                ref={searchRef}
                name="search-input"
                type="search"
                placeholder="Search..."
                onChange={handleSearch}
            />

            {toggleSearchView &&
                <div className="search-dropdown">
                    {filteredData && filteredData.length > 0 ?
                        filteredData.map((movie, i) =>
                            <div
                                className="search-item"
                                key={i}
                                onClick={() => {
                                    handleMoviePick(movie)
                                }}>
                                <span>{movie.name}</span>
                            </div>) :
                        <div className="no-search-item" style={{cursor: 'default'}}>
                            <span>No results found</span>
                        </div>}
                </div>
            }
        </div>
    )
}
export default Search
