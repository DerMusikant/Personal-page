import React from 'react'


//Just the icons completely ignore this
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

//Icons go in here
import SlideItem from './SlideItem'

export default class Slide extends React.Component{


  //Moves the slide one position to the right
  right = () => {

    const transition = () => {

      //Removes animation and returns content to normal
      this.state.slide.style.transition = 'none'
      this.state.slide.style.transform = `translateX(0)`
      this.state.slide.appendChild(firstElement)
      this.state.slide.removeEventListener('transitionend', transition)
    }

    const firstElement = this.state.slide.children[0]

    //Adds animation and moves content
    this.state.slide.style.transition = `all 1s cubic-bezier(0.5,0,0,1)`
    this.state.slide.style.transform = `translateX(-${firstElement.offsetWidth}px)`



    this.state.slide.addEventListener('transitionend', transition)
  }

  //Slide won't move unless it's on user's view
  handleIntersection = (entry) => {
    if(entry[0].intersectionRatio > 0){
      this.state.interval = setInterval(this.right, 2500)
    }else{
      clearInterval(this.state.interval)
    }
  }

  //Setting intersection observer
  constructor(){
    super()
    this.state= {
      observer: new IntersectionObserver(this.handleIntersection)
    }
  }

  //Manipulate DOM to get slider
  componentDidMount(){
    this.state.slide = document.querySelector('#slide')
    this.state.observer.observe(this.state.slide)
  }

  //Or else...
  componentWillUnmount(){
    clearInterval(this.state.interval)
  }

  render(){
    return (
      <div className='delete self-start xl:self-center overflow-x-hidden w-full'>
        <div id='slide' className='flex items-center flex-nowrap text-center font-sans font-bold blue'>
          <SlideItem name='HTML' icon={Html} />
          <SlideItem name='CSS' icon={Css} />
          <SlideItem name='TailWindCss' icon={Tailwind} />
          <SlideItem name='Javascript' icon={Js} />
          <SlideItem name='TypeScript' icon={Typescript} />
          <SlideItem name='React' icon={JsReact} />
          <SlideItem name='Webpack' icon={Webpack} />
          <SlideItem name='Figma' icon={Figma} />
          <SlideItem name='Photoshop' icon={Photoshop} />
          <SlideItem name='Git' icon={Git} />
          <SlideItem name='Github' icon={GitHub} />
          <SlideItem name='Web Components' icon={Web} />
        </div>
      </div>
    )
  }
}
