import React from 'react'

export default class BackToTop extends React.Component{

  handleIntersection = (e) => {
    let btn = document.querySelector('.back-to-top')
    if(e[0].isIntersecting){
      btn.classList.add('hide');
    }else{
      btn.classList.remove('hide');
    }
  }

  handleClick = () => {
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'})
  }

  componentDidMount(){
    const observer = new IntersectionObserver(this.handleIntersection)
    observer.observe(document.querySelector('header'))
  }


  render(){
    return (
        <div className='back-to-top hide' onClick={this.handleClick}>
          <h1>xd</h1>
        </div>
    )
  }
}
