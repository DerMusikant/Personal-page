import React from 'react'
import ServiceCard from './ServiceCard'
import Button from '../general/Button'

import dev from '../../assets/img/development.png'
import user from '../../assets/img/user.png'
import responsive from '../../assets/img/responsive.png'
import seo from '../../assets/img/seo.png'



export default class HomeDetails extends React.Component{

  render(){
    return (
        <section id='homeServices' className='my-5'>
          <div className='grid grid-cols-2 lg:flex-row justify-items-center items-center text-center'>
            <div className='row-start-2 col-span-2 grid grid-cols-2 gap-y-5 justify-items-center items-start lg:col-auto lg:row-span-5'>
              <ServiceCard className='anim w-3/4 col-span-2 xs:col-span-1 xs:row-span-2' img={dev} alt='' trans='fromLeft' delay='0.4s' title='Web Development' info="You can trust my work, I'll create a website that will light your competitors on fire!"/>
              <ServiceCard className='anim w-3/4 col-span-2 xs:col-span-1 xs:row-span-2' img={user} alt='' trans='fromRight' title="User's Experience" info='Everything should be easy, no more slow and difficult-to-use Websites. User centered websites are my speciality.'/>
              <ServiceCard className='anim w-3/4 col-span-2 xs:col-span-1 xs:row-span-2' img={responsive} alt='' trans='fromLeft' delay='0.4s' title='Responsive Design' info="Did you know more than 50% of web traffic comes from mobile? Mobile users would like to be accepted too!"/>
              <ServiceCard className='anim w-3/4 col-span-2 xs:col-span-1 xs:row-span-2' img={seo} alt='' trans='fromRight' title='Search Engine Optimization' info='Many adventurers are searching for your treasures! Your website will be easy to find, even in the misterious fogs of the unknown...'/>
            </div>
            <div className='flex flex-col lg:text-left col-span-2 lg:col-auto lg:row-span-3 lg:self-end'>
                <h3 className='rmain text-xl font-medium my-3'>A smart and cute Website, just like you ❤</h3>
                <p className='my-10'>
                  I work hard using the latest technology to build a pixel perfect website, no matter how basic or complex your business might be.<br/>

                </p>
            </div>
            <div className='button col-span-2 my-8 lg:my-0 lg:self-start lg:col-auto lg:row-span-2'>
              <Button content='Check out Services!' link='/services'/>
            </div>
          </div>
        </section>
    )
  }
}
