import './MyList.css'
import {BiTrash} from "react-icons/bi"
import {useSetMainMovie} from '../../contexts/moviesContext'
import printErrorMessage from '../../printErrorMessage'
import {useDBFunction} from '../../contexts/DBContext'
import {useUser} from '../../contexts/userContext'

const MyList = ({}) => {
    const setMainMovie = useSetMainMovie()
    const {myList} = useUser()
    const {removeMovie, overrideUser} = useDBFunction()

    const removeMovieFromMyList = movie => {
        removeMovie(movie)
            .catch(() => {
                console.log('update failed. trying to override')
                overrideUser({myList: myList.filter(_movie => _movie !== movie)})
                    .catch(e => printErrorMessage(e))
            })
    }

    return (
        <div className="list-container">
            <div className="list-row">
                {myList.map((movie, i) =>
                    <div className="list-item"
                         key={i}
                         onClick={() => setMainMovie(movie)}
                    >
                        <img src={movie.image.medium} alt="movie-cover" height="250px"/>
                        <button onClick={() => removeMovieFromMyList(movie)} className="trash-button">
                            <BiTrash/>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyList
