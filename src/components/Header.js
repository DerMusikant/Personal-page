import React from 'react'
import {Link} from 'react-router-dom'

export default class Header extends React.Component{

  handleClick = (e) => {
    document.getElementById('navBar').classList.toggle('show')
  }

  render(){
    return (
      <header className='header grid grid-rows-5'>
        <div className='row-span-2 bg-gradient-to-r from-red-700 via-red-main to-red-700'>
        </div>
        <div className='header-main bg-white row-span-3 relative flex flex-col align-center font-serif md:flex-row md:justify-between shadow'>

          <div className='m-4'>
            <Link to='/'>To do:<br /> Logo</Link>
          </div>


            <div className='text-center items-center flex-col hidden md:flex md:flex-row' id='navBar'>
              <Link to='/' className='p-3 w-full' onClick={this.handleClick}>Home</Link>
              <Link to='/services' className='p-3 w-full' onClick={this.handleClick}>Services</Link>
              <Link to='/about' className='p-3 w-full' onClick={this.handleClick}>About</Link>
              <Link to='/FAQ' className='p-3 w-full' onClick={this.handleClick}>Frequent Questions</Link>
              <Link to='/contact' className='p-3 w-full' onClick={this.handleClick}>Contact Me</Link>
            </div>
            <div className='w-10 absolute right-0 top-0 m-4 md:hidden' onClick={this.handleClick}>
              <div className='border-b-4 border-black mt-2'></div>
              <div className='border-b-4 border-black my-2'></div>
              <div className='border-b-4 border-black mb-2'></div>
            </div>

        </div>
      </header>
    )
  }
}
