import "./info.css"

const Info = ({movie}) => (
    <div className="info all_info">
        {movie && <img src={movie.image?.medium} alt="main img" width="250px"/>}

        <div className="list_info">
            {movie && <>
                <p>name: {movie.name}</p>
                <p>language: {movie.language}</p>
                <p>premiered: {movie.premiered}</p>
                <p>rating: {movie.rating.average}</p>
                <p>name company: {movie.network.name}</p>
                <div dangerouslySetInnerHTML={{__html: movie.summary}}/>
            </>}
        </div>
    </div>

)
export default Info
