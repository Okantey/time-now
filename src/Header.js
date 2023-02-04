/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from './assets/Logo.svg'
import Hamburger from './assets/Hamburger Menu.svg'
import Mockup from './assets/Mockup.png'
import Checkmark from './assets/Checkmark.svg'
import Shield from './assets/Shield.svg'

const Header = () => {
  const scheduleButton = 'Start Scheduling'
  const demo = 'View Demo'

  const paintNavLink = () => {
    const navLinks = Header.getElementsByTagName('a')
    for (let i = 0; i < navLinks.length; i++) {
      let eachLink = navLinks[i]
      eachLink.addEventListener('click', () => {
        eachLink.classList.toggle('active')
        if (eachLink.classList.contains('active')) {
          eachLink.style.color = 'darkblue'
        } else eachLink.classList.remove('active')
      })
    }
  }
  return (
    <nav className='navigation' >
      <div className="nav_left">
        <div><img src={Logo} alt="brand_logo" /></div>
        <ul className='list_item'>
          <a href="#features"><li>Features</li></a>
          <a href="#pricing"><li>Pricing</li></a>
        </ul>
      </div>
      <div className="nav_right">
        <button className='schedule'>
          Start Scheduling
        </button>
      </div>
    </nav>
  )
}

export default Header