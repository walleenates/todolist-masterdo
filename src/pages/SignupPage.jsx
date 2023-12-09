import React, { useRef } from 'react'
import auth from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const SignupPage = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  const Signup = () => {
    try{
      if(passwordRef.current.value > 8){
        if(passwordRef.current.value === passwordConfirmRef.current.value){
          
          return console.log(createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value))
        } else {
          console.log(passwordRef.current.value)
          console.log(passwordConfirmRef.current.value)
          console.log('Password does not match')
        }
      } else {
        console.log('Password should be longer than 8 character')
      }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <div className='signup-container'>
        <div className=''>
          <input ref={emailRef} type='email' name='email' placeholder='Email' />
          <input ref={passwordRef} type='password' name='password' placeholder='Password'/>
          <input ref={passwordConfirmRef} type='password' name='passowrd-confirm' placeholder='Password Confirm' />
          <button onClick={()=> Signup()}>Sign up</button>
        </div>
      </div>
    </>
  )
}

export default SignupPage