import {useSetMainMovie} from '../../contexts/moviesContext'
import {useEffect, useRef} from 'react'

const MovieDropdown = ({movies}) => {
    const setMainMovie = useSetMainMovie()
    const dropdownRef = useRef()

    /* set dropdown max height */
    useEffect(() => {
        const {bottom: parentHeight} = dropdownRef.current.parentElement.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const maxHeight = viewportHeight * 0.9 - parentHeight
        dropdownRef.current.style.maxHeight = `${maxHeight}px`
        dropdownRef.current.style.top = `${parentHeight+5}px`

        const contentHeight = dropdownRef.current.scrollHeight
        if (contentHeight > maxHeight) {
            dropdownRef.current.style.overflowY = "auto"
        }
    }, [])

    return (
        <div className="movie-dropdown" ref={dropdownRef}>
            {movies.map(movie => (
                <div className="movie-entry"
                     key={movie.id}
                     onClick={() => setMainMovie(movie)}>
                    <div className={'movie-title'}>
                        {movie.name}
                    </div>
                    <img
                        className={'movie-image'}
                        src={movie.image.medium}
                        alt="movie-cover"
                    />
                </div>
            ))}
        </div>
    )
}

export default MovieDropdown