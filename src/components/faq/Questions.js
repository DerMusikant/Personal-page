import React from 'react'
import Question from './Question'

export default class Questions extends React.Component{

  handleClick = (e) => {
    let el
    e.target.id ? el = e.target : el = e.target.parentElement
    document.getElementById(`question-${el.id}`).scrollIntoView({ behavior: 'smooth' })
  }

  render(){
    return (
      <div className='questions'>
          <ul className='questions--list'>
            Contents:
            <li id='one' className='question-item transition-transform flex items-center my-2 p-2 shadow rounded cursor-pointer' onClick={this.handleClick}><div className='w-1 h-1 mx-2 bg-red-main'></div><div className='question'>What does a Web Developer do?</div></li>
            <li id='two' className='question-item transition-transform flex items-center  my-2 p-2 shadow rounded cursor-pointer' onClick={this.handleClick}><div className='w-1 h-1 mx-2 bg-red-main'></div><div className='question'>Question number two?</div></li>
            <li id='three' className='question-item transition-transform flex items-center  my-2 p-2 shadow rounded cursor-pointer' onClick={this.handleClick}><div className='w-1 h-1 mx-2 bg-red-main'></div><div className='question'>Question number three?</div></li>
            <li id='four' className='question-item transition-transform flex items-center  my-2 p-2 shadow rounded cursor-pointer' onClick={this.handleClick}><div className='w-1 h-1 mx-2 bg-red-main'></div><div className='question'>Question number four?</div></li>
            <li id='five' className='question-item transition-transform flex items-center  my-2 p-2 shadow rounded cursor-pointer' onClick={this.handleClick}><div className='w-1 h-1 mx-2 bg-red-main'></div><div className='question'>Question number five?</div></li>
            <li id='six' className='question-item transition-transform flex items-center  my-2 p-2 shadow rounded cursor-pointer' onClick={this.handleClick}><div className='w-1 h-1 mx-2 bg-red-main'></div><div className='question'>Question number six?</div></li>
            <li id='seven' className='question-item transition-transform flex items-center  my-2 p-2 shadow rounded cursor-pointer' onClick={this.handleClick}><div className='w-1 h-1 mx-2 bg-red-main'></div><div className='question'>Question number seven?</div></li>
            <li id='eight' className='question-item transition-transform flex items-center  my-2 p-2 shadow rounded cursor-pointer' onClick={this.handleClick}><div className='w-1 h-1 mx-2 bg-red-main'></div><div className='question'>Question number eight?</div></li>
            <li id='nine' className='question-item transition-transform flex items-center  my-2 p-2 shadow rounded cursor-pointer' onClick={this.handleClick}><div className='w-1 h-1 mx-2 bg-red-main'></div><div className='question'>Question number nine?</div></li>
            <li id='ten' className='question-item transition-transform flex items-center  my-2 p-2 shadow rounded cursor-pointer' onClick={this.handleClick}><div className='w-1 h-1 mx-2 bg-red-main'></div><div className='question'>Question number ten?</div></li>
          </ul>
        <div className='flex flex-col'>
          <Question id='question-one' title='What does a Web Developer do?' content="We basically create, modify and mantain Websites. We are responsible for the site's technical aspects, such as performance, capacity and inner functionality. (It's like coding a program but instead of downloading anything your client just visits a website, Nice!)"/>
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
