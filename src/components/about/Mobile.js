import React from 'react'
import mobile from '../../assets/img/mobilef.png'

export default class Mobile extends React.Component{

  render(){
    return (
      <div className='absolute bottom-0 right-0 h-1/2'>
          <img className='h-full' src={mobile} alt='Mobile phone' />
          <img className='absolute h-4/6 mobile' src={this.props.img} alt={this.props.imgalt} />
      </div>
    )
  }
}
