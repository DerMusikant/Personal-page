import React from 'react'

import Face from '../../assets/icons/Facebook-square-brands.svg'
import Linked from '../../assets/icons/linkedin-brands.svg'
import Git from '../../assets/icons/github-brands.svg'

export default class ContactInfo extends React.Component{

  render(){
    return (
      <>
        <h2 className='pmain m-5 text-3xl font-bold'> Ready to get started? </h2>

        <p className='m-5 text-2xl font-bold rmain'> You can find me on: </p>

        <div className='flex'>
          <a className='contents blue' href='https://www.facebook.com/RivettiValentin/'>
            <Face className='contact p-2' />
          </a>
          <a className='contents blue' href='https://www.linkedin.com/in/valentinrivetti/'>
            <Linked className='contact p-2' />
          </a>
          <a className='contents blue' href='https://github.com/DerMusikant'>
            <Git className='contact p-2' />
          </a>
        </div>
      </>
    )
  }
}
