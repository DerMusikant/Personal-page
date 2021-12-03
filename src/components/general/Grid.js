import React from 'react'

export default class Button extends React.Component{

  render(){
    return(

      <section className='home-main flex justify-items-center items-center text-center'>
        <div className='home-main__grid justify-items-center items-center'>
          <div className='anim home-main__title' data-trans='fromLeft'>
            <h3 className='rmain md:text-3xl font-semibold'>{this.props.title}</h3>
          </div>
          <div className='anim home-main__info text-sm md:text-base' data-trans='fromRight'>
            {this.props.description}
          </div>
          <div className='home-main__button w-3/5 h-4/5'>
            <div className='button learn-more'>
              <div onClick={this.props.click} className='button-content w-full anim plat bg-gradient-to-r from-red-600 to-red-main p-2 rounded-full'>
                {this.props.button}
              </div>
            </div>
          </div>
          <div className='anim home-dragon home-main__img' data-trans='fromBot' data-scale='0.5'>
            <img alt={this.props.alt} src={this.props.img} />
          </div>
        </div>
      </section>
    )
  }
}
