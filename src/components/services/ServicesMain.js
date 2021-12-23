import React from 'react'

import Grid from '../general/Grid'
import developing from '../../assets/img/developing.png'



import Service from './Service'

export default class ServicesMain extends React.Component{

  handleClick = () => {document.getElementById('services').scrollIntoView({behavior: 'smooth'})}

  render(){
    return (
        <>
            <Grid title='Developing just what you need!' description={<p>From your mind to your desktop, tablet or phone...
              <br />You can trust me and start focusing on growing your business!</p>} img={developing} alt='Dragon logo' click={this.handleClick} button='Learn More'/>
        </>
    )
  }
}
