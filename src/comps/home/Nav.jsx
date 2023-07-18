import "./HomePage.css"
import DropDownMenu from "../navBar/DropDownMenu"
import Search from "../navBar/Search"
import {useEffect, useState} from 'react'
import ProfileNavBar from '../navBar/ProfileNavBar'

const Nav = () => {
    const [pathname, setPathname] = useState(window.location.pathname)

    useEffect(() => {
        setPathname(window.location.pathname)
    }, [window.location.pathname])

    return (
        <div className="nav-container">
            <div className="nav-left">{pathname === '/' && <Search/>}</div>
            <div className="nav-center">{pathname.includes('/profile') && <ProfileNavBar/>}</div>
            <div className="nav-right"><DropDownMenu/></div>
        </div>
    )
}
export default Nav
