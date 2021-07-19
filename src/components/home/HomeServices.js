import React from 'react'
import ServiceCard from './ServiceCard'

import dragon from '../../assets/img/red-dragon.png'



export default class HomeDetails extends React.Component{

  render(){
    return (
        <section id='services' className='w-full text-center' >
          <div>
            <h3>Main Services Title</h3>
            <p>Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards </p>
          </div>
          <div className='grid gap-y-5 justify-items-center items-start grid-cols-4 grid-rows-4'>
            <ServiceCard img={dragon} alt='' trans='fromLeft' delay='0.4s' title='Test title' info='Test info Test info Test info Test info Test info Test info Test info Test info Test info Test info '/>
            <ServiceCard img={dragon} alt='' trans='fromRight' delay='0.8s' title='Test title' info='Test info Test info Test info Test info Test info Test info Test info Test info Test info Test info '/>
            <ServiceCard img={dragon} alt='' trans='fromLeft' delay='0.4s' title='Test title' info='Test info Test info Test info Test info Test info Test info Test info Test info Test info Test info '/>
            <ServiceCard img={dragon} alt='' trans='fromRight' delay='0.8s' title='Test title' info='Test info Test info Test info Test info Test info Test info Test info Test info Test info Test info '/>
          </div>
        </section>
    )
  }
}
