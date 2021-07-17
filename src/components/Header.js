import React from 'react'
import {Link} from 'react-router-dom'

import Logo from '../assets/icons/dragon-solid.svg'
import Face from '../assets/icons/Facebook-square-brands.svg'
import Linked from '../assets/icons/linkedin-brands.svg'
import Git from '../assets/icons/github-brands.svg'


export default class Header extends React.Component{

  // ----- CLICK EVENT FOR MOBILE MENU --------

  handleClick = (e) => {
    document.getElementById('navBar').classList.toggle('show')
    document.getElementById('burger').classList.toggle('cross')
  }

  render(){
    return (
      <header className='header'>
        { /* ---------------- SOCIAL MEDIA START -------------- */ }

        <div className='bg-gradient-to-r from-platinum via-red-main to-purple-main flex items-center justify-between font-sans'>
          <p className='follow mx-2 pmain'>Follow me!</p>
          <div className='flex'>
            <a className='contents plat' href='https://www.facebook.com/RivettiValentin/'>
              <Face className='social-media p-2' />
            </a>
            <a className='contents plat' href='https://www.linkedin.com/in/valentinrivetti/'>
              <Linked className='social-media p-2' />
            </a>
            <a className='contents plat' href='https://github.com/DerMusikant'>
              <Git className='social-media p-2' />
            </a>
          </div>
        </div>

        { /* ---------------- SOCIAL MEDIA END -------------- */ }

        { /* ---------------- MAIN HEADER START -------------- */ }

        <div className='header-main bg-platinum relative flex flex-col lg:flex-row lg:grid lg:grid-cols-3'>

          { /* ---------------- LOGO START -------------- */ }

          <div className='m-2 lg:col-span-1'>
            <Link to='/' className='contents'>
              <div className='flex flex-col items-center w-max rmain'>
                <Logo className='dragon' />
                <p>Draco: Web Solutions</p>
              </div>
            </Link>
          </div>

          { /* ---------------- LOGO END -------------- */ }

          { /* ---------------- NAVIGATION BAR START -------------- */ }

          <div className='text-center mx-2 items-center flex-col hidden lg:flex lg:col-span-2 lg:flex-row lg:justify-end' id='navBar'>
            <Link to='/' className='navBar__item rmain p-3 px-6 w-full border-red-main lg:w-auto lg:shadow-none' onClick={this.handleClick}>Home</Link>
            <Link to='/services' className='navBar__item rmain p-3 px-6 w-full border-red-main lg:w-auto lg:shadow-none' onClick={this.handleClick}>Services</Link>
            <Link to='/about' className='navBar__item rmain p-3 px-6 w-full border-red-main lg:w-auto lg:shadow-none' onClick={this.handleClick}>About</Link>
            <Link to='/FAQ' className='navBar__item rmain p-3 px-6 w-full border-red-main lg:w-auto lg:shadow-none' onClick={this.handleClick}>Frequent Questions</Link>
            <Link to='/contact' className='contact-me plat bg-red-main p-3 w-full lg:w-auto hover:bg-platinum' onClick={this.handleClick}>Contact Me!</Link>
          </div>
          <div id='burger' className='h-10 w-10 burger absolute flex flex-col justify-around right-0 mx-3 lg:hidden' onClick={this.handleClick}>
            <div className='bg-black border-2 border-purple-main rounded-full'></div>
            <div className='bg-black border-2 border-purple-main rounded-full'></div>
            <div className='bg-black border-2 border-purple-main rounded-full'></div>
          </div>

            { /* ---------------- NAVIGATION BAR END -------------- */ }

        </div>

        { /* ---------------- MAIN HEADER END -------------- */ }

      </header>
    )
  }
}
