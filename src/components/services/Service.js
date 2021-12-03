import React from 'react'

import homeDragon from '../../assets/img/red-dragon.png'


export default class HomeMain extends React.Component{

  handleClick = () => {document.getElementById('services').scrollIntoView()}

  render(){
    return (
        <div className='p-5 grid md:grid-cols-2'>
          <div className='anim flex items-center justify-center' data-trans='fromLeft'>
            <img className='w-1/2' alt='' src={homeDragon} />
          </div>
          <div className={`anim flex flex-col justify-center m-5 text-center row-start-1 text-center ${this.props.flip ? 'col-start-1 md:items-end md:text-right' : 'md:col-start-2 md:items-start md:text-left'}`} data-trans='fromRight' data-delay='1s'>
            <h2 className='rmain'>{this.props.title}</h2>
              {this.props.content}
          </div>
        </div>
    )
  }
}
