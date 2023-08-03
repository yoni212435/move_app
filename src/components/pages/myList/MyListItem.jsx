import {useState} from "react"
import Button from 'react-bootstrap/Button'
import {useUpdateUser} from '../../../contexts/userContext'
import {useDBFunction} from '../../../contexts/DBContext'
import printErrorMessage from '../../../printErrorMessage'
import {useSetMainMovie} from '../../../contexts/moviesContext'
import {TbTrashX} from 'react-icons/tb'

const MyListItem = ({movie, deleteMovie}) => {
    const setMainMovie = useSetMainMovie()
    const [showButton, setShowButton] = useState(false)

    return (
        <div className="list-item"
             key={movie.id}
             onClick={() => setMainMovie(movie)}
             onMouseEnter={() => setShowButton(true)}
             onMouseLeave={() => setShowButton(false)}
        >
            <img src={movie.image.medium} alt="movie-cover" height="250px"/>
            {showButton && <Button
                className="trash-button"
                variant="danger"
                roundedCircle
                onClick={() => deleteMovie(movie)}>
                <TbTrashX className={'trash-icon'} height={"1.5em"} width={"1.5em"} strokeWidth={2} viewBox={"0 0 24 30"}/>
            </Button>}
        </div>

    )
}

export default MyListItem