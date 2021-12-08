import React from 'react'

import Grid from '../general/Grid'
import homeDragon from '../../assets/img/red-dragon.png'


export default class PresentationCard extends React.Component{

  handleClick = () => {document.getElementById('my-work').scrollIntoView({behavior: 'smooth'})}

  render(){
    return (
        <>
            <Grid title='Frontend Developer and dedicated nerd 😋' description={<p>Hello there! The name's Valentin Rivetti, and I'm here to help you on your journey!
              <br />I'm a Javascript Developer currently focusing on Frontend using ReactJs and training to be the best Fullstack!<br />Passionate about my work and hoping to make a great team...</p>} img={homeDragon} alt='Dragon logo' click={this.handleClick} button='See my work!'/>
        </>
    )
  }
}
