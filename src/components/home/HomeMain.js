import React from 'react'

import homeDragon from '../../assets/img/red-dragon.png'


export default class HomeMain extends React.Component{

  render(){
    return (
        <section className='home-main flex justify-center items-center text-center'>
          <div className='home-main-container'>
            <div className='home-main__grid justify-items-center items-center'>
              <div className='anim home-main__title' data-trans='fromLeft'>
                <h3 className='rmain md:text-3xl font-semibold'>A Dragon is inside your website</h3>
              </div>
              <div className='anim home-main__info text-sm md:text-base' data-trans='fromRight'>
                <p>I use the fire of wisdom to help your business outstand on the internet.<br />
                Together we can make the best dragon for your future company's website.</p>
              </div>
              <div className='home-main__button w-3/5 h-4/5'>
                <div className='button'>
                  <a href='#services' className='button-content w-full anim plat bg-gradient-to-r from-red-600 to-red-main p-2 rounded-full'>
                    Learn More
                  </a>
                </div>
              </div>
              <div className='anim home-dragon home-main__img' data-trans='fromBot' data-scale='0.5'>
                <img alt='' src={homeDragon} />
              </div>
            </div>
          </div>
        </section>
    )
  }
}
