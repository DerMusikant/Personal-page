import React from 'react'
import ServiceCard from './ServiceCard'
import Button from '../general/Button'

import dragon from '../../assets/img/red-dragon.png'



export default class HomeDetails extends React.Component{

  render(){
    return (
        <section id='services' className='my-5'>
          <div className='grid grid-cols-2 lg:flex-row justify-items-center items-center text-center'>
            <div className='row-start-2 col-span-2 grid grid-cols-2 gap-y-5 justify-items-center items-start lg:col-auto lg:row-span-5'>
              <ServiceCard className='anim w-3/4 col-span-2 xs:col-span-1 xs:row-span-2' img={dragon} alt='' trans='fromLeft' delay='0.4s' title='Test title' info='Test info Test info Test info Test info Test info Test info Test'/>
              <ServiceCard className='anim w-3/4 col-span-2 xs:col-span-1 xs:row-span-2' img={dragon} alt='' trans='fromRight' title='Test title' info='Test info Test info Test info Test info Test info Test info Test info Test info Test info Test info '/>
              <ServiceCard className='anim w-3/4 col-span-2 xs:col-span-1 xs:row-span-2' img={dragon} alt='' trans='fromLeft' delay='0.4s' title='Test title' info='Test info Test info Test info Test info Test info Test info Test info Test'/>
              <ServiceCard className='anim w-3/4 col-span-2 xs:col-span-1 xs:row-span-2' img={dragon} alt='' trans='fromRight' title='Test title' info='Test info Test info Test info Test info Test info Test info Test info Test info Test info Test info '/>
            </div>
            <div className='flex flex-col lg:text-left col-span-2 lg:col-auto lg:row-span-3 lg:self-end'>
                <h3 className='rmain text-xl font-medium my-3'>Main Services Title</h3>
                <p className='my-10'>Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards </p>
            </div>
            <div className='button col-span-2 my-8 lg:my-0 lg:self-start lg:col-auto lg:row-span-2'>
              <Button content='Check out Services!' link='/services'/>
            </div>
          </div>
        </section>
    )
  }
}
