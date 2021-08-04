import React from 'react'

export default class Anim extends React.Component {

    // INITIALIZE CLASS STATE

    constructor(props) {
      super(props)
      this.handleIntersection = this.handleIntersection.bind(this)
      this.state = {
        trans: {
          fromLeft: 'translate(-100px, 0)',
          fromRight: 'translate(100px, 0)',
          fromBot: 'translate(0, 100px)',
          flip: 'rotateY(180deg)'
        }
      }
    }

    // ADDS ANIMATED ELEMENTS TO OBSERVATION WITH TRANSFORMATION AND TRANSITION

      componentDidMount(){
        this.observer = new IntersectionObserver(this.handleIntersection, {threshold: 0.5})
        const blocks = document.querySelectorAll('.anim')
        blocks.forEach( block => {
          block.classList.add('hide')
          block.style.transform = `${this.state.trans.[block.dataset.trans]} scale(${block.dataset.scale || 1})`
          block.style.transition = `all 1s ease ${block.dataset.delay || `0s`}`
          this.observer.observe(block)
        })
      }

      // REMOVES HIDING CLASS AND ELEMENT'S OBSERVATION

      handleIntersection(entries){
        entries.forEach(entry => {
          if(entry.intersectionRatio > 0.2){
            entry.target.classList.remove('hide')
            entry.target.style.transform = ``
            this.observer.unobserve(entry.target)
          }
        })
      }
  }
