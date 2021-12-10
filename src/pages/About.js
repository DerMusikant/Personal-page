import React from 'react'
import Anim from '../components/Animation'

//Components

import PresentationCard from '../components/about/PresentationCard'
import Project from '../components/about/Project'
import Tech from '../components/about/Tech'

//Images

import draco from '../assets/img/Draco.png'
import dracoM from '../assets/img/DracoM.png'

import petBook from '../assets/img/PetBook.png'
import petBookM from '../assets/img/PetBookM.png'

import kitsu from '../assets/img/kitsu.png'

export default class About extends Anim{
  render(){
    return (
      <main>
        <PresentationCard />
        <h2 id='my-work' className='self-start p-5 font-bold font-sans'>Valentin Rivetti's Personal Projects:</h2>
        <Project desktop={draco} mobile={dracoM} desktopAlt='' mobileAlt='' title='Draco: Web Solutions' description=
          {
            <>
              OMG This very website!!<br/>
              Draco is a fictional company run and developed by... Me! (As you guessed)<br/>
              Made with all the tools you see at the end of the page, the main traits of this project are:
              <ul className='list-disc list-inside'>
                <li>ReactJs: Full project development and Single-page app</li>
                <li>TailWindCSS: Most styles and responsive design</li>
                <li>Git and Github: Yes please!</li>
              </ul>
            </>
          }
        />
        <Project flip='1' desktop={kitsu} desktopAlt='' title='Anime catalog' description=
          {
            <>
              This simple, (almost) un-styled page, is a data manipulation exercise using Kitsu's anime API<br/>
              Featuring a manual slider (Carousel), it presents to you the top 10 most popular anime, mangas and unreleased animes from this very moment.<br/>
              Clicking on an item results on an un-styled page showing complete info about your selection, this project features:
              <ul className='list-disc list-inside'>
                <li>ReactJs: Full project development using functional components</li>
                <li>TailWindCSS: Basic styling</li>
                <li>Kitsu's API: All the data presented on the website</li>
              </ul>
            </>
          }
        />
        <Project desktop={petBook} mobile={petBookM} desktopAlt='' mobileAlt='' title='PetBook' description=
          {
            <>
              PetBook is a FaceBook clone using GraphQL and React Apollo.<br/>
              GraphQL is an API data manipulation language developed by Facebook on 2012.<br/>
              This project features:
              <ul className='list-disc list-inside'>
                <li>ReactJs: Full project development and Single-page app</li>
                <li>Styled Components: Every CSS style and Responsive Design</li>
                <li>GraphQL: API and Queries</li>
                <li>React Apollo: GraphQL communication with React</li>
                <li>Login, Register and like a photo functionality</li>
              </ul>
            </>
          }
        />
        <Tech />
      </main>
  )
  }
}
