import React from 'react'

import homeDragon from '../../assets/img/red-dragon.png'


export default class HomeMain extends React.Component{

  handleClick = () => {document.getElementById('services').scrollIntoView()}

  render(){
    return (
        <div className='p-10 grid md:grid-cols-2'>
          <div className='anim flex items-center justify-center p-5' data-trans='fromLeft'>
            <img className='w-3/4' alt='' src={homeDragon} />
          </div>
          <div className='anim flex flex-col items-start justify-center' data-trans='fromRight' data-delay='1s'>
            <h2 className='rmain'>{this.props.title}</h2>
              {this.props.content}
          </div>
        </div>
    )
  }
}
