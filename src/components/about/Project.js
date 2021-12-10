import React from 'react'

import Desktop from './Desktop'
import Mobile from './Mobile'

export default class Project extends React.Component{

  render(){
    return (
        <div className='my-5 w-full grid justify-items-center md:grid-cols-2'>
              <div className='relative anim' data-trans={this.props.flip ? 'fromRight' : 'fromLeft'} data-delay='0.7s'>
                <Desktop img={this.props.desktop} alt={this.props.desktopAlt} />
                {
                  this.props.mobile ?
                  <Mobile img={this.props.mobile} imgalt={this.props.mobileAlt}/>
                  : <></>
                }
              </div>
            <div className={`m-2 anim row-start-1 text-center md:items-start md:text-left ${this.props.flip ? 'col-start-1' : 'md:col-start-2'}`} data-trans={this.props.flip ? 'fromLeft' : 'fromRight'}>
              <h2 className='font-bold font-sans'>{this.props.title}</h2>
              {this.props.description}
            </div>
        </div>
    )
  }
}
