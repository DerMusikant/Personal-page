import React from 'react'

import Grid from '../general/Grid'
import homeDragon from '../../assets/img/red-dragon.png'

import Service from './Service'

export default class ServicesMain extends React.Component{

  handleClick = () => {document.getElementById('services').scrollIntoView()}

  render(){
    return (
        <>
          <section className='home-main flex justify-items-center items-center text-center'>
            <Grid title='Developing just what you need!' description={<p>From your mind to your desktop, tablet or phone...
              <br />You can trust me and start focusing on growing your business!</p>} img={homeDragon} alt='Dragon logo' click={this.handleClick}/>
          </section>
          <Service className='' content={<p>content</p>} title='Title test'/>
        </>
    )
  }
}
