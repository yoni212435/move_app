import "./profile.css"
import Details from "./Details"
import {NavLink, Route, Routes} from "react-router-dom"
import AllCategories from "./AllCategories"
import ChangeCategories from './ChangeCategories'

const Profile = () => (
    <div className="main_profile">
        <div className="nav-link-container">
            <NavLink className={({isActive}) =>
                ('nav-link ' + (isActive ? "nav-link-active" : "nav-link-inactive"))}
                     to="/profile/changeCategories">
                Change categories
            </NavLink>

            <NavLink className={({isActive}) =>
                ('nav-link ' + (isActive ? "nav-link-active" : "nav-link-inactive"))}
                     to="/profile/details"
            >
                my details
            </NavLink>

            <NavLink className={({isActive}) =>
                ('nav-link ' + (isActive ? "nav-link-active" : "nav-link-inactive"))}
                     to="/profile/allCategories">
                all categories
            </NavLink>
        </div>

        <div className={"flex"}>
            <Routes>
                <Route path="changeCategories" element={<ChangeCategories/>}/>
                <Route path="details" element={<Details/>}/>
                <Route path="allCategories" element={<AllCategories/>}/>
            </Routes>
        </div>
    </div>
)
export default Profile