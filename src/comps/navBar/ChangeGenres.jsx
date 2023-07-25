import {useEffect, useRef, useState} from "react"
import genres from '../../genres'
import {useUpdateUser, useUser} from '../../contexts/userContext'
import {useDBFunction} from '../../contexts/DBContext'
import {Alert} from 'react-bootstrap'
import printErrorMessage from '../../printErrorMessage'
import {FiCheckSquare, FiSquare} from 'react-icons/fi'

const ChangeGenres = () => {
    let {zhaner} = useUser()
    const updateUser = useUpdateUser()
    const [userGenres, setUserGenres] = useState(zhaner)
    const {updateGenres, overrideUser} = useDBFunction()
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
                .catch(() => {
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
                        className={"list-item" + (userGenres.includes(genre) ? " selected-genre" : "")}
                        onClick={() => handleGenreUpdate(genre)}
                    >
                        <span id={genre} className="title">
                            {genre}
                        </span>
                        <span className="icon">
                            {userGenres.includes(genre) ? <FiCheckSquare/> : <FiSquare/>}
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}
export default ChangeGenres
