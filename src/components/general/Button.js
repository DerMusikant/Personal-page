import React from 'react'
import {Link} from 'react-router-dom'

export default class Button extends React.Component{
  render(){
    return(
      <div className='button'>
        <Link to={this.props.link} className='text-center h-auto w-full anim plat bg-gradient-to-r from-red-600 to-red-main p-2 rounded-full'>
          {this.props.content}
        </Link>
      </div>
    )
  }
}
