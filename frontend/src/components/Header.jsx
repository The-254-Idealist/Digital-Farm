import React from 'react'
import { BsPersonPlus, BsPersonCircle } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header' >
        <div className='logo' >
            <Link to='/' ><AiFillHome/>Home</Link>
        </div>
        <ul>
            <li>
                <Link to='/login' >
                    <BsPersonCircle/>
                    Login
                </Link>
                </li>
                <li>
                    <Link to='/register' >
                            <BsPersonPlus/> Register
                    </Link>
                </li>
        </ul>

    </header>
  )
}

export default Header