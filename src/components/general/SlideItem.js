import React from 'react'


export default class SlideItem extends React.Component{

  render(){
    const Icon = this.props.icon
    const name = this.props.name

    return (
      <div>
        <div className='flex flex-col items-center mx-5'>
          <Icon className='h-20'/>
          <span>{name}</span>
        </div>
      </div>
    )
  }

}
