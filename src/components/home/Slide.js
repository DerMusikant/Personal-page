import React from 'react'

export default class Slide extends React.Component{

  right = () => {
    const transition = () => {
      this.state.slide.style.transition = 'none'
      this.state.slide.style.transform = `translateX(0)`
      this.state.slide.appendChild(firstElement)
      this.state.slide.removeEventListener('transitionend', transition)
    }

    const firstElement = this.state.slide.children[0]

    this.state.slide.style.transition = `all 2s cubic-bezier(0.5,0,0,1)`
    this.state.slide.style.transform = `translateX(-${firstElement.offsetWidth}px)`



    this.state.slide.addEventListener('transitionend', transition)
  }

  handleIntersection = (entry) => {
    if(entry[0].intersectionRatio > 0){
      this.state.interval = setInterval(this.right, 3000)
    }else{
      clearInterval(this.state.interval)
    }
  }

  constructor(){
    super()
    this.state= {
      observer: new IntersectionObserver(this.handleIntersection)
    }
  }

  componentDidMount(){
    this.state.slide = document.querySelector('#slide')
    this.state.observer.observe(this.state.slide)
  }

  componentWillUnmount(){
    clearInterval(this.state.interval)
  }

  render(){
    return (
      <div className='overflow-x-hidden'>
        <div id='slide' className='self-start flex flex-nowrap'>
          <div>
            <div className='w-40 h-40 m-5 bg-red-main'>
            </div>
          </div>
          <div>
            <div className='w-40 h-40 m-5 bg-purple-main'>
            </div>
          </div>
          <div>
            <div className='w-40 h-40 m-5 bg-blue-500'>
            </div>
          </div>
          <div>
            <div className='w-40 h-40 m-5 bg-red-main'>
            </div>
          </div>
          <div>
            <div className='w-40 h-40 m-5 bg-purple-main'>
            </div>
          </div>
          <div>
            <div className='w-40 h-40 m-5 bg-blue-500'>
            </div>
          </div>
          <div>
            <div className='w-40 h-40 m-5 bg-red-main'>
            </div>
          </div>
          <div>
            <div className='w-40 h-40 m-5 bg-purple-main'>
            </div>
          </div>
          <div>
            <div className='w-40 h-40 m-5 bg-blue-500'>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
