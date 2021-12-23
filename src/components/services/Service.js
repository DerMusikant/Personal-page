import React from 'react'


export default class Service extends React.Component{

  handleClick = () => {document.getElementById('services').scrollIntoView()}

  render(){
    return (
        <div className='p-5 grid md:grid-cols-2'>
          <div className='anim flex items-center justify-center' data-trans={this.props.flip ? 'fromRight' : 'fromLeft'} data-delay='0.7s'>
            <img alt={this.props.alt} src={this.props.img} />
          </div>
          <div className={`anim flex flex-col justify-center m-5 text-center row-start-1 text-center ${this.props.flip ? 'col-start-1 md:items-end md:text-right' : 'md:col-start-2 md:items-start md:text-left'}`} data-trans={this.props.flip ? 'fromLeft' : 'fromRight'}>
            <h2 className='rmain'>{this.props.title}</h2>
              {this.props.content}
          </div>
        </div>
    )
  }
}
