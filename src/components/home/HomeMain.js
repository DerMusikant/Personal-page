import React from 'react'

import homeDragon from '../../assets/img/red-dragon.png'

import Grid from '../general/Grid'


export default class HomeMain extends React.Component{

  handleClick = () => {document.getElementById('homeServices').scrollIntoView({behavior: 'smooth'})}

  render(){
    return (
          <Grid title='A Dragon is inside your website' description={<p>I use the fire of wisdom to help your business outstand on the internet.
            <br />Together we can make the best dragon for your future company's website.</p>} img={homeDragon} alt='Dragon logo' click={this.handleClick} button='Learn More'/>
    )
  }
}
