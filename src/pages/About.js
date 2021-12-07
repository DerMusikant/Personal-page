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
        <Project desktop={draco} mobile={dracoM} desktopAlt='' mobileAlt='' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed cursus purus, ac hendrerit dolor. Ut enim velit, iaculis a gravida eu, gravida quis tortor. Suspendisse potenti. Donec risus ex, efficitur et ultrices eget, tincidunt a risus. Ut pretium nulla vitae aliquet malesuada. Nunc sit amet sollicitudin nunc. Ut urna diam, dictum vitae euismod eu, tempor in felis. Duis aliquet ultrices velit ultricies mollis. Maecenas a volutpat justo. Vivamus ornare gravida diam sed pellentesque. Suspendisse placerat pharetra feugiat.' title='Lorem ipsum dolor sit amet'/>
        <Tech />
      </main>
  )
  }
}
