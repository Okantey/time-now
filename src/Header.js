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

  return (
    <header className='header'>
      <div>
        <nav className='navigation'>
          <div className='first-section-nav'>
            <img id='logo' src={Logo} alt="" />
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div>
            <button className='schedule'>{scheduleButton}</button>
          </div>
        </nav>
        <h1>Post when your audience is most active</h1>
        <p className='description'>With TImeNow, automatically schedule your posts on Twitter, Linkedin and instagram to post when your followers are most active</p>
        <div className='button_demo'>
          <button>{scheduleButton}</button>
          <button>{demo}</button>
        </div>
        <p className='data_info'>Time now does not sell your data. <a href="#learn">Learn more</a></p>
      </div>
      <div className='hero_section'>
        <img src={Mockup} alt="hero_image" />
      </div>

    </header>
  )
}

export default Header