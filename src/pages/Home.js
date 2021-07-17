import React from 'react'

import homeDragon from '../assets/img/red-dragon.png'

export default class Home extends React.Component{

// REMOVES HIDING CLASS AND ELEMENT'S OBSERVATION

  handleIntersection = entries => {
    entries.forEach(entry => {
      if(entry.intersectionRatio > 0.2){
        entry.target.classList.remove('hide')
        entry.target.style.transform = ``
        this.observer.unobserve(entry.target)
      }
    })
  }

  // INITIALIZE CLASS STATE

  constructor(props){
    super(props)
    this.state = {
      trans: {
        fromLeft: 'translate(-200px, 0)',
        fromRight: 'translate(200px, 0)',
        fromBot: 'translate(0, 200px)'
      }
    }
  }

// ADDS ANIMATED ELEMENTS TO OBSERVATION WITH TRANSFORMATION AND TRANSITION

  componentDidMount(){
    this.observer = new IntersectionObserver(this.handleIntersection, {threshold: 0.2})
    const blocks = document.querySelectorAll('.anim')
    blocks.forEach( block => {
      block.style.transform = `${this.state.trans.[block.dataset.trans]} scale(0.8)`
      block.style.transition = `all 1s ease ${block.dataset.delay || `0s`}`
      this.observer.observe(block)
    })
  }

  render(){
    return (
      <main className='flex flex-col justify-center items-center'>
        { /* ----------------HOME INTRO START -------------- */ }
        <section className='block-1 grid grid-rows-5 grid-cols-2 items-center text-center'>
          <div className='col-span-2'>
            <h3>A Dragon is inside your website</h3>
          </div>
          <div className='col-span-2'>
            <p>I use the fire of the wise to help your company outstand on the internet realm.<br />
            Together we can make the best website for your business.</p>
          </div>
          <div className='col-span-2'>
            <div className='button'>Learn More</div>
          </div>
          <div className='row-start-1 row-span-2 col-span-2 flex justify-center'><img alt='' src={homeDragon} className='home-dragon'/></div>
        </section>
        { /* ----------------HOME INTRO END -------------- */ }
      </main>
    )
  }
}
