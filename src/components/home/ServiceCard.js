import React from 'react'

export default class HomeDetails extends React.Component{

  render(){
    return (
        <div className={this.props.className} data-delay={this.props.delay} data-trans={this.props.trans}>
          <div className='card pmain flex flex-col items-center'>
           <div className='p-2 bg-platinum w-2/3'><img src={this.props.img} alt={this.props.alt} /></div>
           <h3 className='my-2 rmain font-bold text-xl'>{this.props.title}</h3>
           <p className='w-4/5 my-2 font-semibold text-sm'>{this.props.info}</p>
          </div>
        </div>
    )
  }
}
