import {useRef, useState} from 'react'
import '../../stylesheets/auth.css'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts/authContext'
import {Alert, Button, Form} from "react-bootstrap"
import printErrorMessage from '../../printErrorMessage'


export default function LogIn() {
    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            setMessage("You are successfully logged in")
            navigate('/', {replace: true})
        } catch (e) {
            if (e.code === "auth/wrong-password")
                setError("Wrong password")
            else if (e.code === "auth/user-not-found")
                setError("User not found")
            else
                setError("Failed to log in")
            printErrorMessage(e.code)
        }
        setLoading(false)
    }


    return (
        <div className="all_sign_in">
            <div className="sun_sign_in">
                <h2 className="text-center mb-4">The movie library</h2>

                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}

                <Form onSubmit={handleSubmit} style={{width: '16rem'}}>
                    <Form.Group id="email" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id="password" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">
                        LOG IN
                    </Button>
                </Form>

                <div className="w-100 text-center mt-3">
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>

                <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/signup">SIGN UP</Link>
                </div>
            </div>
        </div>
    )
}
