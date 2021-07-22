import React from 'react'

export default class HomeDetails extends React.Component{

  render(){
    return (
        <div className={this.props.className} data-delay={this.props.delay} data-trans={this.props.trans}>
          <div className='card bg-gradient-to-r from-red-600 to-red-main plat flex flex-col items-center'>
           <h3 className='my-2 underline font-bold text-xl'>{this.props.title}</h3>
           <div className='bg-platinum p-3 w-2/3 border-2 rounded-3xl'><img src={this.props.img} alt={this.props.alt} /></div>
           <p className='w-4/5 my-2 font-semibold'>{this.props.info}</p>
          </div>
        </div>
    )
  }
}
