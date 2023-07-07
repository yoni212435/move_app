import "./profile.css"
import Details from "./Details"
import {Link, Route, Routes} from "react-router-dom"
import AllCategories from "./AllCategories"
import {FiHome} from "react-icons/fi"
import ChangeCategories from './ChangeCategories'

const Profile = () => (
    <div className="main_profile">
        <div className="div_btn_profile">
            <Link className="btn_profile" to="/profile/changeCategories">
                Change categories
            </Link>
            <Link className="btn_profile" to="/profile/details">
                my details
            </Link>

            <Link className="btn_profile" to="/profile/allCategories">
                all categories
            </Link>
        </div>

        <div className="list_catgeris">
            <Routes>
                <Route path="changeCategories" element={<ChangeCategories/>}/>
                <Route path="details" element={<Details/>}/>
                <Route path="allCategories" element={<AllCategories/>}/>
            </Routes>
        </div>

        <Link className="home-button" to={"/"}>
            <FiHome/> home
        </Link>
    </div>
)
export default Profile