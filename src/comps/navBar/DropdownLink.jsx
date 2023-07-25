import {NavLink} from 'react-router-dom'
import {GoDotFill} from 'react-icons/go'

const DropdownLink = ({content, to, style}) => {
    return (
        <NavLink
            className={'dropdown-item'}
            to={to}
            style={style && style}>
            {({isActive}) => (
                <>
                    {isActive && <span className={'active-dot'}>{<GoDotFill/>}</span>}
                    <span>{content}</span>
                </>
            )}
        </NavLink>
    )
}

export default DropdownLink