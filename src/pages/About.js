import React from 'react'

import PresentationCard from '../components/about/PresentationCard'
import Tech from '../components/about/Tech'

export default class About extends React.Component{
  render(){
    return (
      <main>
        <PresentationCard />
        <Tech />
      </main>
  )
  }
}
