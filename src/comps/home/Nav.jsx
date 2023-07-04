import "./HomePage.css"
import DropDownMenu from "../navBar/DropDownMenu"
import Search from "../navBar/Search"

const Nav = props => (

    <div className="nav_all">
        <div className="nav_btn">
            <DropDownMenu/>
        </div>
        <div className="nav_search">
            <Search/>
        </div>
    </div>
)
export default Nav
