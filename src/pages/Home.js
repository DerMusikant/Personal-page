import React from 'react'
import Anim from '../components/Animation'
import HomeMain from '../components/home/HomeMain'
import HomeServices from '../components/home/HomeServices'



export default class Home extends Anim{

  render(){
    return (
      <main className='flex flex-col justify-center items-center overflow-x-hidden'>
        <HomeMain />
        <HomeServices />
      </main>
    )
  }
}
