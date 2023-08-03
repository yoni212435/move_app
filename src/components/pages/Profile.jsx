import "../../stylesheets/profile.css"
import {useAuth} from '../../contexts/authContext'
import {useUser} from '../../contexts/userContext'

const Profile = () => {
    const {currentUser} = useAuth()
    const email = useUser().email || currentUser.email

    return (
            <div className="profile-wrapper">
                <div className="profile-container">
                    <h1> your details < /h1>
                    <h3><strong>{'email: '}</strong>{email}</h3>
                    {/* todo more details */}
                </div>
            </div>
    )
}

export default Profile