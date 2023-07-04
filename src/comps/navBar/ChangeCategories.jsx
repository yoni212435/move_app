import {doc, getFirestore, updateDoc} from "firebase/firestore"
import React, {useEffect, useRef, useState} from "react"
import {useAPIContext} from '../../contexts/APIContext'

export default function ChangeCategories() {
    const genreList = [
        "Drama",
        "Science-Fiction",
        "Thriller",
        "Action",
        "Crime",
        "Horror",
        "Romance",
        "Adventure",
        "Supernatural",
        "Fantasy",
        "Family",
        "Comedy",
        "Mystery",
        "Medical",
        "Legal"
    ]

    const [userGenres, setUserGenres] = useState([])
    const db = getFirestore()
    const {user} = useAPIContext()
    const checkboxRef = useRef()

    function updateDbCategories() {
        if (userGenres) {
            updateDoc(doc(db, "users", user.docId), {zhaner: userGenres})
                .then(res => console.log(res))
                .catch(e => console.log(`%cError: ${e.message}`, "color:red"))
        }
    }

    useEffect(() => {
        updateDbCategories()
    }, [userGenres])

    return (
        <div>
            {genreList.map((el, i) => (
                <div
                    key={i}
                    className="chak_box"

                >
                    <label htmlFor="myCheckbox" className="lable_class">
                        {" "}
                        {el}{" "}
                    </label>
                    <input
                        type="checkbox"
                        ref={checkboxRef}
                        name={el}
                        onChange={() => {
                            if (userGenres.length >= 3) {
                                alert("You exceeded the choices limit")
                                console.log('checkboxRef-> ', checkboxRef.current)
                                checkboxRef.current.checked = false
                            }

                            if (checkboxRef.current.checked) {
                                setUserGenres([...userGenres, el])
                            } else {
                                let newArray = userGenres?.filter((ele) => ele !== el)
                                setUserGenres(newArray)
                            }
                        }}
                    />
                </div>
            ))}

            <div

                className="name_of_catgorys_slider"
            >
                <h5 className="">The existing categories</h5>
                <div>{user?.zhaner[0]}</div>
                <div>{user?.zhaner[1]}</div>
                <div>{user?.zhaner[2]}</div>
            </div>
        </div>
    )
}
