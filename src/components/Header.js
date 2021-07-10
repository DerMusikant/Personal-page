import React from 'react'
import {Link} from 'react-router-dom'

export default class Header extends React.Component{

  handleClick = (e) => {
    alert('')
  }

  render(){
    return (
      <header className='flex justify-between bg-red-600'>

        <div className='header__logo'>
          <Link to='/'>To do: Logo</Link>
        </div>


        <div className='relative'>

          <Link to='/' className='block mt-16 py-2'>Home</Link>
          <Link to='/about' className='block py-2'>About</Link>
          <Link to='/FAQ' className='block py-2'>Frequent Questions</Link>
          <Link to='/services' className='block py-2'>Services</Link>
          <Link to='/contact' className='block py-2'>Contact Me</Link>

          <div className='w-10 absolute right-0 top-0 m-4' onClick={this.handleClick}>
            <div className='border-b-4 border-black mt-2'></div>
            <div className='border-b-4 border-black my-2'></div>
            <div className='border-b-4 border-black mb-2'></div>
          </div>

        </div>
      </header>
    )
  }
}
