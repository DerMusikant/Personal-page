import React from 'react'
import Question from './Question'

export default class Questions extends React.Component{
  render(){
    return (
      <div className='questions'>
        <div></div>
        <div className='flex flex-col'>
          <Question title='Question number one?' content='Answer content Answer content Answer content Answer content Answer content Answer content aoeu'/>
          <Question title='Question number two?' content='Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content aoeu'/>
          <Question title='Question number three?' content='Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content  Answer content Answer content Answer content Answer content aoeu'/>
          <Question title='Question number four?' content='Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content aoeu'/>
          <Question title='Question number five?' content='Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content aoeu'/>
          <Question title='Question number six?' content='Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content aoeu'/>
          <Question title='Question number seven?' content='Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content aoeu'/>
        </div>
      </div>
    )
  }
}
