//region import
import {useEffect, useRef, useState} from "react"

import {useUpdateUser, useUser} from '../../contexts/userContext'
import {useDBFunction} from '../../contexts/DBContext'
import {useMovies} from '../../contexts/moviesContext'

import genres from '../../genres'
import {Alert} from 'react-bootstrap'
import printErrorMessage from '../../printErrorMessage'

import {FiCheckSquare, FiSquare} from 'react-icons/fi'
import {MdOutlineExpandCircleDown} from 'react-icons/md'
import MovieDropdown from '../home/MovieDropdown'

import "./genres.css"
//endregion

const Genres = () => {
    //region variables
    let {zhaner} = useUser()
    const updateUser = useUpdateUser()
    const movieData = useMovies()

    const [userGenres, setUserGenres] = useState(zhaner)
    const {updateGenres, overrideUser} = useDBFunction()
    const [error, setError] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [expandGenre, setExpandGenre] = useState('')
    const [expand, setExpand] = useState(false)

    const isMounted = useRef(false)
    //endregion

    //region useEffect
    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError('')
            }, 3000)
        }
    }, [error])

    useEffect(() => {
        if (isMounted.current) {
            updateGenres(userGenres)
                .catch(() => {
                    console.log('update failed. trying to override')
                    overrideUser({zhaner: userGenres})
                        .catch(e => printErrorMessage(e))
                })
            updateUser({zhaner: userGenres})
        } else {
            isMounted.current = true
        }
    }, [userGenres])
    //endregion

    //region handlers
    const handleGenreUpdate = genreRef => {
        setUserGenres(prevGenres => {
            if (prevGenres.includes(genreRef)) {
                return prevGenres.filter((genre) => genre !== genreRef)
            } else if (prevGenres.length < 3) {
                return [...prevGenres, genreRef]
            } else {
                setError("You exceeded the choices limit")
                return prevGenres
            }
        })
    }

    const filterByGenre = genre => {
        return movieData.filter(movie => movie.genres.includes(genre))
    }

    const handleExpand = genre => {
        const prevGenre = expandGenre
        setExpandGenre(genre)

        setExpand(prevGenre === genre ? !expand : true)

        if (expand)
            setFilteredData(filterByGenre(genre))
    }
    //endregion

    return (
        <div className={'content'}>
            {error && <Alert variant="danger">{error}</Alert>}

            <div className="genre-list">
                {genres.map((genre, i) => (
                    <div
                        key={i}
                        tabIndex={i}
                        className={"list-item" + (userGenres.includes(genre) ? " selected-genre" : "")}
                        id={genre}
                    >
                        <div
                            className="expand"
                            onClick={() => handleExpand(genre)}
                        >
                            <MdOutlineExpandCircleDown/>
                        </div>
                        {(expandGenre === genre && expand) &&
                            <MovieDropdown
                                movies={filteredData}
                            />
                        }
                        <div
                            className="select"
                            onClick={() => handleGenreUpdate(genre)}
                        >
                            <span className="title">
                            {genre}
                            </span>
                            <span className="select-icon">
                                {userGenres.includes(genre) ? <FiCheckSquare/> : <FiSquare/>}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Genres