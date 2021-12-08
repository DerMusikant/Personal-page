import React from 'react'
import Anim from '../components/Animation'

import PresentationCard from '../components/about/PresentationCard'
import Project from '../components/about/Project'
import Tech from '../components/about/Tech'

import draco from '../assets/img/Draco.png'
import dracoM from '../assets/img/DracoM.png'

export default class About extends Anim{
  render(){
    return (
      <main>
        <PresentationCard />
        <h2 id='my-work' className='self-start p-5 font-bold font-sans'>Valentin Rivetti's Personal Projects:</h2>
        <Project desktop={draco} mobile={dracoM} desktopAlt='' mobileAlt='' title='Draco by Valentin Rivetti' description=
          {
            <>
              OMG This very website!!<br/>
              Draco is a fictional company run and developed by... Me! (As you guessed so far)<br/>
              Made with all the tools you see at the end of the page, the main traits of this project are:
              <ul className='list-disc list-inside'>
                <li>ReactJs: Full project development and Single-page app</li>
                <li>TailWindCSS: Most styles and responsive design</li>
                <li>Git and Github: Yes please!</li>
              </ul>
            </>
          }
        />
        <Tech />
      </main>
  )
  }
}
