import ProfileNavLink from './ProfileNavLink'

const ProfileNavBar = ({}) => {
    return (
        <div className="nav-link-container">
            <ProfileNavLink content="Select genres" to="/profile/changeGenres"/>
            <ProfileNavLink content="My details" to="/profile/details"/>
            <ProfileNavLink content="All genres" to="/profile/allGenres"/>
        </div>
    )
}

export default ProfileNavBar