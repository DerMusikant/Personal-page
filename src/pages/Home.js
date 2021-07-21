import React from 'react'
import Anim from '../components/Animation'
import HomeMain from '../components/home/HomeMain'
import HomeServices from '../components/home/HomeServices'
import HomeSlide from '../components/home/HomeSlide'



export default class Home extends Anim{

  render(){
    return (
      <main>
        <HomeMain />
        <HomeServices />
        <HomeSlide />
      </main>
    )
  }
}
