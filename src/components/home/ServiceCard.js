import React from 'react'

export default class HomeDetails extends React.Component{

  render(){
    return (
        <div className={this.props.className} data-delay={this.props.delay} data-trans={this.props.trans}>
         <h3>{this.props.title}</h3>
         <div className='my-5 w-2/3'><img src={this.props.img} alt={this.props.alt} /></div>
         <p>{this.props.info}</p>
        </div>
    )
  }
}
