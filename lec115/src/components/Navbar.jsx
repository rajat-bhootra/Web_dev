import React from 'react'
import {NavLink} from 'react-router'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/login"><li>Login</li></NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
