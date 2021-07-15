import React from 'react'

export default class Home extends React.Component{

// REMOVES HIDING STATE AND ELEMENT'S OBSERVATION

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
        fromLeft: 'translate(-100px, 0)',
        fromRight: 'translate(100px, 0)',
        fromBot: 'translate(0, 80px)'
      }
    }
  }

// ADDS ANIMATED ELEMENTS TO OBSERVATION

  componentDidMount(){
    this.observer = new IntersectionObserver(this.handleIntersection, {threshold: 0.2})
    const blocks = document.querySelectorAll('.anim')
    blocks.forEach( block => {
      block.style.transform = `${this.state.trans.[block.dataset.trans]} scale(0.8)`
      block.style.transition = `all 0.8s ease ${block.dataset.delay}`
      this.observer.observe(block)
    })
  }

  render(){
    return (
      <main className='flex flex-col justify-center items-center'>
        <div className='firstBlock anim hide w-10 bg-red-main' data-delay='1s' data-trans='fromBot'>
        </div>
      </main>
    )
  }
}
