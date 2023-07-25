import "./home.css"
import DropDownMenu from "../navBar/DropDownMenu"
import Search from "../navBar/Search"
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
