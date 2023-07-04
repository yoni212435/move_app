import {useState} from "react"
import "./profile.css"
import Details from "./Details"
import {Link, Route, Routes} from "react-router-dom"
import AllCategories from "./AllCategories"
import {FiHome} from "react-icons/fi"
import ChangeCategories from './ChangeCategories'

export default function Profile(props) {
    const [over, setOver] = useState(false)
    const [over1, setOver1] = useState(false)
    const [over2, setOver2] = useState(false)

    function changeDetails() {
        if (over1 || over2) {
            setOver(false)
            setOver2(false)
            setOver1(true)
        } else {
            setOver1(true)
            setOver(false)
            setOver2(false)
        }
    }

    function changeAllCategories() {
        if (over || over1) {
            setOver(false)
            setOver1(false)
            setOver2(true)
        } else {
            setOver2(true)
            setOver1(false)
            setOver(false)
        }
    }


    return (
        <div className="main_profile">
            <div className="div_btn_profile">
                <Link className="btn_profile" to="/changeCategories">
                    Change categories
                </Link>
                <button className="btn_profile" onClick={changeDetails}>
                    my details
                </button>

                <button className="btn_profile" onClick={changeAllCategories}>
                    all categories
                </button>
            </div>
            <div className="list_catgeris">
                <Routes>
                    <Route index element={<Profile/>}>
                        <Route path="changeCategories" element={<ChangeCategories/>}/>
                        <Route path="details" element={<Details/>}/>
                        <Route path="allCategories" element={<AllCategories/>}/>
                    </Route>
                </Routes>
            </div>


            <div>
                <Link className="back_home" to={"/"}>
                    <FiHome/> home
                </Link>

            </div>
        </div>
    )
}