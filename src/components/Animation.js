class Anim extends React.Component {

    // INITIALIZE CLASS STATE

    constructor(props) {
      super(props)
      this.handleIntersection = this.handleIntersection.bind(this)
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
          block.classList.add('hide')
          block.style.transform = `${this.state.trans.[block.dataset.trans]} scale(0.8)`
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
