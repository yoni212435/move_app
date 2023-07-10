import {Link} from 'react-router-dom'
import {FiHome} from 'react-icons/fi'

const Footer = () => (
    <div className="footer-container">
        <div className="footer-left"/>

        <div className="footer-center">
            <span>פרטים ליצירת קשר</span>
            <br/>
            <span>cinema.co.il  | | |
                <a href={"tel:052-3060345"} style={{textDecoration: "none", color: "rgb(194, 255, 255)"}}>
                    052-3060345
                </a>
            </span>
        </div>

        <div className="footer-right">
            {window.location.pathname !== '/' &&
                <Link to={'/'} className="home-button">
                    <FiHome viewBox={"0 0 24 30"}/> <span>Home</span>
                </Link>}
        </div>
    </div>
)
export default Footer
