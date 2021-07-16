import React from 'react'

import mainDragon from '../assets/img/main-dragon.png'

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
        <section className='grid grid-rows-4'>
          <h3>A Dragon is inside your website</h3>
          <p>I use the fire of the wise to make it beat your competitors</p>
          <img alt='' src={mainDragon} />
        </section>
      </main>
    )
  }
}
