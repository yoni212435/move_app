import "../home/popup.css"
import "./info.css"
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import Rating from 'react-rating'
import {CloseButton} from 'react-bootstrap'

const Info = ({movie, setTogglePopUp}) => (
    <div className="pop-up-background-cover">
        <div className="pop-up">
            <CloseButton onClick={() => setTogglePopUp(false)}/>

            <div className="movie-pu-container">
                <div className="movie-image">
                    {movie && <img src={movie.image?.medium} alt="movie-cover"/>}
                </div>

                <div className="movie-details">
                    {movie && <>
                        <section style={{marginBottom: "10px"}}>
                            <div><strong>Name:</strong> {movie.name}</div>
                            <div><strong>Language:</strong> {movie.language}</div>
                            <div><strong>Premiered:</strong> {movie.premiered}</div>
                            <div><strong>Rating:</strong> <Rating
                                start={0}
                                stop={10}
                                initialRating={movie.rating.average}
                                step={2}
                                emptySymbol={<AiOutlineStar/>}
                                fullSymbol={<AiFillStar/>}
                                readonly
                            />{' '}{movie.rating.average}</div>
                            <div><strong>Network:</strong> {movie.network.name}</div>
                            <div><strong>Genres: </strong>
                                <span className={"divider"}>
                                    {movie.genres.map(genre =>
                                        <span>{genre}</span>
                                    )}
                                </span>
                            </div>
                        </section>

                        <section>
                            <strong>Summary:</strong><br/>
                            <div dangerouslySetInnerHTML={{__html: movie.summary}}/>
                        </section>
                    </>}
                </div>
            </div>
        </div>
    </div>


)
export default Info
