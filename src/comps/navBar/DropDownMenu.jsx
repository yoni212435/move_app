// import React, { useContext } from 'react'
import './DropDownMenu.css'
import {useState} from 'react'
// import { APIContext } from '../../movie'
// import AllCategory from './AllCategory'
// import Profile from './Profile'
import {Link} from 'react-router-dom'
// import MyList from './MyList'

export default function DropDownMenu(props) {
    const [over, setOver] = useState(false)

    // let data = useContext(APIContext)


    function showMenu() {
        setOver(true)
        if (over) {
            setOver(false)
        }
    }

    return (

        <div>
            <div className="btn_menu" onClick={showMenu}>
                <button className="A" onClick={showMenu}></button>
                <button className="A" onClick={showMenu}></button>
                <button className="A" onClick={showMenu}></button>
            </div>
            <ul className="menu" style={{display: over ? 'block' : 'none'}}>

                <li><Link to="/profile" className="btn_li">PROFIIL</Link></li>
                <li><Link to="/myList" className="btn_li">MY LIST</Link></li>
            </ul>

        </div>

    )
}
