import React from 'react'

import Grid from '../general/Grid'
import homeDragon from '../../assets/img/red-dragon.png'

import Service from './Service'

export default class ServicesMain extends React.Component{

  handleClick = () => {document.getElementById('services').scrollIntoView({behavior: 'smooth'})}

  render(){
    return (
        <>
          <section className='home-main flex justify-items-center items-center text-center'>
            <Grid title='Developing just what you need!' description={<p>From your mind to your desktop, tablet or phone...
              <br />You can trust me and start focusing on growing your business!</p>} img={homeDragon} alt='Dragon logo' click={this.handleClick}/>
          </section>
          <h2 className='p-5 font-extrabold text-2xl text-center' id='services'>Websites that fulfills‏‏‎ ‎<div className='inline border-b-2 border-red-main'>everyone</div>'s needs.</h2>
          <Service content={<p>content content content content content content content content content content content content content content content </p>} title='Title test Title test'/>
          <Service content={<p>content content content content content content content content content content content content content content content </p>} title='Title test Title test' flip='1'/>
          <Service content={<p>content content content content content content content content content content content content content content content </p>} title='Title test Title test'/>
          <Service content={<p>content content content content content content content content content content content content content content content </p>} title='Title test Title test' flip='1'/>
        </>
    )
  }
}
