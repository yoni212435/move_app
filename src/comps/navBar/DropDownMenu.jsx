import './DropDownMenu.css'
import {useEffect, useState} from 'react'
import {ImMenu} from 'react-icons/im'
import DropdownLink from './DropdownLink'
import {useLocation} from 'react-router-dom'

export default function DropDownMenu() {
    const {pathname} = useLocation()
    const [toggleMenu, setToggleMenu] = useState(false)

    useEffect(() => {
        setToggleMenu(false)
    }, [pathname])

    return (
        <div className="dropdown">
            <ImMenu className="dropdown-btn" size="40px"
                    onClick={() => setToggleMenu(!toggleMenu)}
            />

            {toggleMenu &&
                <div className="dropdown-list">
                    <DropdownLink to="/profile" content={'PROFILE'}/>
                    <DropdownLink to="/myList" content={'MY LIST'}/>
                    <DropdownLink to="/genres" content={'GENRES'}/>
                    <DropdownLink to="/logout" content={'LOGOUT'} style={{color: "red"}}/>
                </div>}
        </div>
    )
}
