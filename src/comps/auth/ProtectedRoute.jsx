import {useAuth} from '../../contexts/authContext'
import {Navigate} from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {currentUser} = useAuth()
    console.log('user: ', currentUser)

    if (!currentUser) {
        return <Navigate to="/login" replace/>
    }

    return children
}

export default ProtectedRoute