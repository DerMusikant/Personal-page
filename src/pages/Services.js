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
        <Service content={<p>Any company and charity organization needs a beautiful website to be seen and atract people to your cause!</p>} title='Business and organization'/>
        <Service content={<p>Give your customers a new taste and save the enviroment using a delicious online menu! (Did anybody say 'Mobile app'?)</p>} title='Cafe & Restaurant Websites' flip='1'/>
        <Service content={<p>Doctors, Lawyers, Plumbers, Music Teacher, you name it. Clients will easily contact you trough your future Website!</p>} title='Practitioner Websites'/>
        <Service content={<p>Maybe you need to show the world your amazing work of art, lucky you I'm here! I'll work to showcase your creativity.</p>} title='Portfolio Websites' flip='1'/>
      </main>
    )
  }
}
