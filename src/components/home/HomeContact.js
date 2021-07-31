import React from 'react'
import {Link} from 'react-router-dom'
import dragon from '../../assets/img/red-dragon.png'

export default class HomeContact extends React.Component{

  render(){
    return (
      <div className='anim w-3/4 my-3 shadow-2xl grid justify-items-center items-center text-center sm:grid-cols-2' data-trans='flip'>
        <div className='relative text-6xl my-5'>
          <h3 className='font-style'>Thank you!</h3>
          <span className='text-base absolute -right-6 -bottom-2'>for visiting...</span>
        </div>
        <p className='sm:row-start-2'>I really wish to build a long term relationship with you!</p>
        <img className='w-3/5 py-5 sm:row-span-3' alt='' src={dragon} />
        <div>
          <div className='my-5'><Link to='/contact' className='contact-me plat bg-red-main p-3 w-full lg:w-auto hover:bg-platinum' onClick={this.handleClick}>Contact Me!</Link></div>
          <p>for more info... or just to say hello!</p>
        </div>
      </div>
    )
  }
}
