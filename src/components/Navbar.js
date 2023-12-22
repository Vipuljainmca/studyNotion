import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast';

const Navbar = (props) => {
    let isLogin = props.isLogin
    let loginChangeHandler = props.set
    const navigate = useNavigate()

    function loginHandler(){
        navigate('/login');
        
        // loginChangeHandler(!isLogin)
    }
    function signupHandler(){
        navigate('/signup');
        // loginChangeHandler(!isLogin)
    }
    function logoutHandler(){
        navigate('/');
        loginChangeHandler(!isLogin)
    }
    function dashHandler(){
        navigate('/dashboard');
        // loginChangeHandler(!isLogin)
    }
  return (
    <div className='nav'>
        <Link to='/'> 
            <img className='logo' src={logo} alt='logo' width={160} height={32} loading='lazy'/>
        </Link>
        <div className='nav-menu'>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
        </div>
        <div className='nav-btn'>
            {!isLogin && <button onClick={loginHandler}>Login</button>}
            {!isLogin && <button onClick={signupHandler}>Sign Up</button>}
            
        
        {isLogin && <button onClick={logoutHandler}>Log out</button>}
        {isLogin && <button onClick={dashHandler}>Dashboard</button>}
        </div>
    </div>
  )
}

export default Navbar
