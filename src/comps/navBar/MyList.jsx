import React, {useContext} from 'react'
import './MyList.css'
import {doc, getFirestore, updateDoc} from 'firebase/firestore'
import {APIContext} from '../../App'
import {BiTrash} from "react-icons/bi"
import {Link, useNavigate} from 'react-router-dom'
import {FiHome} from "react-icons/fi"

export default function MyList(props) {
    const db = getFirestore()
    const {user, handelUserObjFirebase, setIndex, setUrlMyListAndAllCategories, dataApp} = useContext(APIContext)
    const navigate = useNavigate()


    async function minusMovie(id) {
        let filterData = props.listAr.filter(element => element.id !== id)
        try {
            await updateDoc(doc(db, 'users', user.docId), {myList: filterData})
            await handelUserObjFirebase()
        } catch (error) {
            console.log(error)
        }

    }


    function changeToMainMovie(id) {
        let index1 = dataApp.findIndex(element => element.id === id)
        setIndex(index1)
        navigate('/')
        setUrlMyListAndAllCategories('/MyList')
    }

    return (
        <div className="main_my_list">
            <div className="div_my_list">
                {props.listAr?.map((e, i) =>
                    <div className="item_my_list" key={i}>
                        <div
                            onClick={() => {
                                {
                                    changeToMainMovie(e.id)
                                }

                            }}
                        >
                            <img src={e.image.medium} alt="" height="250px"/>
                            <button onClick={() => minusMovie(e.id)} className="btn_minus_myList"><BiTrash/></button>
                        </div>
                    </div>
                )}
                <Link to={'/'} className="home_myLyst"><FiHome/> home</Link>
            </div>

        </div>

    )
}

