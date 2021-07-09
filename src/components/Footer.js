import React from 'react'
import {Link} from 'react-router-dom'

export default class Footer extends React.Component{
  render(){
    return (
      <footer className='footer'>
        <div className='footer__info'>
          <div className='info__logo'>
            To do: brand logo-motto
          </div>
          <div className='info__links'>
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
          <div className='info__contact'>
            To do: contact info
          </div>
        </div>
        <div className='footer__copyright'>
          © Copyright Valentin Rivetti. All Rights Reserved
        </div>
      </footer>
    )
  }
}
