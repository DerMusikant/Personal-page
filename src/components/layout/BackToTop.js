import React from 'react'

import Top from '../../assets/icons/chevron-up-solid.svg'

export default class BackToTop extends React.Component{

  // ----------INTERSECION EVENT TO SHOW BUTTON-----------

  handleIntersection = (e) => {
    let btn = document.querySelector('.back-to-top')
    if(e[0].isIntersecting){
      btn.classList.add('hide')
    }else{
      btn.classList.remove('hide')
    }
  }

  // ---------------CLICK EVENT TO SCROLL TOP ------------

  handleClick = () => {
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'})
  }

  // --------------COMPONENT OBSERVER INSTANCE------------------

  componentDidMount(){
    this.observer = new IntersectionObserver(this.handleIntersection)
    this.observer.observe(document.querySelector('header'), )
  }


  render(){
    return (
        <div className='back-to-top fixed bg-purple-main right-8 bottom-8 w-14 h-14 rounded-full flex justify-center items-center hide md:w-10 md:h-10' onClick={this.handleClick}>
          <Top className='w-10 plat md:w-6 md:h-6'/>
        </div>
    )
  }
}
