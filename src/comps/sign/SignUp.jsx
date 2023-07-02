import React, {useContext} from 'react'
import './sign.css'
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import {APIContext} from '../../App'
import {useNavigate} from 'react-router-dom'


export default function SignUp() {
    const auth = getAuth()
    let {setUser} = useContext(APIContext)
    const navigate = useNavigate()

    async function handelUser(e) {
        e.preventDefault()
        try {
            const userObj = await createUserWithEmailAndPassword(auth, e.target.email.value, e.target.pass.value)

            setUser({id: userObj.user.uid})
            navigate('/')
        } catch (error) {
            alert(error)
        }

    }


    return (
        <div className="all_sign_in">

            <div className="sun_sign_in">
                <h1 className="title_sign">The movie library</h1>

                <form className="form_all" onSubmit={handelUser}>

                    <div className="input_fields">
                        <p className="email">email:</p>
                        <input className="inp_name" required name="email" type="email" placeholder="email"/>
                    </div>
                    <div className="pass">
                        <p className="pass">password:</p>
                        <input className="inp_pass" required name="pass" type="password" placeholder="password"/>
                    </div>
                    <button className="btn_sign">sign up</button>
                </form>
            </div>
        </div>
    )
}
