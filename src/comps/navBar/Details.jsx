import './Details.css'
import {useUser} from '../../contexts/userContext'
import {useAuth} from '../../contexts/authContext'

const Details = () => {
    const {currentUser} = useAuth()
    const email = useUser().userData.email || currentUser.email

    return (
        < div className="all_detiles">
            < div className="sun_detiles">
                < h1> your details < /h1>
                <h3>{email}</h3>
                {/* todo more details */}
            </div>
        </div>)
}

export default Details
