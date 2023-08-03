import {useSetMainMovie} from '../../../contexts/moviesContext'

const CarouselItemTemplate = ({movie}) => {
    const setMainMovie = useSetMainMovie()

    return (
        <div className={'slider-item'} key={movie.id}
             onClick={() => {
                 setMainMovie(movie)
             }}
        >
            <img src={movie.image.medium} alt="movie-cover" height="250px"/>
        </div>
    )
}

export default CarouselItemTemplate
