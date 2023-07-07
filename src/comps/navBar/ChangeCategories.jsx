import {useEffect, useRef} from "react"
import genres from '../../genres'
import {useSetUserGenres, useUser} from '../../contexts/userContext'

const ChangeCategories = () => {
    const {zhaner: userGenres} = useUser().userData
    const setUserGenres = useSetUserGenres()
    const checkboxRef = useRef()

    useEffect(() => {
        console.log('change categories', userGenres)
    },[])


    const handleGenreUpdate = genre => {
        if (userGenres.length >= 3) {
            alert("You exceeded the choices limit")
            console.log('checkboxRef-> ', checkboxRef.current)
            checkboxRef.current.checked = false
        }

        if (checkboxRef.current.checked)
            setUserGenres([...userGenres, genre])
        else
            setUserGenres(userGenres.filter(_genre => _genre !== genre))
    }

    return (
        <>
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
                        name={genre}
                        onChange={() => handleGenreUpdate(genre)}
                    />
                </div>
            ))}

            <div className="name_of_catgorys_slider">
                <h5>selected genres</h5>
                {userGenres.map((_genre, i) => (
                    <div key={i}>{_genre}</div>
                ))}
            </div>
        </>
    )
}
export default ChangeCategories
