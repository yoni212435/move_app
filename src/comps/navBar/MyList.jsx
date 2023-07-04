import './MyList.css'
import {doc, getFirestore, updateDoc} from 'firebase/firestore'
import {BiTrash} from "react-icons/bi"
import {FiHome} from "react-icons/fi"
import {Link} from 'react-router-dom'
import {useAPIContext} from '../../contexts/APIContext'
import {useMovies, useSetMainMovie} from '../../contexts/moviesContext'
import printErrorMessage from '../../printErrorMessage'

const MyList = ({}) => {
    const setMainMovie = useSetMainMovie()
    const db = getFirestore()
    const movieData = useMovies()
    const {user} = useAPIContext()

    const removeMovie = ({id}) => {
        let filteredData = movieData.filter(movie => movie.id !== id)
        try {
            updateDoc(doc(db, 'users', user.docId), {myList: filteredData})
                .then(r => console.log(r)) // todo check if succeeded, then update to state?
        } catch (e) {
            printErrorMessage(e.message)
        }
    }

    return (
        <div className="list-container">
            <div className="list-row">
                {movieData.map((movie, i) =>
                    <div className="list-item"
                         key={i}
                         onClick={() => setMainMovie(movie)}
                    >
                        <img src={movie.image.medium} alt="movie-cover" height="250px"/>
                        <button onClick={() => removeMovie(movie)} className="trash-button">
                            <BiTrash/>
                        </button>
                    </div>
                )}
                <Link to={'/'} className="home-button">
                    <FiHome/>
                </Link>
            </div>
        </div>
    )
}

export default MyList
