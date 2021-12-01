import React from 'react'

import Grid from '../general/Grid'

import homeDragon from '../../assets/img/red-dragon.png'


export default class HomeMain extends React.Component{

  handleClick = () => {document.getElementById('services').scrollIntoView()}

  render(){
    return (
        <section className='home-main flex justify-items-center items-center text-center'>
          <Grid title='Developing just what you need!' description={<p>Portfolios, Personal Website, helping your team with a project...
            <br />You can trust me and start focusing on growing your business!</p>} img={homeDragon} alt='Dragon logo' click={this.handleClick}/>
        </section>
    )
  }
}
