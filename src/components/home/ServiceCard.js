import React from 'react'

export default class HomeDetails extends React.Component{

  render(){
    return (
        <div className={this.props.className} data-delay={this.props.delay} data-trans={this.props.trans}>
          <div className='card flex flex-col items-center'>
           <h3 className='underline font-bold text-xl plat'>{this.props.title}</h3>
           <div className='my-5 p-3 w-2/3 border-2 rounded-3xl'><img src={this.props.img} alt={this.props.alt} /></div>
           <p className='w-4/5 my-2 font-semibold'>{this.props.info}</p>
          </div>
        </div>
    )
  }
}
