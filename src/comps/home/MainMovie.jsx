import {useState} from "react"
import "./MainMovie.css"
import Info from "../info/Info"
import {AiOutlineInfoCircle, AiOutlinePlayCircle, AiOutlinePlusCircle} from "react-icons/ai"
import {useMainMovie} from '../../contexts/moviesContext'
import {useDBFunction} from '../../contexts/DBContext'
import printErrorMessage from '../../printErrorMessage'
import noImage from '../../images/noImage.png'

const MainMovie = () => {
    const movie = useMainMovie()
    const {addMovie} = useDBFunction()
    const image = movie.image.original || noImage
    const [toggleInfoView, setToggleInfoView] = useState(false)
    const [toggleAddIcon, setToggleAddIcon] = useState(false)

    const addMovieToMyList = () => {
        addMovie(movie)
            .then(r => console.log(r))
            .catch(e => printErrorMessage(e.message))
    }

    return (
        <>
            <div className="main_watch_info">
                <img src={image} className="img_all" alt={"movie"}/>
                <div className="btn_div_watch">
                    <button className="btn_watch">
                        <AiOutlinePlayCircle/> WATCH
                    </button>
                </div>

                <div className="btn_div_info">
                    <button className="btn_info" onClick={() => setToggleInfoView(!toggleInfoView)}>
                        <AiOutlineInfoCircle/> INFO
                    </button>
                </div>
            </div>

            {toggleInfoView &&
                <Info movie={movie}/>
            }

            <div className="add-button"
                 onMouseEnter={() => setToggleAddIcon(true)}
                 onMouseLeave={() => setToggleAddIcon(false)}
                 onClick={addMovieToMyList}>
                <AiOutlinePlusCircle className="add-button-icon"/>
                {toggleAddIcon &&
                    <div className="add-button-icon-label">
                        add movie to list
                    </div>}
            </div>
        </>
    )
}
export default MainMovie
