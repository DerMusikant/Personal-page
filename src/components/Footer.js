import React from 'react'
import {Link} from 'react-router-dom'

import Logo from '../assets/icons/dragon-solid.svg'
import Face from '../assets/icons/Facebook-square-brands.svg'
import Linked from '../assets/icons/linkedin-brands.svg'
import Git from '../assets/icons/github-brands.svg'


export default class Footer extends React.Component{
  render(){
    return (
      <footer className='footer'>
        <div className='flex flex-col items-center justify-evenly bg-gradient-to-r from-red-600 to-red-main md:flex-row'>
          <div className='info__logo'>
            <div className='m-2'>
              <Link to='/' className='contents'>
                <div className='flex flex-col text-center items-center w-max plat md:flex-row'>
                  <div className='m-2'>
                  <Logo className='dragon plat' />
                  <p>Draco</p>
                  </div>
                  <p>Your dream website<br />For your dream company</p>
                </div>
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center'>
           <h3 className='font-bold'>Useful Links:</h3>
            <div className='flex flex-col items-center md:flex-row'>
                <Link to='/' className='useful m-2'>>Home</Link>
                <Link to='/about' className='useful m-2'>>About</Link>
                <Link to='/FAQ' className='useful m-2'>>Frequent Questions</Link>
                <Link to='/services' className='useful m-2'>>Services</Link>
                <Link to='/contact' className='useful m-2'>>Contact Me</Link>
            </div>
          </div>
          <div className='flex flex-col text-center'>
            <p className='font-bold'>Follow me!</p>
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
        </div>
        <div className='text-center'>
          © Copyright Valentin Rivetti 2021. All Rights Reserved
        </div>
      </footer>
    )
  }
}
