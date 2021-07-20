import React from 'react'
import {Link} from 'react-router-dom'
import ServiceCard from './ServiceCard'

import dragon from '../../assets/img/red-dragon.png'



export default class HomeDetails extends React.Component{

  render(){
    return (
        <section id='services' className='w-full text-center' >
          <div className='flex flex-col items-center justify-center'>
            <div>
              <h3 className='rmain text-xl font-medium my-3'>Main Services Title</h3>
              <p className='my-5'>Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards </p>
            </div>
            <div className='button my-5'>
              <Link to='/services' className='w-full anim plat bg-gradient-to-r from-red-600 to-red-main p-3 rounded-full'>
                Services
              </Link>
            </div>
          </div>
          <div className='grid gap-y-5 justify-items-center items-start grid-cols-4 grid-rows-4'>
            <ServiceCard className='anim w-3/4 text-center col-span-4 flex flex-col items-center xs:col-span-2 xs:row-span-2 lg:col-span-1 lg:row-span-4' img={dragon} alt='' trans='fromLeft' delay='0.4s' title='Test title' info='Test info Test info Test info Test info Test info Test info Test info Test info Test info Test info '/>
            <ServiceCard className='anim w-3/4 text-center col-span-4 flex flex-col items-center xs:col-span-2 xs:row-span-2 lg:col-span-1 lg:row-span-4' img={dragon} alt='' trans='fromRight' delay='0.8s' title='Test title' info='Test info Test info Test info Test info Test info Test info Test info Test info Test info Test info '/>
            <ServiceCard className='anim w-3/4 text-center col-span-4 flex flex-col items-center xs:col-span-2 xs:row-span-2 lg:col-span-1 lg:row-span-4' img={dragon} alt='' trans='fromLeft' delay='0.4s' title='Test title' info='Test info Test info Test info Test info Test info Test info Test info Test info Test info Test info '/>
            <ServiceCard className='anim w-3/4 text-center col-span-4 flex flex-col items-center xs:col-span-2 xs:row-span-2 lg:col-span-1 lg:row-span-4' img={dragon} alt='' trans='fromRight' delay='0.8s' title='Test title' info='Test info Test info Test info Test info Test info Test info Test info Test info Test info Test info '/>
          </div>
        </section>
    )
  }
}
