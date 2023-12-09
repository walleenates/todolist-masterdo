import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className='header-container'>
            <div className='nav-bar'>
                <Link to="/">
                    Home
                </Link>
                <Link to='Login'> 
                    Login
                </Link>
                <Link to='Signup' >
                    SignUp
                </Link>
            </div>  
        </div>
    </>
  )
}

export default Header