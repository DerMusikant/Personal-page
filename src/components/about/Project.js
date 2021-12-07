import React from 'react'

export default class Project extends React.Component{

  render(){
    return (
        <div className='w-full grid justify-items-center md:grid-cols-2'>
              <div className='w-5/6 relative anim' data-trans={this.props.flip ? 'fromRight' : 'fromLeft'} data-delay='0.7s'>
                <img src={this.props.desktop} alt={this.props.desktopAlt} />
                {
                  this.props.mobile ?
                  <img src={this.props.mobile} alt={this.props.mobileAlt} className='h-3/5 absolute bottom-0 right-0' />
                  : <></>
                }
              </div>
            <div className={`anim row-start-1 text-center ${this.props.flip ? 'col-start-1 md:items-end md:text-right' : 'md:col-start-2 md:items-start md:text-left'}`} data-trans={this.props.flip ? 'fromLeft' : 'fromRight'}>
              <h2 className='font-bold font-sans'>{this.props.title}</h2>
              {this.props.description}
            </div>
        </div>
    )
  }
}
