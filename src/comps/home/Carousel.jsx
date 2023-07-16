import {useEffect, useState} from "react"
import "./carousel.css"
import Slider from "react-slick"
import {useMovies, useSetMainMovie} from '../../contexts/moviesContext'

const Carousel = ({genre}) => {
    const setMainMovie = useSetMainMovie()
    const [filteredMovies, setFilteredMovies] = useState([])
    const movieData = useMovies()
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: keepScreen(windowSize),
        slidesToScroll: 1
    }

    useEffect(() => {
        setWindowSize(window.innerWidth)
    }, [window.innerWidth])

    function keepScreen(windowWidth) {
        const md = "768"
        const lg = "992"
        const xl = "1200"

        return windowWidth >= xl ? 6 :
            windowWidth >= lg ? 4 :
                windowWidth >= md ? 3 : 2
    }

    const filterByGenre = () => {
        return movieData.filter(movie => movie.genres.includes(genre))
    }

    useEffect(() => {
        setFilteredMovies(filterByGenre())
    }, [genre])

    return (
        <div className="main_slider">
            <div className="main_slider_tow">
                <div className="sliderA">
                    <p className="category">{genre}</p>
                    <Slider {...sliderSettings}>
                        {filteredMovies.map(movie => (
                            <div className="item_carousel " key={movie.id}>
                                <button
                                    onClick={() => {
                                        setMainMovie(movie)
                                    }}
                                >
                                    <img src={movie.image.medium} alt="movie-cover" height="250px"/>
                                </button>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default Carousel
