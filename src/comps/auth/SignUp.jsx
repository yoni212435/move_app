import {useRef, useState} from 'react'
import './auth.css'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts/authContext'
import {Alert, Button, Form} from "react-bootstrap"
import printErrorMessage from '../../printErrorMessage'


export default function SignUp() {
    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords does not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate("/", {replace: true})
        } catch (e) {
            if (e.code === "auth/email-already-in-use")
                setError("That email address is already in use")
            else
                setError("Failed to create an account")
            printErrorMessage(e.code)
        }

        setLoading(false)
    }

    return (
        <div className="all_sign_in">
            <div className="sun_sign_in">
                <h2 className="text-center mb-4">Sign Up Now</h2>

                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit} style={{width: '16rem'}}>
                    <Form.Group id="email" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id="password" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>
                    <Form.Group id="password-confirm" className="mb-3">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required/>
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">
                        Log In
                    </Button>
                </Form>

                <div className="w-100 text-center mt-2">
                    Already have an account? <Link to="/login">SIGN UP</Link>
                </div>
            </div>
        </div>
    )
}
