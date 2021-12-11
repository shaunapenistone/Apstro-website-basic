import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'
import { BsFillTriangleFill } from 'react-icons/bs';
import { HashLink } from 'react-router-hash-link';

import Logo from './Logo';
import './Navbar.css';

function Navbar() {
  const [ click, setClick ] = useState(false);

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <HashLink smooth to={"/"} className="navbar-logo">
            <Logo />
          </HashLink>
          <div class="menu-icon" onClick={handleClick}>
            {click ? 
              <BsFillTriangleFill color='pink' size='35px'/> 
              : <FiMenu color='pink' size='35px'/> 
            }
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <HashLink smooth to={'/home#home'} className='nav-links' onClick={closeMobileMenu}>
                home
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink smooth to={'/#about'} className='nav-links' onClick={closeMobileMenu}>
                about
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink smooth to={'/#contact-us'} className='nav-links' onClick={closeMobileMenu}>
                contact us
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink smooth to={'/#download'} className='nav-links' onClick={closeMobileMenu}>
                download
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
