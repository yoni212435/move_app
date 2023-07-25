import "./profile.css"
import Details from "./Details"
import {Route, Routes} from "react-router-dom"
import AllGenres from "./AllGenres"
import ChangeGenres from './ChangeGenres'

const Profile = () => (
    <div className="content">
            <Routes>
                <Route path="changeGenres" element={<ChangeGenres/>}/>
                <Route path="details" element={<Details/>}/>
                <Route path="allGenres" element={<AllGenres/>}/>
            </Routes>
    </div>
)
export default Profile