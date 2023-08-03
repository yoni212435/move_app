import "../../stylesheets/home.css"
import DropDownMenu from "./DropDownMenu"
import Search from "./Search"
import {useLocation} from 'react-router-dom'

const Nav = () => {
    const {pathname} = useLocation()

    return (
        <div className="nav-container">
            <div className="nav-left">{pathname === '/' && <Search/>}</div>
            <div className="nav-center"></div>
            <div className="nav-right"><DropDownMenu/></div>
        </div>
    )
}
export default Nav
//todo move home button to nav
