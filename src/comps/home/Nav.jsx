import "./HomePage.css"
import DropDownMenu from "../navBar/DropDownMenu"
import Search from "../navBar/Search"

export default function Nav(props) {
    return (

        <div className="nav_all">

            <div className="nav_btn">
                <DropDownMenu/>
            </div>
            <div className="nav_search">
                <Search changeI={props.changeI} changeJ={props.changeJ}/>
            </div>
        </div>
    )
}
