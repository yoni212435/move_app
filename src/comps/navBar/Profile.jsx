import "./profile.css"
import Details from "./Details"
import {Route, Routes} from "react-router-dom"
import Genres from './Genres'

const Profile = () => (
    <div className="content">
            <Routes>
                <Route path="changeGenres" element={<Genres/>}/>
                <Route path="details" element={<Details/>}/>
            </Routes>
    </div>
)
export default Profile