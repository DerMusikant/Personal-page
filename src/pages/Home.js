import React from 'react'
import homeDragon from '../assets/img/red-dragon.png'
import Anim from '../components/Animation.js'


export default class Home extends Anim{

  render(){
    return (
      <main className='flex flex-col justify-center items-center'>
        { /* ----------------HOME INTRO START -------------- */ }
        <section className='main-block grid grid-rows-5 grid-cols-2 items-center text-center'>
          <div className='col-span-2'>
            <h3 className='rmain text-3xl font-semibold'>A Dragon is inside your website</h3>
          </div>
          <div className='col-span-2'>
            <p>I use the fire of the wise to help your company outstand on the internet realm.<br />
            Together we can make the best website for your business.</p>
          </div>
          <div className='col-span-2'>
            <a href='#details'><div className='button bg-red-main rounded-xl'>Learn More</div></a>
          </div>
          <div className='row-start-1 row-span-2 col-span-2 flex justify-center anim' data-trans='flip'><img alt='' src={homeDragon} className='home-dragon'/></div>
        </section>
        { /* ----------------HOME INTRO END -------------- */ }
        <section id='details' className='h-20 bg-purple-main'>
        </section>
      </main>
    )
  }
}
