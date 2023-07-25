import {NavLink} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

const DropdownLink = ({content, to, style}) => {
    return (
        <NavLink
            className={'dropdown-item'}
            to={to}
            style={style && style}>
            {({isActive}) => (
                <span style={{color: 'red'}}>{isActive && <BsDot/> + ' '}</span>
            )}
            <span>{content}</span>
        </NavLink>
    )
}

export default DropdownLink