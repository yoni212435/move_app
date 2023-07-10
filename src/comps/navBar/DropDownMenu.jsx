import './DropDownMenu.css'
import {useState} from 'react'
import {ImMenu} from 'react-icons/im'
import {Link} from 'react-router-dom'

export default function DropDownMenu() {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className="dropdown">
            <ImMenu className="dropdown-btn" size="40px"
                    onClick={() => setToggleMenu(!toggleMenu)}
            />

            {toggleMenu &&
                <div className="dropdown-list">
                    <div className="dropdown-item"><Link to="/profile/details" className="btn_li">PROFILE</Link></div>
                    <div className="dropdown-item"><Link to="/myList" className="btn_li">MY LIST</Link></div>
                    <div className="dropdown-item"><Link to="/logout" className="btn_li" style={{color: "red"}}>LOGOUT</Link></div>
                </div>}
        </div>
    )
}
