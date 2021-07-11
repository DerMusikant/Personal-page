import React from 'react'
import {Link} from 'react-router-dom'

export default class Header extends React.Component{

  handleClick = (e) => {
    document.getElementById('navBar').classList.toggle('show')
    document.getElementById('burger').classList.toggle('cross')
  }

  render(){
    return (
      <header className='header'>
        <div className='bg-gradient-to-r from-red-600 via-red-main to-red-700 h-10'>
        </div>
        <div className='header-main bg-white relative flex flex-col align-center font-serif md:flex-row md:justify-between shadow'>

          <div className='m-2'>
            <Link to='/'>To do:<br /> Logo</Link>
          </div>


            <div className='text-center items-center flex-col hidden md:flex md:flex-row' id='navBar'>
              <Link to='/' className='navBar__item p-4 mx-2 w-full border-red-main md:w-auto' onClick={this.handleClick}>Home</Link>
              <Link to='/services' className='navBar__item p-4 mx-2 w-full border-red-main md:w-auto' onClick={this.handleClick}>Services</Link>
              <Link to='/about' className='navBar__item p-4 mx-2 w-full border-red-main md:w-auto' onClick={this.handleClick}>About</Link>
              <Link to='/FAQ' className='navBar__item p-4 mx-2 w-full border-red-main md:w-auto' onClick={this.handleClick}>Frequent Questions</Link>
              <Link to='/contact' className='navBar__item contact-me p-4 mx-2 w-full md:w-auto' onClick={this.handleClick}>Contact Me!</Link>
            </div>
            <div id='burger' className='h-10 w-10 burger absolute flex flex-col justify-around right-0 top-0 m-3 md:hidden' onClick={this.handleClick}>
              <div className='bg-black border-2 border-black rounded-full'></div>
              <div className='bg-black border-2 border-black rounded-full'></div>
              <div className='bg-black border-2 border-black rounded-full'></div>
            </div>

        </div>
      </header>
    )
  }
}
