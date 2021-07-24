import React from 'react'
import Anim from '../components/Animation'
import HomeMain from '../components/home/HomeMain'
import HomeServices from '../components/home/HomeServices'
import HomeAbout from '../components/home/HomeAbout'
import HomeContact from '../components/home/HomeContact'



export default class Home extends Anim{

  render(){
    return (
      <main>
        <HomeMain />
        <HomeServices />
        <HomeAbout />
        <HomeContact />
      </main>
    )
  }
}
