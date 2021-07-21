import React from 'react'
import Anim from '../components/Animation'
import HomeMain from '../components/home/HomeMain'
import HomeServices from '../components/home/HomeServices'



export default class Home extends Anim{

  render(){
    return (
      <main>
        <HomeMain />
        <HomeServices />
      </main>
    )
  }
}
