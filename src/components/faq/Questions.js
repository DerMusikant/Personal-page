import React from 'react'
import Question from './Question'

export default class Questions extends React.Component{

  handleClick = (e) => { document.getElementById(`question-${e.target.id}`).scrollIntoView() }

  render(){
    return (
      <div className='questions'>
          <ul className='questions--list'>
            <li id='one' className='my-2 cursor-pointer' onClick={this.handleClick}>Question number one?</li>
            <li id='two' className='my-2 cursor-pointer' onClick={this.handleClick}>Question number two?</li>
            <li id='three' className='my-2 cursor-pointer' onClick={this.handleClick}>Question number three?</li>
            <li id='four' className='my-2 cursor-pointer' onClick={this.handleClick}>Question number four?</li>
            <li id='five' className='my-2 cursor-pointer' onClick={this.handleClick}>Question number five?</li>
            <li id='six' className='my-2 cursor-pointer' onClick={this.handleClick}>Question number six?</li>
            <li id='seven' className='my-2 cursor-pointer' onClick={this.handleClick}>Question number seven?</li>
            <li id='eight' className='my-2 cursor-pointer' onClick={this.handleClick}>Question number eight?</li>
            <li id='nine' className='my-2 cursor-pointer' onClick={this.handleClick}>Question number nine?</li>
            <li id='ten' className='my-2 cursor-pointer' onClick={this.handleClick}>Question number ten?</li>
          </ul>
        <div className='flex flex-col'>
          <Question id='question-one' title='Question number one?' content='Answer content Answer content Answer content Answer content Answer content Answer content aoeu'/>
          <Question id='question-two' title='Question number two?' content='Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content aoeu'/>
          <Question id='question-three' title='Question number three?' content='Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content  Answer content Answer content Answer content Answer content aoeu'/>
          <Question id='question-four' title='Question number four?' content='Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content aoeu'/>
          <Question id='question-five' title='Question number five?' content='Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content aoeu'/>
          <Question id='question-six' title='Question number six?' content='Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content aoeu'/>
          <Question id='question-seven' title='Question number seven?' content='Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content aoeu'/>
          <Question id='question-eight' title='Question number eight?' content='Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content aoeu'/>
          <Question id='question-nine' title='Question number nine?' content='Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content aoeu'/>
          <Question id='question-ten' title='Question number ten?' content='Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content Answer content aoeu'/>
        </div>
      </div>
    )
  }
}
