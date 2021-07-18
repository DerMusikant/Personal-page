import React from 'react'
import HomeMain from '../components/home/HomeMain'
import HomeDetails from '../components/home/HomeDetails'

export default class Home extends React.Component{

  render(){
    return (
      <main className='flex flex-col justify-center items-center'>

        <HomeMain />
        <HomeDetails />

      </main>
    )
  }
}
