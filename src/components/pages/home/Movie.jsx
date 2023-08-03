import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MainMovie from "./MainMovie"
import {useUser} from '../../../contexts/userContext'
import {useMovies} from '../../../contexts/moviesContext'
import CarouselItemTemplate from './CarouselItemTemplate'

const Movie = () => {
    const {zhaner: userGenres} = useUser()
    const movieData = useMovies()

    const filterByGenre = genre => {
        const data = movieData.filter(movie => movie.genres.includes(genre))
        if (data.length < 6)
            return data.concat(data)
        return data
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    return (
        <>
            <MainMovie/>

            {userGenres && userGenres.map(genre =>
                <div className="slider-container">
                    <strong>{genre}</strong>
                    <div>
                        <Slider {...sliderSettings}>
                            {filterByGenre(genre).map(movie =>
                                <CarouselItemTemplate movie={movie}/>
                            )}
                        </Slider>
                    </div>
                </div>
            )}
        </>
    )
}
export default Movie
