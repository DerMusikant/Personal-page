import React from 'react'
import homeDragon from '../../assets/img/red-dragon.png'


export default class HomeMain extends React.Component{

  render(){
    return (
        <section className='home-main flex justify-center items-center'>
          <div className='grid gap-2 grid-rows-6 grid-cols-2 items-center justify-items-center text-center lg:grid-rows-5'>
            <div className='anim col-span-2 lg:col-span-1 lg:row-span-2' data-trans='fromLeft'>
              <h3 className='rmain text-3xl font-semibold'>A Dragon is inside your website</h3>
            </div>
            <div className='anim col-span-2 lg:col-span-1 lg:row-span-2 lg:row-start-3' data-trans='fromRight'>
              <p>I use the fire of the wise to help your company outstand on the internet realm.<br />
              Together we can make the best website for your business.</p>
            </div>
            <div className='w-4/5 col-span-2 lg:col-span-1 lg:row-start-5'>
              <a href='#services' className='contents'>
                <div className='button anim plat bg-gradient-to-r from-red-600 to-red-main p-3 rounded-full'>
                  <span>Learn More</span>
                </div>
              </a>
            </div>
            <div className='anim row-start-1 row-span-3 col-span-2 lg:col-span-1 lg:col-start-2 lg:row-span-5' data-trans='fromBot' data-scale='0.5'>
              <img alt='' src={homeDragon} className='home-dragon'/>
            </div>
          </div>
        </section>
    )
  }
}
