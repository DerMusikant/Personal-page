import React from 'react'

export default class Question extends React.Component{
  render(){
    return (
      <div id={this.props.id} className='shadow-2xl rounded-xl p-5 flex flex-col items-center text-center m-5'>
        <h3 className='rmain font-bold self-start text-2xl text-left'>{this.props.title}</h3>
        <p className='my-3'>{this.props.content}</p>
      </div>
    )
  }
}
