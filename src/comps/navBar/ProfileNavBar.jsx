import ProfileNavLink from './ProfileNavLink'

const ProfileNavBar = ({}) => {
    return (
        <div className="nav-link-container">
            <ProfileNavLink content="Change categories" to="/profile/changeCategories"/>
            <ProfileNavLink content="My details" to="/profile/details"/>
            <ProfileNavLink content="All categories" to="/profile/allCategories"/>
        </div>
    )
}

export default ProfileNavBar