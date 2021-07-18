import React from 'react'
import {Link} from 'react-router-dom'

import Logo from '../../assets/icons/dragon-solid.svg'
import Face from '../../assets/icons/Facebook-square-brands.svg'
import Linked from '../../assets/icons/linkedin-brands.svg'
import Git from '../../assets/icons/github-brands.svg'


export default class Footer extends React.Component{

  handleClick(){
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'})
  }

  render(){
    return (
      <footer className='font-sans'>
        <div className='grid grid-rows-6 justify-center items-center bg-gradient-to-r from-red-600 to-red-main md:grid-cols-2 md:grid-rows-2 xl:flex xl:justify-evenly'>

          { /* ---------------- FOOTER LOGO START -------------- */ }

          <div className='info__logo row-span-2 md:row-span-1'>
            <div className='m-2 flex justify-center'>
              <Link to='/' className='contents'>
                <div className='flex flex-col text-center items-center justify-center w-max plat md:flex-row'>
                  <div className='m-2'>
                  <Logo className='dragon plat' />
                  <p>Draco</p>
                  </div>
                  <p>Your dream website<br />For your dream company</p>
                </div>
              </Link>
            </div>
          </div>

          { /* ---------------- FOOTER LOGO END-------------- */ }

          { /* ---------------- USEFUL LINKS START -------------- */ }

          <div className='row-span-3 flex flex-col items-center justify-center md:row-start-2 md:col-span-2 md:row-span-1'>
           <h3 className='font-bold'>Useful Links:</h3>
            <div className='flex flex-col items-center md:flex-row'>
                <Link to='/' className='useful m-2'>>Home</Link>
                <Link to='/about' className='useful m-2'>>About</Link>
                <Link to='/FAQ' className='useful m-2'>>Frequent Questions</Link>
                <Link to='/services' className='useful m-2'>>Services</Link>
                <Link to='/contact' className='useful m-2'>>Contact Me</Link>
            </div>
          </div>

          { /* ---------------- USEFUL LINKS END-------------- */ }

          { /* ---------------- SOCIAL MEDIA START -------------- */ }

          <div className='flex flex-col text-center items-center'>
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

          { /* ---------------- SOCIAL MEDIA END -------------- */ }

        </div>

        { /* ---------------- LEGAL INFO -------------- */ }

        <div className='text-center'>
          © Copyright Valentin Rivetti 2021. All Rights Reserved
        </div>

      </footer>
    )
  }
}
