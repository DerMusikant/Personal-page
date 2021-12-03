import React from 'react'
import ServicesMain from '../components/services/ServicesMain'
import Service from '../components/services/Service'
import Anim from '../components/Animation'



export default class Services extends Anim{

  render(){
    return (
      <main>
        <ServicesMain />
        <h2 className='p-5 font-extrabold text-2xl text-center' id='services'>
          Websites that fulfills‏‏‎ ‎
          <div className='inline border-b-2 border-red-main'>
            everyone
          </div>
          's needs.
        </h2>
        <Service content={<p>content content content content content content content content content content content content content content content </p>} title='Title test Title test'/>
        <Service content={<p>content content content content content content content content content content content content content content content </p>} title='Title test Title test' flip='1'/>
        <Service content={<p>content content content content content content content content content content content content content content content </p>} title='Title test Title test'/>
        <Service content={<p>content content content content content content content content content content content content content content content </p>} title='Title test Title test' flip='1'/>
      </main>
    )
  }
}
