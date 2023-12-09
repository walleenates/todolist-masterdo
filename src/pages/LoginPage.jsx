import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useRef } from 'react'
import auth from '../firebase'

const LoginPage = () => {
    const emailRef = useRef()
    const passwordRef = useRef()

    const Signin = (error) => {
        try{
            return signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).catch((error)=console.log(error))
        } catch(error){
            console.log(error)
        }
    }
    if(auth.currentUser){
        console.log(auth.currentUser.email)
    }
  return (
    <>
        <div className='login-container'>
            <div className=''>
                <input ref={emailRef} name='email' placeholder='Email'/>
                <input ref={passwordRef} name='password' placeholder='Password' />
                <button onClick={()=> Signin()} >Login</button>
            </div>

        </div>
    </>
  )
}

export default LoginPage