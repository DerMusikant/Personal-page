import React from 'react'

export default class HomeDetails extends React.Component{

  render(){
    return (
        <div className='anim w-3/4 text-center col-span-4 flex flex-col items-center md:col-span-2 md:row-span-2 lg:col-span-1 lg:row-span-4' data-delay={this.props.delay} data-trans={this.props.trans}>
         <h3>{this.props.title}</h3>
         <div className='my-5 w-2/3'><img src={this.props.img} alt={this.props.alt} /></div>
         <p>{this.props.info}</p>
        </div>
    )
  }
}
