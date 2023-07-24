import {useState} from "react"
import "./MainMovie.css"
import Info from "../info/Info"
import {AiOutlineInfoCircle, AiOutlinePlayCircle} from "react-icons/ai"
import {BsBookmarkPlus} from 'react-icons/bs'
import {useMainMovie} from '../../contexts/moviesContext'
import {useDBFunction} from '../../contexts/DBContext'
import printErrorMessage from '../../printErrorMessage'
import noImage from '../../images/noImage.png'
import {useUpdateUser, useUser} from '../../contexts/userContext'
import {Link} from 'react-router-dom'

const MainMovie = () => {
    const movie = useMainMovie()
    const {addMovie, overrideUser} = useDBFunction()
    const {myList} = useUser()
    const updateUser = useUpdateUser()
    const image = movie ? movie.image.original : noImage
    const [togglePopUp, setTogglePopUp] = useState(false)

    const addMovieToMyList = () => {
        addMovie(movie)
            .catch(e => {
                console.log('update failed. trying to override')
                overrideUser({myList: [...myList, movie]})
                    .catch(e => printErrorMessage(e))
            })
        updateUser({myList: [...myList, movie]})
    }

    return (
        <>
            <div className={"main-movie-display"} style={{backgroundImage: `url(${image})`}}>
                <div className="buttons">
                    <button
                        className="red-button"
                        tabIndex={1}>
                        <Link to={movie.url} target={"_blank"} style={{textDecoration: "none", color: "inherit"}}>
                            <AiOutlinePlayCircle/> WATCH
                        </Link>
                    </button>

                    <button className="red-button"
                            tabIndex={2}
                            onClick={() => setTogglePopUp(!togglePopUp)}>
                        <AiOutlineInfoCircle/> INFO
                    </button>

                    <button
                        className="red-button"
                        tabIndex={3}
                        onClick={addMovieToMyList}>
                        <BsBookmarkPlus/> SAVE
                    </button>
                </div>
            </div>

            {togglePopUp &&
                <Info movie={movie} setTogglePopUp={setTogglePopUp}/>
            }
        </>
    )
}
export default MainMovie
