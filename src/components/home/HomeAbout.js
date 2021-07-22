import React from 'react'
import Slide from './Slide'
import Button from '../general/Button'



export default class HomeAbout extends React.Component{

  render(){
    return (
      <section className='w-full flex flex-col items-center'>
        <h3>
          Technologies I work with:
        </h3>
        <div class='delete'>
          <Slide />
        </div>
        <p>Want to know more about my skills?</p>
        <div className='button my-5'>
          <Button link='/about' content='Go to: About' />
        </div>
      </section>
    )
  }
}
