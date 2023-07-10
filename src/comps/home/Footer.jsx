import {Link} from 'react-router-dom'
import {FiHome} from 'react-icons/fi'

const Footer = () => (
    <div className="footer-container">
        <div className="footer-right">
            {location.pathname !== '/' &&
                <Link to={'/'} className="home-button">
                    <FiHome/> Home
                </Link>}
        </div>

        <div className="footer-center">
            <span>פרטים ליצירת קשר</span>
            <br/>
            <span>cinema.co.il | | | 052-3060345</span>
        </div>
    </div>
)
export default Footer
