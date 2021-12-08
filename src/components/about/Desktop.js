import React from 'react'
import desktop from '../../assets/img/desktop.png'

export default class Desktop extends React.Component{

  render(){
    return (
        <div className='relative flex justify-center'>
          <img src={desktop} alt='Computer monitor' />
          <img className='w-11/12 absolute desktop' src={this.props.img} alt={this.props.imgalt} />
        </div>
    )
  }
}
