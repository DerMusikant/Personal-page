import React from 'react'
import {Link} from 'react-router-dom'
import dragon from '../../assets/img/red-dragon.png'

export default class HomeContact extends React.Component{

  render(){
    return (
      <div>
        <div>
          <h3>Thank you!</h3>
          <span>for visiting...</span>
        </div>
        <p>I really wish to build a long term relationship with you!</p>
        <img alt='' src={dragon} />
        <div>
          <Link to='/contact' className='contact-me plat bg-red-main p-3 w-full lg:w-auto hover:bg-platinum' onClick={this.handleClick}>Contact Me!</Link>
          <p>for more info... or just to say hello!</p>
        </div>
      </div>
    )
  }
}
