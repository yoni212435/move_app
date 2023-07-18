import {NavLink} from 'react-router-dom'

const ProfileNavLink = ({content, to}) => {
    return (
        <NavLink className={({isActive}) =>
            ('nav-link ' + (isActive ? "nav-link-active" : "nav-link-inactive"))}
                 to={to}>
            <div style={{height: "0.6em"}}/>
            <span>{content}</span>
        </NavLink>
    )
}

export default ProfileNavLink