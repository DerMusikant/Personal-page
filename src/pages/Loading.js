import React from 'react'


export default class Loading extends React.Component{
  render(){
    return (
        <div className='loading'>
          <div className='animate-bounce'>Loading, please wait...</div>
        </div>
  )
  }
}
