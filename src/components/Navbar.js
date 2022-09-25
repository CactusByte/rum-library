import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    
    const closeMobileMenu = () => setClick(false);
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo">
                    <img src='/logo192.png' alt='logo'className='navbar-logo-image'/>
                </Link>
                <h4 className='logo-side-text'>Sobreviviendo el Colegio...</h4>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <span>Close</span> : <p>Menu</p>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/repasos' className='nav-links' onClick={closeMobileMenu}>
                            Repasos
                        </Link>
                    </li>
                    <li>
                        <Link to='/labs' className='nav-links' onClick={closeMobileMenu}>
                            Labs
                        </Link>
                    </li>
                    <li>
                        <Link to='/exams' className='nav-links' onClick={closeMobileMenu}>
                            Examenes
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar;