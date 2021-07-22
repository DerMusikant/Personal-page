import React from 'react'
import {Link} from 'react-router-dom'

export default class Button extends React.Component{
  render(){
    return(
        <Link to={this.props.link} className='button button-content text-center h-auto w-full anim plat bg-gradient-to-r from-red-600 to-red-main p-2 rounded-full'>
          {this.props.content}
        </Link>
    )
  }
}
