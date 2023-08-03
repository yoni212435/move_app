import {Link, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {useAuth} from '../../contexts/authContext'
import {Alert} from 'react-bootstrap'
import printErrorMessage from '../../printErrorMessage'

const LogOut = ({}) => {
    const {logout} = useAuth()
    const navigate = useNavigate()
    const [message, setMessage] = useState("")
    const [error, setError] = useState(false)

    useEffect(() => {
        try {
            setError(false)
            setMessage('')
            logout()
                .then(() => {
                        setMessage('You are successfully logged out')
                        setTimeout(() => {
                            navigate('/login', {replace: true})
                        }, 1500)
                    }
                )
        } catch (e) {
            setMessage("Failed to log out")
            setError(true)
            printErrorMessage(e)
        }
    }, [])

    return (
        <>
            {message && <Alert variant={error ? "danger" : "success"}>{message}</Alert>}
            <br/>
            <Link to="/login">Login</Link>
        </>
    )
}

export default LogOut