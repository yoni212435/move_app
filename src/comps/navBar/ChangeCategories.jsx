import {useEffect, useRef, useState} from "react"
import genres from '../../genres'
import {useSetUserGenres, useUser} from '../../contexts/userContext'
import {useDBFunction} from '../../contexts/DBContext'
import {Alert} from 'react-bootstrap'
import printErrorMessage from '../../printErrorMessage'

const ChangeCategories = () => {
    const {zhaner: userGenres} = useUser()
    const {updateGenres} = useDBFunction()
    const setUserGenres = useSetUserGenres()
    const checkboxRef = useRef()
    const {addGenre, removeGenre} = useDBFunction()
    const [error, setError] = useState('')

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError('')
            }, 3000)
        }
    }, [error])

    const handleGenreUpdate = genreRef => {
        if (checkboxRef.current.checked && userGenres.length >= 3) {
            setError("You exceeded the choices limit")
            checkboxRef.current.checked = false
            return
        }

        if (checkboxRef.current.checked)
            setUserGenres([...userGenres, genreRef])
        else
            setUserGenres(userGenres.filter(genre => genre !== genreRef))

        updateGenres(userGenres)
            .then(r => console.log(r))
            .catch(e => printErrorMessage(e.message))
    }

    return (
        <>
            {error && <Alert variant="danger">{error}</Alert>}

            <div className="list_catgeris">
                {genres.map((genre, i) => (
                    <div
                        key={i}
                        className="check-box"
                    >
                        <label htmlFor="myCheckbox" className="lable_class">
                            {` ${genre} `}
                        </label>
                        <input
                            type="checkbox"
                            ref={checkboxRef}
                            checked={userGenres.includes(genre)}
                            name={genre}
                            onChange={() => handleGenreUpdate(genre)}
                        />
                    </div>
                ))}
            </div>

            <div className="name_of_catgorys_slider">
                <h5>selected genres</h5>
                {userGenres.map((_genre, i) => (
                    <div key={i}>{_genre}</div>
                ))}
            </div>
            {/* todo fix flex styling */}
        </>
    )
}
export default ChangeCategories
