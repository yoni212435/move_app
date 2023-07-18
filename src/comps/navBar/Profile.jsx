import "./profile.css"
import Details from "./Details"
import {Route, Routes} from "react-router-dom"
import AllCategories from "./AllCategories"
import ChangeCategories from './ChangeCategories'

const Profile = () => (
    <div className="main_profile">
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