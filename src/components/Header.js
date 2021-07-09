import React from 'react'
import {Link} from 'react-router-dom'

export default class Header extends React.Component{
  render(){
    return (
      <header className='header'>
        <div className='header__logo'>
          <Link to='/'>To do: Logo</Link>
        </div>
        <div className='header__navbar'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/FAQ'>Frequent Questions</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Me</Link>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}
