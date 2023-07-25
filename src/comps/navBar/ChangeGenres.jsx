import {useEffect, useRef, useState} from "react"
import genres from '../../genres'
import {useUpdateUser, useUser} from '../../contexts/userContext'
import {useDBFunction} from '../../contexts/DBContext'
import {Alert} from 'react-bootstrap'
import printErrorMessage from '../../printErrorMessage'

const ChangeGenres = () => {
    let {zhaner} = useUser()
    const updateUser = useUpdateUser()
    const [userGenres, setUserGenres] = useState(zhaner)
    const {updateGenres, overrideUser} = useDBFunction()
    const checkboxRef = useRef()
    const [error, setError] = useState('')
    const isMounted = useRef(false)

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError('')
            }, 3000)
        }
    }, [error])

    useEffect(() => {
        if (isMounted.current) {
            updateGenres(userGenres)
                .catch(e => {
                    console.log('update failed. trying to override')
                    overrideUser({zhaner: userGenres})
                        .catch(e => printErrorMessage(e))
                })
            updateUser({zhaner: userGenres})
        } else {
            isMounted.current = true
        }
    }, [userGenres])

    const handleGenreUpdate = genreRef => {
        setUserGenres(prevGenres => {
            if (prevGenres.includes(genreRef)) {
                return prevGenres.filter((genre) => genre !== genreRef)
            } else if (prevGenres.length < 3) {
                return [...prevGenres, genreRef]
            } else {
                setError("You exceeded the choices limit")
                return prevGenres
            }
        })
    }

    return (
        <>
            {error && <Alert variant="danger">{error}</Alert>}

            <div className="genre-list">
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

            <div className="selected-genres">
                <h5>selected genres</h5>
                {userGenres.map((_genre, i) => (
                    <div key={i}>{_genre}</div>
                ))}
            </div>
            {/* todo fix flex styling */}
        </>
    )
}
export default ChangeGenres
