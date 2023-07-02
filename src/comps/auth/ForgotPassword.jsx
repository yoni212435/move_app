import {useRef, useState} from 'react'
import './auth.css'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts/authContext'
import {Alert, Button, Form} from "react-bootstrap"


export default function ForgotPassword() {
    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch (e) {
            setError("Failed to reset password")
            console.log(`%cError: ${e}`, "color:red")
        }
        setLoading(false)
    }


    return (
        <div className="all_sign_in">
            <div className="sun_sign_in">
                <h2 className="text-center mb-4">Reset Password</h2>

                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}

                <Form onSubmit={handleSubmit} style={{width: '16rem'}}>
                    <Form.Group id="email" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">
                        Reset Password
                    </Button>
                </Form>

                <div className="w-100 text-center mt-3">
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    )
}
