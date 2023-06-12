import React, { useContext } from 'react'
import './sign.css'
import { useNavigate } from 'react-router-dom' 
import{getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { APIContext } from '../../App'


export default function SignIn() {
  const auth = getAuth();
  const navigate = useNavigate()
  const {setUser} =  useContext(APIContext);

  async function handelUserSignIn(e){
    e.preventDefault();
    try{
      const user = await signInWithEmailAndPassword(auth,e.target.email.value,e.target.pass.value)
      setUser({id:user.user.uid , email:user.user.email})
      navigate('/')
      
    }catch(error){alert(error)}
  }



  
  return (
    
    <div className='all_sign_in'>
       
        <div className="sun_sign_in">
        <h1>welcome to movie land </h1>

        <form className='form_all' onSubmit={handelUserSignIn}>

        <div className="name">
        <p className='name'>email:</p>
        <input className='inp_name' name='email' required type="email" placeholder='email' />
        </div>
        <div className="pass">
        <p className='pass'>password:</p>
        <input className='inp_pass' name='pass' required type="password" placeholder='password' />
        </div>
        <button className='btn_sign'>sign in</button>
        </form>
        <button onClick={()=>{navigate('/signUp')}}>signUp</button>
        </div>
    </div>
  )
}
