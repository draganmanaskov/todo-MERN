import React from 'react'

const Header = () => {
  return (
    <header className="header">
        <h1 className='logo'>Logo</h1>
        <nav className='navbar'>
            <ul className='navbar-ul'>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header