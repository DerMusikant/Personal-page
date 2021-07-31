import React from 'react'

import Html from '../../assets/icons/html5.svg'
import Css from '../../assets/icons/css3.svg'
import Js from '../../assets/icons/js.svg'
import JsReact from '../../assets/icons/react.svg'
import Figma from '../../assets/icons/figma.svg'
import Git from '../../assets/icons/git.svg'
import GitHub from '../../assets/icons/github-brands.svg'
import Tailwind from '../../assets/icons/tailwindcss.svg'
import Photoshop from '../../assets/icons/photoshop.svg'
import Web from '../../assets/icons/web-components.svg'
import Webpack from '../../assets/icons/webpack.svg'
import Typescript from '../../assets/icons/typescript.svg'

export default class Slide extends React.Component{

  right = () => {
    const transition = () => {
      this.state.slide.style.transition = 'none'
      this.state.slide.style.transform = `translateX(0)`
      this.state.slide.appendChild(firstElement)
      this.state.slide.removeEventListener('transitionend', transition)
    }

    const firstElement = this.state.slide.children[0]

    this.state.slide.style.transition = `all 1s cubic-bezier(0.5,0,0,1)`
    this.state.slide.style.transform = `translateX(-${firstElement.offsetWidth}px)`



    this.state.slide.addEventListener('transitionend', transition)
  }

  handleIntersection = (entry) => {
    if(entry[0].intersectionRatio > 0){
      this.state.interval = setInterval(this.right, 2500)
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
      <div className='delete self-start xl:self-center overflow-x-hidden w-full'>
        <div id='slide' className='flex items-center flex-nowrap text-center font-sans font-bold blue'>
          <div>
            <div className='flex flex-col items-center mx-5'>
              <Html className='h-20'/>
              <span>HTML</span>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center mx-5'>
              <Css className='h-20'/>
              <span>CSS</span>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center mx-5'>
              <Tailwind className='h-20'/>
              <span>TailwindCss</span>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center mx-5'>
              <Js className='h-20'/>
              <span>Javascript</span>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center mx-5'>
              <Typescript className='h-20'/>
              <span>Typescript</span>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center mx-5'>
              <JsReact className='h-20'/>
              <span>React</span>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center mx-5'>
              <Webpack className='h-20'/>
              <span>Webpack</span>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center mx-5'>
              <Figma className='h-20'/>
              <span>Figma</span>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center mx-5'>
              <Photoshop className='h-20'/>
              <span>Photoshop</span>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center mx-5'>
              <Git className='h-20'/>
              <span>Git</span>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center mx-5'>
              <GitHub className='h-20'/>
              <span>GitHub</span>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center mx-5'>
              <Web className='h-20'/>
              <span>Web Components</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
