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
            <li id='two' className='question-item transition-transform flex items-center  my-2 p-2 shadow rounded cursor-pointer' onClick={this.handleClick}><div className='w-1 h-1 mx-2 bg-red-main'></div><div className='question'>So I pay you and get a Website running, right?</div></li>
            <li id='three' className='question-item transition-transform flex items-center  my-2 p-2 shadow rounded cursor-pointer' onClick={this.handleClick}><div className='w-1 h-1 mx-2 bg-red-main'></div><div className='question'>How much does a new Website cost?</div></li>
            <li id='four' className='question-item transition-transform flex items-center  my-2 p-2 shadow rounded cursor-pointer' onClick={this.handleClick}><div className='w-1 h-1 mx-2 bg-red-main'></div><div className='question'>How long does a new Website take?</div></li>
            <li id='five' className='question-item transition-transform flex items-center  my-2 p-2 shadow rounded cursor-pointer' onClick={this.handleClick}><div className='w-1 h-1 mx-2 bg-red-main'></div><div className='question'>Do you work with javascript only?</div></li>
            <li id='six' className='question-item transition-transform flex items-center  my-2 p-2 shadow rounded cursor-pointer' onClick={this.handleClick}><div className='w-1 h-1 mx-2 bg-red-main'></div><div className='question'>What does 'Responsive Design' mean?</div></li>
            <li id='seven' className='question-item transition-transform flex items-center  my-2 p-2 shadow rounded cursor-pointer' onClick={this.handleClick}><div className='w-1 h-1 mx-2 bg-red-main'></div><div className='question'>Who is supposed to design the website's colors, buttons, icons, text, etc?</div></li>
            <li id='eight' className='question-item transition-transform flex items-center  my-2 p-2 shadow rounded cursor-pointer' onClick={this.handleClick}><div className='w-1 h-1 mx-2 bg-red-main'></div><div className='question'>What if I need to modify an existing Website?</div></li>
            <li id='nine' className='question-item transition-transform flex items-center  my-2 p-2 shadow rounded cursor-pointer' onClick={this.handleClick}><div className='w-1 h-1 mx-2 bg-red-main'></div><div className='question'>Are you available right now?</div></li>
            <li id='ten' className='question-item transition-transform flex items-center  my-2 p-2 shadow rounded cursor-pointer' onClick={this.handleClick}><div className='w-1 h-1 mx-2 bg-red-main'></div><div className='question'>What if I need you to work on my WebDev Company or Programming team?</div></li>
          </ul>
        <div className='flex flex-col'>
          <Question id='question-one' title='What does a Web Developer do?' content="We basically create, modify and mantain Websites. We are responsible for the site's technical aspects, such as performance, capacity and inner functionality. (It's like coding a program but instead of downloading anything your client just visits a website, Nice!)"/>
          <Question id='question-two' title='So I pay you and get a Website running, right?' content={<>Not that easy. To publish your Website, most people follow 3 steps: {<ol className='list-decimal list-inside'><li>Develop a Website in a HTML file.</li><li>Rent a Web Hosting server to upload your files to.</li><li>Rent a Domain Name to your Website</li></ol>}My job is to Develop your Website (Step 1), but if you need help i could name you a few trusted services.</>}/>
          <Question id='question-three' title='How much does a new Website cost?' content="There's not a single answer to this question. A Website development is quoted based on the needs of each individual project. You might be asked a LOT of questions to give you a price. The most basic website (One page, no javascript website) should cost around $100"/>
          <Question id='question-four' title='How long does a new Website take?' content={<>Just like the previous question, it depends on the project. There are lots of variables that affects a project's completion like:<ul className='list-disc list-inside'><li>Info provided by the client.</li><li>Client's availability with feedback.</li><li>How soon the content is ready.</li><li>Project's complexity.</li></ul></>}/>
          <Question id='question-five' title='Do you work with javascript only?' content="Yes. I specialize in Frontend Development using ReactJs, Angular, Javascript Vanilla, allways the best option for your dream Website."/>
          <Question id='question-six' title="What does 'Responsive Design' mean?" content="It means your Website will be 100% mobile-friendly, so your clients can contact you wherever they are!"/>
          <Question id='question-seven' title="Who is supposed to design the website's colors, buttons, icons, etc?" content="You. You know what's best for your business, so it's usually best if you know exactly what you are looking for. If you couldn't, I can collaborate with a graphic designer for an extra price."/>
          <Question id='question-eight' title='What if I need to modify an existing Website?' content="I'm one E-mail away! But allways remember, It's often better to redo an app from scratch unless the existing code and documentation is high quality."/>
          <Question id='question-nine' title='Are you available right now?' content="Right now, I'm working one project at a time to give my clients the best of attentions, so you should hit me up and we could work together!"/>
          <Question id='question-ten' title='What if I need you to work on my WebDev Company or Programming team?' content='You should totally send me a message, please be free to check my Github Repositories!'/>
        </div>
      </div>
    )
  }
}
