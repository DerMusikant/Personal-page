import React from 'react'
import {Link} from 'react-router-dom'

import Logo from '../assets/icons/dragon-solid.svg'
import Face from '../assets/icons/Facebook-square-brands.svg'
import Linked from '../assets/icons/linkedin-brands.svg'
import Git from '../assets/icons/github-brands.svg'

export default class Header extends React.Component{

  handleClick = (e) => {
    document.getElementById('navBar').classList.toggle('show')
    document.getElementById('burger').classList.toggle('cross')
  }

  render(){
    return (
      <header className='header'>

        <div className='bg-gradient-to-r from-platinum via-red-main to-purple-main flex items-center justify-between'>

          <p className='follow mx-2'>Follow me!</p>

          <div className='flex'>
            <a className='media' href='https://www.facebook.com/RivettiValentin/'>
              <Face className='social-media p-2' />
            </a>

            <a className='media' href='https://www.linkedin.com/in/valentinrivetti/'>
              <Linked className='social-media p-2' />
            </a>

            <a className='media' href='https://github.com/DerMusikant'>
              <Git className='social-media p-2' />
            </a>

          </div>
        </div>


        <div className='header-main bg-platinum relative flex flex-col font-serif md:flex-row md:justify-between'>

          <div className='m-1'>
            <Link to='/'><div className='flex flex-col items-center w-max'><Logo className='dragon' /><p>Draco: Web Solutions</p></div></Link>
          </div>


            <div className='text-center mx-2 items-center flex-col hidden md:flex md:flex-row' id='navBar'>
              <Link to='/' className='navBar__item p-3 px-6 w-full border-red-main md:w-auto' onClick={this.handleClick}>Home</Link>
              <Link to='/services' className='navBar__item p-3 px-6 w-full border-red-main md:w-auto' onClick={this.handleClick}>Services</Link>
              <Link to='/about' className='navBar__item p-3 px-6 w-full border-red-main md:w-auto' onClick={this.handleClick}>About</Link>
              <Link to='/FAQ' className='navBar__item p-3 px-6 w-full border-red-main md:w-auto' onClick={this.handleClick}>Frequent Questions</Link>
              <Link to='/contact' className='contact-me p-3 w-full md:w-auto' onClick={this.handleClick}>Contact Me!</Link>
            </div>
            <div id='burger' className='h-10 w-10 burger absolute flex flex-col justify-around right-0 mx-3 md:hidden' onClick={this.handleClick}>
              <div className='bg-black border-2 border-purple-main rounded-full'></div>
              <div className='bg-black border-2 border-purple-main rounded-full'></div>
              <div className='bg-black border-2 border-purple-main rounded-full'></div>
            </div>

        </div>
      </header>
    )
  }
}
