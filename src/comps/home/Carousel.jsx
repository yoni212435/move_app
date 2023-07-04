import {useEffect, useState} from "react"
import "./carousel.css"
import Slider from "react-slick"
import {useAPIContext} from '../../contexts/APIContext'
import {useMovieData} from '../../contexts/movieDataContext'

export default function Carousel({setMainMovie, genre}) {

    const {windowSize} = useAPIContext()
    const [filteredMovies, setFilteredMovies] = useState([])
    const movieData = useMovieData()

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: keepScreen(windowSize),
        slidesToScroll: 1
    }

    function keepScreen(windowWidth) {
        const md = "768"
        const lg = "992"
        const xl = "1200"

        if (windowWidth >= xl) {
            return 6
        }
        if (windowWidth >= lg) {
            return 4
        }
        if (windowWidth >= md) {
            return 3
        }
        return 2
    } // todo viewport

    const filterByGenre = () => {
        let filteredData = movieData.filter(movie => movie.genres.includes(genre))
        setFilteredMovies(filteredData)
    }

    useEffect(() => {
            filterByGenre()
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
